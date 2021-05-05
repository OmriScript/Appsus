
export class ComposeMail extends React.Component {
state = {
    to:'',
    cc:'',
    subject:'',
    message:''
}

    hundleChange = (ev) => {
        console.log(ev.target.value);
        const prop = ev.target.name;
        const val = ev.target.value;
        this.setState({[prop]:[val]})
    }

    
    render() {
        
        return(
            <section className="" >
                <form action="" className="compose-page flex">
                    <div className="compose-header">New Message</div>
                    <input type="text" name='to' placeholder="To:" onBlur={this.hundleChange} />
                    <input type="text" name='cc' placeholder="cc:" onBlur={this.hundleChange} />
                    <input type="text" name='subject' placeholder="subject:" onBlur={this.hundleChange} />
                    <textarea rows='5' name='message'  ></textarea>

                </form>
            </section>

            
        )
        
        

    }    
    
}