export class MailFilter extends React.Component {



    render() {
        return (


            <section className="mail-search-bar flex">
                <select className="padding">
                    <option>All Mails</option>
                    <option>Read</option>
                    <option>Unread</option>
                </select>
                <input type="text" className="mail-search-input padding" placeholder="Search-mail" />
            </section>

        )


    }



}