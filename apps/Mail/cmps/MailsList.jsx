import { MailPreview } from './MailPreview.jsx'
export function MailsList({mails, setReadState, deleteItem }) {
    return (
        <section className="mail-mails-container " >
            {mails.map(mail =>{
               return <MailPreview mail={mail} key={mail.id}  setReadState={setReadState}  deleteItem={deleteItem}/>}
            )}
        </section>

    )
}
