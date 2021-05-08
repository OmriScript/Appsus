export class ComposeMail extends React.Component {
    state = {
        to: "",
        cc: "",
        subject: "",
        message: ""
    }

    clearFields = () => {
        this.setState({ to: "", cc: "", subject: "", message: "" })
        alert('cleared')
    }

    handleChange = (ev) => {
        const prop = ev.target.name;
        const val = ev.target.value;
        this.setState({ [prop]: val })
    }

    onSendMail = (ev) => {
        const newSentMail = {
            to: this.state.to,
            subject: this.state.subject,
            message: this.state.message
        }
        this.props.saveItem(newSentMail).then(() => {
            this.clearFields();
            this.props.toggleIsCompose();
        })
        ev.preventDefault();
    }


    render() {

        return (
            <section className="compose-page flex" >
                <form className="compose-form flex column" onSubmit={this.onSendMail}>
                    <button onClick={() => this.props.toggleIsCompose()}>X</button>
                    <div className="compose-header">New Message</div>
                    <input type="email" name='to' placeholder="To:" required value={this.state.to} onChange={this.handleChange} />
                    <input type="text" name='cc' placeholder="cc:" value={this.state.cc} onChange={this.handleChange} />
                    <input type="text" name='subject' placeholder="subject:" required value={this.state.subject} onChange={this.handleChange} />
                    <textarea rows='30' name='message' required value={this.state.message} onChange={this.handleChange} ></textarea>
                    <button >Send</button>
                </form>

            </section>

        )

    }

}
