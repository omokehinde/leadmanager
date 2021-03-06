import React, { Component } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import store from '../../store';

export class Login extends Component {
    state = {
        username: '',
        password: ''
    };

    static propTypes = {
        login: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
    };

    onSubmit = e => {
        e.preventDefault();
        store.dispatch(login(this.state.username, this.state.password));
        // this.props.login(this.state.username, this.state.password);
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to="/" />;
        }
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

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default withRouter(connect(mapStateToProps, {login})(Login));
