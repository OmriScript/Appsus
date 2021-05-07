import { mailService } from '../services/mail-service.js'
import { MailsList } from '../../Mail/cmps/MailsList.jsx'
import { ComposeMail } from './ComposeMail.jsx'
import { SentMails } from './SentMails.jsx'
import { MailFilter } from '../cmps/MailFilter.jsx'
import { MailSideBar } from '../cmps/MailSideBar.jsx'

export class MailApp extends React.Component {

  state = {
    mailsToShow: [],
    inMails: [],
    outMails: [],
    isCompose: false,
    isSentMails: false
  }

  componentDidMount() {
    this.getMails('inMails')
    // this.getInMails('outMails')

  }

  FilterList = (value) => {
    this.state.mailsToShow.filter(mail => {
      mail.includes
    })

  }

  getMails = (itemsName) => {
    mailService.loadItems(itemsName)
      .then(items => {
        this.setState({ [itemsName]: items, mailsToShow: items })
      })
  }
  setReadState = (id, readState) => {
     const inMails = this.state.inMails;
     const idx = inMails.findIndex(item => item.id === id);
     if (idx > -1) {
       inMails[idx].isRead = readState;
       this.setState({inMails});
     }
  }
  toggleIsCompose = () => {
    this.setState({ isCompose: !this.state.isCompose })
  }

  openSentMailsPage = () => {
    this.setState({ isSentMails: true })
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
    const { inMails, outMails, mailsToShow, isCompose } = this.state
    if (!inMails) return <div>Loading...</div>
    return (
      <section className="mail-app flex">

        <MailSideBar getMails={this.getMails} toggleIsCompose={this.toggleIsCompose} />

        <section className="mail-main-container flex column">

          <MailFilter />

          <MailsList mails={mailsToShow} getMails={this.getMails} setReadState={this.setReadState} changeToTrue={this.changeToTrue} />
          {isCompose && <ComposeMail toggleIsCompose={this.toggleIsCompose} />}
        </section>

        {/* {this.state.isSentMails && <SentMails />} */}

      </section>


    )
  }
}
