import { MailPreview } from './MailPreview.jsx'
export function MailsList({ inMails,getInMails }) {
    return (

        <section className="mail-mails-container " >
            {inMails.map(mail =>{ 
               return <MailPreview mail={mail} key={mail.id} getInMails={getInMails} />}
            )}
        </section>

    )


}
