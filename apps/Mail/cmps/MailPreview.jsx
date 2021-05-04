const { Link } = ReactRouterDOM
export function MailPreview({inMail}) {

    return (
        <Link to={ }>
            <div className="mail-mail-preview flex space-between ">
                <i>*</i>
                <div className="name">Name</div>
                <div className="mail-subject">Subject</div>
                <div className="mail-message">Message</div>
                <div className="mail-time">Time</div>
            </div>
        </Link>
    )

}