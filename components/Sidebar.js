import { connect } from 'react-redux';
import { addNote, getNotes, selectNote, deleteNote } from '../redux/actions/noteAction';

class Sidebar extends React.Component{
    componentDidMount(){
        this.props.getNotes();
    }

    addNote = () => {
        var date = new Date().getDate();
        var month = new Date().getMonth();
        var year = new Date().getFullYear();

        const newNote = {
            id: Date.now(),
            date: date + '/' + month + '/' + year,
            title: "New Note",
            body: ""
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
                <div className="w-100 text-center">
                    <h2 className="text-white">Notable</h2>
                </div>
                <div className="w-100 text-center">
                    <button className="btn btn-outline-info m-1" onClick={() => this.addNote()}>New</button>
                    <button className="btn btn-outline-danger m-1" onClick={() =>this.deleteNote()}>Delete</button>
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

export default connect(mapStateToProps, {getNotes, addNote, selectNote, deleteNote})(Sidebar);