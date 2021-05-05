import { MailPreview } from './MailPreview.jsx'
export function MailsList({ inMails }) {
    console.log(inMails);
    return (

        <section className="mail-mails-container " >
            {inMails.map(mail =>{ 
               return <MailPreview mail={mail} key={mail.id} />}
            )}
        </section>

    )


}
