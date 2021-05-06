import { mailService } from '../services/mail-service.js'
import { MailsList } from '../../Mail/cmps/MailsList.jsx'
import { ComposeMail } from './ComposeMail.jsx'
import { SentMails } from './SentMails.jsx'

export class MailApp extends React.Component {

  state = {
    inMails: null,
    isCompose: false,
    isSentMails:false
  }

  componentDidMount() {
    this.getInMails()
  }


  getInMails = () => {
    mailService.loadInMails()
      .then(inMails => {
        this.setState({ inMails })
      })
  }

  toggleIsCompose = () => {
    this.setState({ isCompose: !this.state.isCompose })
  }

  openSentMailsPage=() => {
    this.setState({isSentMails: true})
  }

  render() {
    if (!this.state.inMails) return <div>Loading...</div>
    return (
      <section className="mail-app flex">
        
        <section className="mail-side-bar flex column ">
          <button className="mail-compose-btn " onClick={() => this.setState({ isCompose: !this.state.isCompose })} >+Compose</button>
          <ul>
            <li className="mail-inbox-btn"><a > Inbox </a></li>
            <li className="mail-starred-btn"><a >Starred </a></li>
            <li className="mail-sent-btn" onClick={this.openSentMailsPage}><a >Sent Mail </a></li>
            <li><a className="mail-drafts-btn">Drafts </a></li>
            <li><a className="mail-drafts-btn">[------18%------] </a></li>
          </ul>

        </section>

        {!this.state.isSentMails && <section className="mail-main-container flex column">

          <section className="mail-search-bar flex">
            <select className="padding">
              <option>All Mails</option>
              <option>Read</option>
              <option>Unread</option>
            </select>
            <input type="text" className="mail-search-input padding" placeholder="Search-mail" />
          </section>

          <MailsList mails={this.state.inMails} getInMails={this.getInMails} />
          {this.state.isCompose && <ComposeMail toggleIsCompose={this.toggleIsCompose} />}
        </section>}

        {this.state.isSentMails && <SentMails/>}

      </section>


    )
  }
}