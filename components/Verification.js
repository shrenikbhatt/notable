import { loginUser, registerUser } from '../redux/actions/userActions';
import { connect } from 'react-redux'

class Verification extends React.Component{
    state = {
        username: "",
        password: ""
    }

    usernameHandler = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    passwordHandler = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.props.loginUser(this.state)
    }

    render() {
        return(
            <form>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" id="InputUsername1" aria-describedby="textHelp" value={this.state.username} onChange={this.usernameHandler}/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" id="InputPassword1" value={this.state.password} onChange={this.passwordHandler} />
                    <small className="form-text text-muted">Don't have an account? <a href="#">Register</a></small>
                </div>
                <button type="submit" onClick={this.submitHandler} className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {

    }
}

export default connect( mapStateToProps, {loginUser, registerUser}) (Verification);