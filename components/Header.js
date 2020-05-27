import { connect } from 'react-redux';

class Header extends React.Component{

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
                {this.props.note ? (
                    <div className="form-group w-100">
                    <input type="Text" style={{borderStyle: "none"}} className="form-control" id="title" placeholder="Title" defaultValue={this.props.note.title} />
                    <small className="form-text text-muted">{this.props.note.date}</small>
                </div>
                ) : (
                    <div></div>
                )

                }
                
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        note: state.notesReducer.note
    }
}

export default connect(mapStateToProps)(Header);