class Sidebar extends React.Component{
    state = {
        notes: []
    }

    note1 = {
        id: 1,
        date: "",
        title: "sadf",
        body: "saf"
    }

    note2 = {
        id: 1,
        date: "",
        title: "sadf",
        body: "sadf"
    }

    addNote = () => {
        this.setState({
            notes: [note1, note2]
        })
    }

    deleteNote = () => {

    }

    render(){
        // this.items = this.state.notes.map((item, key) =>
        //     <button className="btn btn-outline-light w-100 mb-1 mt-1">{}</button>
        // )
        return(
            <div className="w-100">
                <div className="w-100 text-center">
                    <h2 className="text-white">Notable</h2>
                </div>
                <div className="w-100 text-center">
                    <button className="btn btn-outline-info m-1" onClick={() => this.addNote()}>New</button>
                    <button className="btn btn-outline-danger m-1">Delete</button>
                </div>
                <div className="w-100">
                    
                    <button className="btn btn-outline-light w-100 mb-1">Note 1</button>

                </div>
            </div>
            
        )
    }
}

export default Sidebar;