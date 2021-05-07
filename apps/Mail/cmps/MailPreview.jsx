const { Link } = ReactRouterDOM
import { mailService } from '../services/mail-service.js';
import { MailDetails } from '../cmps/MailDetails.jsx';
import { LongTxt } from '../cmps/LongTxt.jsx';
export class MailPreview extends React.Component {
    state = {
        isOpen: false
    }
    onDeleteMail = () => {
        const { mails, mail } = this.props
        mailService.deleteItem(mails, mail.id);
        this.props.getMails(mail.type)
    }




    render() {
        // const {}
        const { mail } = this.props;
        return (
            <React.Fragment>
                <div className="mail-mail-preview flex space-between "
                    onClick={() => {
                        this.setState({ isOpen: !this.state.isOpen })
                    }}>
                    <div className="name">{mail.from}</div>
                    <div className="mail-subject">{mail.subject}</div>
                    <div className="mail-message"><LongTxt txt={mail.message} /></div>
                    <button className="mail-preview-btn" onClick={() => this.onDeleteMail({ mail })}><i className="fas fa-trash"></i></button>
                    <div className="mail-time">{mail.receivedTime}</div>
                </div>

                { this.state.isOpen && <MailDetails mail={mail} />}
            </React.Fragment>
        )
    }

}