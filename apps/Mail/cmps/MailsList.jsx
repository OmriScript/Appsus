import { MailPreview } from './MailPreview.jsx'
export function MailsList({ mails,getInMails }) {
    return (

        <section className="mail-mails-container " >
            {mails.map(mail =>{ 
               return <MailPreview mail={mail} key={mail.id} getInMails={getInMails} mails={mails} />}
            )}
        </section>

    )


}
