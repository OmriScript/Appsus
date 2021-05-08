export class MailSideBar extends React.Component {



    render() {
        return (
            <section className="mail-side-bar flex column ">
                <button className="mail-compose-btn " onClick={() => this.props.toggleIsCompose()} >+ Compose</button>
                <ul>
                    <li className="mail-inbox-btn" onClick={() => this.props.setCurrentMailBox('inMails') }><a> Inbox </a></li>
                    <li className="mail-starred-btn"><a >Starred </a></li>
                    <li className="mail-sent-btn" onClick={() => this.props.setCurrentMailBox('outMails')}><a >Sent Mail </a></li>
                    <li><a className="mail-drafts-btn">Drafts </a></li>
                    <li><a className="mail-drafts-btn">[------18%------] </a></li>
                </ul>

            </section>
        )
    }



}
