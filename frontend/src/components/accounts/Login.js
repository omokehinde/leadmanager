import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Login extends Component {
    state = {
        username: '',
        password: ''
    };

    onSubmit = e => {
        e.preventDefault();
        console.log("Submit");
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { username, password } = this.state;
        return (
            <div className="col-md-6 m-auto">
                <div className="card card-body mt-5">
                    <h2 className="text-center">Login</h2>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Username</label>
                            <input type="text"
                                name="username" value={username}
                                onChange={this.onChange}
                                className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password"
                                name="password" value={password}
                                onChange={this.onChange}
                                className="form-control" />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">
                                Login
                            </button>
                        </div>
                        <p>Don't have an account? <Link to="/register">Register</Link></p>
                    </form>
                </div>

            </div>
        )
    }
}

export default Login;