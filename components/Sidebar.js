import { connect } from 'react-redux';
import { addNote, getNotes, selectNote, deleteNote } from '../redux/actions/noteAction';
import { logoutUser } from '../redux/actions/userActions';
const jwt = require("jsonwebtoken");


class Sidebar extends React.Component{
    componentDidMount(){
        this.props.getNotes();
    }

    addNote = () => {
        var date = new Date().getDate();
        var month = new Date().getMonth();
        var year = new Date().getFullYear();

        const author = jwt.verify(localStorage.getItem("token"), "n0ta6l3S3cr3t")

        const newNote = {
            date: date + '/' + month + '/' + year,
            title: "New Note",
            body: "",
            author: author.username
        }
        this.props.addNote(newNote);
    }

    deleteNote = () => {
        this.props.deleteNote(this.props.note)
    }

    selectNote = (item) => {
       // console.log(item)
        this.props.selectNote(item);
    }

    render(){
        this.items;
        if (this.props.notes){
            this.items = [...this.props.notes].reverse().map((item, key) =>
                <button className="btn btn-outline-light w-100 mb-1 mt-1" onClick={() => this.selectNote(item)} key={key}>{item.title}</button>
            )
        }
        else this.items = <div></div>
        return(
            <div className="w-100">
                <div className="w-100">
                    <button className="btn btn-primary btn-sm float-left" onClick={() => this.props.logoutUser()}>Logout</button>
                    <div className="w-100 text-center">
                       <h2 className="text-white">Notable</h2>                    
                    </div>
                </div>
                <div className="w-100 text-center">
                    <button className="btn btn-outline-info m-1" onClick={() => this.addNote()}>New</button>
                    <button disabled={!this.props.note} className="btn btn-outline-danger m-1" onClick={() =>this.deleteNote()}>Delete</button>
                </div>
                <div className="w-100">
                    {this.items}
                    {/* <button className="btn btn-outline-light w-100 mb-1">Note 1</button> */}

                </div>
            </div>
            
        )
    }
}

const mapStateToProps = state => {
    return{
        note: state.notesReducer.note,
        notes: state.notesReducer.notes
    }
};

export default connect(mapStateToProps, {getNotes, addNote, selectNote, deleteNote, logoutUser})(Sidebar);