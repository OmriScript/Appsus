import { MailPreview } from './MailPreview.jsx'
export function MailsList({ mails,getMails }) {
    return (

        <section className="mail-mails-container " >
            {mails.map(mail =>{ 
               return <MailPreview mail={mail} key={mail.id} getMails={getMails} mails={mails} />}
            )}
        </section>

    )


}
