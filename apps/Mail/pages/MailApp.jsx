import { mailService } from '../services/mail-service.js'
import { MailsList } from '../../Mail/cmps/MailsList.jsx'
import { ComposeMail } from './ComposeMail.jsx'
import { SentMails } from './SentMails.jsx'
import { MailFilter } from '../cmps/MailFilter.jsx'
import { MailSideBar } from '../cmps/MailSideBar.jsx'

export class MailApp extends React.Component {

  state = {
    mailsToShow: null,
    inMails: null,
    outMails: null,
    isCompose: false,
    isSentMails: false
  }

  componentDidMount() {
    this.getMails('inMails')
    // this.getInMails('outMails')

  }


  getMails = (itemsName) => {
    mailService.loadItems(itemsName)
      .then(items => {
        this.setState({ [itemsName]: items, mailsToShow: items })
      })
  }

  toggleIsCompose = () => {
    this.setState({ isCompose: !this.state.isCompose }, () => console.log(this.state.isCompose))
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
    if (!this.state.inMails) return <div>Loading...</div>
    return (
      <section className="mail-app flex">

        <MailSideBar getMails={this.getMails} toggleIsCompose={this.toggleIsCompose} />

        <section className="mail-main-container flex column">

          <MailFilter />

          <MailsList mails={this.state.mailsToShow} getMails={this.getMails} changeToTrue={this.changeToTrue} />
          {this.state.isCompose && <ComposeMail toggleIsCompose={this.toggleIsCompose} />}
        </section>

        {/* {this.state.isSentMails && <SentMails />} */}

      </section>


    )
  }
}