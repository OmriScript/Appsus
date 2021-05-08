import { mailService } from '../services/mail-service.js'
import { MailsList } from '../../Mail/cmps/MailsList.jsx'
import { ComposeMail } from './ComposeMail.jsx'
import { MailFilter } from '../cmps/MailFilter.jsx'
import { MailSideBar } from '../cmps/MailSideBar.jsx'

export class MailApp extends React.Component {

  state = {
    mailBox: [],
    search: null,
    isCompose: false,
    currentMailBox: 'inMails'
  }

  componentDidMount() {
    this.refreshMailBox()
    // this.getInMails('outMails')

  }

  refreshMailBox = () => {
    const { currentMailBox } = this.state;
    return mailService.loadItems(currentMailBox)
      .then(items => {
        this.setState({ mailBox: items });
      })
  }

  setCurrentMailBox = (type) => {
    this.setState({ currentMailBox: type }, () => {
      this.refreshMailBox();
    })
  }
  setFilter = (search) => {
    this.setState({ search });
  }

  filteredMailBox = () => {
    const { search, mailBox } = this.state;
    if (!search) return mailBox;
    const filteredList = mailBox.filter((item) => {
      return (item.subject.includes(search) ||
        item.message.includes(search) ||
        (item.from && item.from.includes(search)) ||
        (item.to && item.to.includes(search))
        );
    });
    return filteredList;
  }


  setReadState = (id, readState) => {
    const mailBox = this.state.mailBox;
    const idx = mailBox.findIndex(item => item.id === id);
    if (idx > -1) {
      mailBox[idx].isRead = readState;
      this.setState({ mailBox });
    }
  }
  toggleIsCompose = () => {
    this.setState({ isCompose: !this.state.isCompose })
  }

  deleteItem = (id) => {
    mailService.deleteItem(id).then(() => {
      this.refreshMailBox();
    })
  }
  saveItem = (mail) => {
    return mailService.saveItem(mail).then(() => {
      return this.refreshMailBox();
    })
  }
  // changeToTrue = (mails, theMail) => {
  //   console.log('hhii');
  //   const idx = mails.findIndex(mail => {
  //     return (theMail.id === mail.id)
  //   })
  //   this.setState({
  //     [mails]: {
  //       ...this.state[mails],
  //       [idx]: {
  //         ...this.state[mails][idx],
  //         isRead: true
  //       }
  //     }
  //   }, () => console.log(this.state))
  // }


  render() {
    const { mailBox, isCompose } = this.state
    if (mailBox.length === 0) return <div>Loading...</div>

    const mailsToShow = this.filteredMailBox();
    mailsToShow.sort((a,b)=>{
      return b.date - a.date;
    });
    return (
      <section className="mail-app flex">

        <MailSideBar setCurrentMailBox={this.setCurrentMailBox} toggleIsCompose={this.toggleIsCompose} />

        <section className="mail-main-container flex column">

          <MailFilter setFilter={this.setFilter} />

          <MailsList mails={mailsToShow} setReadState={this.setReadState} deleteItem={this.deleteItem} />
          {isCompose && <ComposeMail toggleIsCompose={this.toggleIsCompose} saveItem={this.saveItem} />}
        </section>

        {/* {this.state.isSentMails && <SentMails />} */}

      </section>
    )
  }
}
