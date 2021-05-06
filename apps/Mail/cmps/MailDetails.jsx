export function MailDetails({ mail }) {
    
    
    return (

        <div className="mail-mail-preview flex" >
            <i>*</i>
            <div className="name">{mail.from}</div>
            <div className="mail-subject">{mail.subject}</div>
            <div className="mail-message">{mail.message}</div>
            <div className="mail-time">{mail.receivedTime}</div>
        </div>

   

)

}
