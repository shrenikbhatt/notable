import { loginUser, registerUser } from '../redux/actions/userActions';
import { connect } from 'react-redux'

class Verification extends React.Component{
    state = {
        username: "",
        password: "",
        confirm_password: "",
        register: false
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

    confirm_passwordHandler = (e) => {
        this.setState({
            confirm_password: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        if (this.state.register){
            const data = {
                username: this.state.username,
                password: this.state.password,
                confirm_password: this.state.confirm_password
            }
            this.props.registerUser(data)
        }
        else{
            const data = {
                username: this.state.username,
                password: this.state.password,
            }
            this.props.loginUser(data)
        }
    }
    
    viewHandler = () => {
        this.setState({
            register: !this.state.register
        })
    }

    render() {
        return(
            <div className="container w-100" style={{height: "100vh"}}>
                <div className="row justify-content-center align-items-center" style={{height: "100vh"}}>
                    <div className="col-6 p-4" style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>

                {this.state.register? (
                    <form>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control" id="InputUsername1" aria-describedby="textHelp" value={this.state.username} onChange={this.usernameHandler}/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" id="InputPassword1" value={this.state.password} onChange={this.passwordHandler} />
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input type="password" className="form-control" id="InputPassword2" value={this.state.confirm_password} onChange={this.confirm_passwordHandler} />
                        <small className="form-text text-muted">Already have an account? <a href="#" onClick={this.viewHandler}>Login</a></small>
                    </div>
                    <button type="submit" onClick={this.submitHandler} className="btn btn-outline-primary">Submit</button>
                </form>

                ) : (

            <form>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" id="InputUsername1" aria-describedby="textHelp" value={this.state.username} onChange={this.usernameHandler}/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" id="InputPassword1" value={this.state.password} onChange={this.passwordHandler} />
                    <small className="form-text text-muted">Don't have an account? <a href="#" onClick={this.viewHandler}>Register</a></small>
                </div>
                <button type="submit" onClick={this.submitHandler} className="btn btn-outline-primary">Submit</button>
            </form>
                )

                }
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {

    }
}

export default connect( mapStateToProps, {loginUser, registerUser}) (Verification);