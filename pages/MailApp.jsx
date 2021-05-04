import {mailService} from '../services/mail-service.js'

export class MailApp extends React.Component {

  state = {

  }

  componentDidMount () {
    this.getInMAils()
  }


getInMAils = () => {
  mailService.getInMails()
  .then(inMails => {
    console.log(inMails);
  })
}


render() {
  
  return (
    <section className="container">
      <h2>MailApp</h2>
    </section>
  )
}
}