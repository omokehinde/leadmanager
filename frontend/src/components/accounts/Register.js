import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Register extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        comfirmPassword: ''
    };

    onSubmit = e => {
        e.preventDefault();
        console.log("Submit");
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { username, email, password, confirmPassword } = this.state;
        return (
            <div className="col-md-6 m-auto">
                <div className="card card-body mt-5">
                    <h2 className="text-center">Register</h2>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                          <label>Username</label>
                          <input type="text"
                           name="username" value={username} 
                           onChange={this.onChange} 
                           className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email"
                                name="email" value={email}
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
                            <label>Confirm Password</label>
                            <input type="password"
                                name="confirmPassword" value={confirmPassword}
                                onChange={this.onChange}
                                className="form-control" />
                        </div>
                        <div class="form-group">
                            <button type="submit" className="btn btn-primary">
                                Register
                            </button>
                        </div>
                        <p>Already have an account? <Link to="/login">Login</Link></p>
                    </form>
                </div>
                
            </div>
        )
    }
}

export default Register
