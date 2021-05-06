import { mailService } from '../services/mail-service.js'
import { MailsList } from '../../Mail/cmps/MailsList.jsx'

export class SentMails extends React.Component {
    state = {
        outMails: null
    }

    componentDidMount() {
        this.getOutMails()
    }

    getOutMails = () => {
        mailService.loadOutMails()
        .then(outMails => this.setState({outMails},()=> {console.log(this.state.outMails); }))
    }

    render() {
        // const {outMails} = this.state;
        if (!this.state.outMails) return <div>Loading...</div>
        return (
            <MailsList mails={this.state.outMails} getInMails={this.getOutMails} />
        )
    }
}