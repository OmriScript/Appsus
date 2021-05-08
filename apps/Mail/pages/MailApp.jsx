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
    unReadCounter: 0,
    currentMailBox: 'inMails'
  }

  componentDidMount() {
    this.refreshMailBox()
    // this.getInMails('outMails')

  }

  refreshMailBox = () => {
    const { currentMailBox } = this.state;
    return Promise.all([
      mailService.loadItems(currentMailBox),
      mailService.countUnRead()
    ]).then(([items, unReadCounter]) => {
        this.setState({ mailBox: items, unReadCounter});
    });
  }

  mailsCounter = () => { 
    return this.state.unReadCounter;
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
      return mailService.updateItem(id,mailBox[idx]).then(() => {
       this.refreshMailBox();
      })
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

  createItem = (mail) => {
    return mailService.createItem(mail).then(() => {
      return this.refreshMailBox();
    })
  }

  render() {
    const { mailBox, isCompose } = this.state
    if (mailBox.length === 0) return <div>Loading...</div>

    const mailsToShow = this.filteredMailBox();
    mailsToShow.sort((a, b) => {
      return b.date - a.date;
    });
    return (
      <section className="mail-app flex">

        <MailSideBar setCurrentMailBox={this.setCurrentMailBox} toggleIsCompose={this.toggleIsCompose} unReadCounter={this.state.unReadCounter} />

        <section className="mail-main-container flex column">

          <MailFilter setFilter={this.setFilter} />

          <MailsList mails={mailsToShow} setReadState={this.setReadState} deleteItem={this.deleteItem} />
          {isCompose && <ComposeMail toggleIsCompose={this.toggleIsCompose} createItem={this.createItem} />}

        </section>

        {/* {this.state.isSentMails && <SentMails />} */}

      </section>
    )
  }
}
