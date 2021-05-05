const { Link } = ReactRouterDOM
import { MailDetails } from '../cmps/MailDetails.jsx';
import { LongTxt } from '../cmps/LongTxt.jsx';
export class MailPreview extends React.Component {
    state = {
        isOpen: false
    }
    render() {
        const { mail } = this.props
        console.log(this.state.isOpen)
        return (
            <React.Fragment>
                <div className="mail-mail-preview flex space-between " onClick={() => {
                    this.setState({ isOpen: !this.state.isOpen }, () => { console.log(this.state.isOpen) })
                }}>
                    <i>*</i>
                    <div className="name">{mail.from}</div>
                    <div className="mail-subject">{mail.subject}</div>
                    <div className="mail-message"><LongTxt txt={mail.message}/></div>
                    <div className="mail-time">{mail.receivedTime}</div>
                </div>

                { this.state.isOpen && <MailDetails mail={mail} />}
            </React.Fragment>
        )
    }

}