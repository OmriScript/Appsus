import { mailService } from '../services/mail-service.js'
import { MailsList } from '../../Mail/cmps/MailsList.jsx'
import { ComposeMail } from './ComposeMail.jsx'

export class MailApp extends React.Component {

  state = {
    inMails: null,
    isCompose: true
  }

  componentDidMount() {
    this.getInMails()
  }


  getInMails = () => {
    mailService.loadInMails()
      .then(inMails => {
        this.setState({ inMails }, () => { console.log(this.state.inMails); })
      })
  }


  render() {
    if (!this.state.inMails) return <div>Loading...</div>
    return (
      <section className="mail-app flex">

        <section className="mail-side-bar flex column ">
          <button className="mail-compose-btn " onClick={()=>this.setState({isCompose:!this.state.isCompose})} >+Compose</button>
          <ul>
            <li className="mail-inbox-btn"><a > Inbox </a></li>
            <li className="mail-starred-btn"><a >Starred </a></li>
            <li className="mail-sent-btn"><a >Sent Mail </a></li>
            <li><a className="mail-drafts-btn">Drafts </a></li>
            <li><a className="mail-drafts-btn">[------18%------] </a></li>
          </ul>

        </section>

        <section className="mail-main-container flex column">

        {!this.state.isCompose && <section className="mail-search-bar flex">
            <select className="padding">
              <option>All Mails</option>
              <option>Read</option>
              <option>Unread</option>
            </select>
            <input type="text" className="mail-search-input padding" placeholder="Search-mail" />
          </section>}

          {!this.state.isCompose && <MailsList inMails={this.state.inMails} getInMails={this.getInMails} />}
          {this.state.isCompose && <ComposeMail />}
        </section>


      </section>


    )
  }
}