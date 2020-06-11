import { connect } from 'react-redux';
import { updateNoteTitle } from '../redux/actions/noteAction';
import moment from 'moment'

class Header extends React.Component{

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

        if (!this.debouncedFn) {
            this.debouncedFn = this.debounce((event) => {
                this.props.updateNoteTitle(event.target.value, this.props.note.note_id)
            }, 500)
        }
        this.debouncedFn(event);
    }

    render(){
        return (
            <div className="w-100">

                {this.props.note ? (
                    <form className="w-100" key={this.props.note.note_id}>
                        <div className="form-group w-100">
                            <input type="Text" style={{borderStyle: "none"}} className="form-control" id="title" placeholder="Title" onChange={this.onChange} defaultValue={this.props.note.title} />
                            <div className="row w-100">
                                <div className="col">
                                <small className="form-text text-muted">{moment(this.props.note.date).format("YYYY-MM-DD")}</small> 
                                </div>
                                <div className="col">
                                <small className="text-muted form-text text-right">{this.props.save}</small>
                                </div>
                            </div>
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
    return {
        note: state.notesReducer.note,
        save: state.notesReducer.saveState
    }
}

export default connect(mapStateToProps, { updateNoteTitle })(Header);