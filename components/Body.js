import { connect } from 'react-redux'

class Body extends React.Component{
    render(){
        return (
            <form className="w-100 h-100">
                {this.props.note ? (
                    <div className="form-group w-100 h-100">
        <textarea style={{borderStyle: "none", borderTop: "1px solid black"}} className="form-control h-100" id="body" placeholder="Body" defaultValue={this.props.note.body}/>
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
    return{
        note: state.notesReducer.note
    }
}

export default connect(mapStateToProps)(Body);