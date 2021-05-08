export class LongTxt extends React.Component {
    state = {
        isLongTxtShown: false
    }

    toggleIsLongTxtShown = () => {
        this.setState({ isLongTxtShown: !this.state.isLongTxtShown })
    }
    render() {
        const { txt,chars } = this.props;
        const { isLongTxtShown } = this.state;
        // const btnTxt = isLongTxtShown ? 'less' : 'more';
        let txtShow;
        if (isLongTxtShown || !isLongTxtShown && txt.length < chars) {
            txtShow = txt;
        } else {
            txtShow = txt.substring(0, chars) + '...';
        }

        return (
            <div className="long-txt" >
                <p>{txtShow}</p>
                {/* { txt.length > 30 && <button className="btn btn-more" onClick={this.toggleIsLongTxtShown}>Read {btnTxt}</button>} */}
            </div>
        )
    }
}