import { MailDetails } from '../cmps/MailDetails.jsx';
import { LongTxt } from '../cmps/LongTxt.jsx';
export class MailPreview extends React.Component {
    state = {
        isOpen: false
    }

    onDeleteItem = (event) => {
        const { mail } = this.props;
        event.cancelBubble=true;
        this.props.deleteItem(mail.id)
    }
    render() {
        // const {}
        const { mail } = this.props;
        return (
            <React.Fragment>
                <div className="mail-mail-preview flex space-between "
                    onClick={() => {
                        this.setState({ isOpen: !this.state.isOpen }, () => {
                            this.props.setReadState(mail.id, true);
                        })
                    }}>
                    <div className="name">{mail.type === 'inMails' ? mail.from: mail.to}</div>
                    <div className="mail-subject">{mail.subject}</div>
                    <div className="mail-message"><LongTxt txt={mail.message} /></div>
                    <button className="mail-preview-btn" onClick={this.onDeleteItem}><i className="fas fa-trash"></i></button>
                    <div className="mail-time">{mail.date}</div>
                </div>

                { this.state.isOpen && <MailDetails mail={mail} />}
            </React.Fragment>
        )
    }

}
