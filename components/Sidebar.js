import { connect } from 'react-redux';
import { addNote, getNotes } from '../redux/actions/noteAction';

class Sidebar extends React.Component{

    // note1 = {
    //     id: 1,
    //     date: "",
    //     title: "sadf",
    //     body: "saf"
    // }

    // note2 = {
    //     id: 2,
    //     date: "",
    //     title: "sadf",
    //     body: "sadf"
    // }

    // state = {
    //     notes: [this.note1, this.note2]
    // }

    componentDidMount(){
        this.props.getNotes();
    }

    addNote = () => {
        const newNote = {
            id: Date.now(),
            date: "",
            title: "",
            body: ""
        }

        this.props.addNote(newNote);

        // this.setState({
        //     notes: [...this.state.notes, newNote]
        // })
    }

    deleteNote = () => {

    }

    render(){
        this.items;
        if (this.props.notes){
            this.items = this.props.notes.map((item, key) =>
                <button className="btn btn-outline-light w-100 mb-1 mt-1" key={key}>{item.title}</button>
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
                    <button className="btn btn-outline-danger m-1 disabled">Delete</button>
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

export default connect(mapStateToProps, {getNotes, addNote})(Sidebar);