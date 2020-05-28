import { connect } from 'react-redux';
import { updateNoteTitle } from '../redux/actions/noteAction';

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
            this.debouncedFn = this.debounce(() => {
                this.props.updateNoteTitle(event.target.value)
            }, 3000)
        }

        this.debouncedFn();
    }

    render(){
        return (
            <div>

                {this.props.note ? (
                    <form className="w-100" key={this.props.note.id}>
                        <div className="form-group w-100">
                        <input type="Text" style={{borderStyle: "none"}} className="form-control" id="title" placeholder="Title" onChange={this.onChange} defaultValue={this.props.note.title} />
                        <small className="form-text text-muted">{this.props.note.date}</small>
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
        note: state.notesReducer.note
    }
}

export default connect(mapStateToProps, { updateNoteTitle })(Header);