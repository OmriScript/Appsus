export class MailFilter extends React.Component {


    handleChange = (ev) => {
        const value = ev.taget.type==='number'? +ev.target.value : ev.target.value;

    }

    render() {
        return (


            <section className="mail-search-bar flex">
                {/* <select className="padding">
                    <option>All Mails</option>
                    <option>Read</option>
                    <option>Unread</option>
                </select> */}
                <input type="text"  className="mail-search-input padding" placeholder="Search-mail" onChange={this.handleChange} />
            </section>

        )


    }



}