import { MailPreview } from './MailPreview.jsx'
export function MailsList({ mails,getMails,changeToTrue, setReadState }) {
    return (

        <section className="mail-mails-container " >
            {mails.map(mail =>{
               return <MailPreview mail={mail} key={mail.id} getMails={getMails} setReadState={setReadState} mails={mails} changeToTrue={changeToTrue} />}
            )}
        </section>

    )
}
