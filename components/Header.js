class Header extends React.Component{
    state = {
        date: '',
        title: ''
    }

    componentDidMount(){
        var date = new Date().getDate();
        var month = new Date().getMonth();
        var year = new Date().getFullYear();

        this.setState({
            date: date + '/' + month + '/' + year
        })
    }

    render(){
        return (
            <form className="w-100">
                <div className="form-group w-100">
                    <input type="Text" style={{borderStyle: "none"}} className="form-control" id="title" placeholder="Title" />
                    <small className="form-text text-muted">{this.state.date}</small>
                </div>
            </form>
        )
    }
}

export default Header;