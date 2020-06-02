import { connect } from 'react-redux'
import { updateNote, updateSaveState } from '../redux/actions/noteAction';

class Body extends React.Component{
    debounce = (func, delay) => {
        let deb;
        return function() {
            const context = this
            const args = arguments
            clearTimeout(deb)
            deb = setTimeout(() => func.apply(context, args), delay)
        }
    }

    onChange = (event) => {
        event.persist();

        if (!this.debouncedFn1) {
            this.debouncedFn1 = this.debounce(() => {
                this.props.updateSaveState()
            }, 600)
        }
        if (!this.debouncedFn) {
            this.debouncedFn = this.debounce((event) => {
                this.props.updateNote(event.target.value)
            }, 3000)
        }
        
        this.debouncedFn1();
        this.debouncedFn(event);
    }

    render(){
        return (
            <div className="w-100 h-100">
                {this.props.note ? (
                <form className="w-100 h-100" key={this.props.note.id}>
                
                    <div className="form-group w-100 h-100">
                        <textarea style={{borderStyle: "none", borderTop: "1px solid black"}} className="form-control h-100" id="body" placeholder="Body" onChange={this.onChange} defaultValue={this.props.note.body}/>
                    </div>
                </form>
                ) : (
                    <div></div>
                )

                
                
                
                }
            </div>
            
        )
    }

}

const mapStateToProps = state => {
    return{
        note: state.notesReducer.note
    }
}

export default connect(mapStateToProps, { updateNote, updateSaveState })(Body);