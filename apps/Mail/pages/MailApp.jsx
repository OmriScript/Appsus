import { mailService } from '../services/mail-service.js'
import { MailPreview } from '../../Mail/cmps/MailPreview.jsx'

export class MailApp extends React.Component {

  state = {
    inMails: null
  }

  componentDidMount() {
    this.getInMails()
  }


  getInMails = () => {
    mailService.getInMails()
      .then(inMails => {
        this.setState({inMails})
      })
  }


  render() {

    return (
      <section className="mail-app flex">

        <section className="mail-side-bar flex column ">
          <button className="mail-compose-btn padding">Compose</button>
          <ul>
            <li><a className="mail-inbox-btn"> Inbox </a></li>
            <li><a className="mail-starred-btn">Starred </a></li>
            <li><a className="mail-sent-btn">Sent Mail </a></li>
            <li><a className="mail-drafts-btn">Drafts </a></li>
            <li><a className="mail-drafts-btn">[------18%------] </a></li>
          </ul>

        </section>

        <section className="mail-main-container flex column">

          <section className="mail-search-bar">
            <input type="text" className="mail-search-input" placeholder="Search-mail" />
            <select className="padding">
              <option>All</option>
              <option>Read</option>
              <option>Unread</option>
            </select>
          </section>

          <section className="mail-mails-container " >

            <MailPreview/>

            <div className="mail-mail-preview flex space-between ">
              <i>*</i>
              <div className="name">Name</div>
              <div className="mail-subject">Subject</div>
              <div className="mail-message">Message</div>
              <div className="mail-time">Time</div>

            </div>
            <div className="mail-mail-preview flex space-between ">
              <i>*</i>
              <div className="name">Name</div>
              <div className="mail-subject">Subject</div>
              <div className="mail-message">Message</div>
              <div className="mail-time">Time</div>

            </div>

          </section>


        </section>


      </section>


    )
  }
}