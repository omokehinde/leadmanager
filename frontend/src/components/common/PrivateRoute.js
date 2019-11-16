import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

const PrivateRoute = ({component: Component, auth, ...rest}) => (
    <Route
     {...rest}
<<<<<<< HEAD
      render = {props =>{
          if (auth.isLoading) {
              return <h2>Loading...</h2>;
          } else if (!auth.isAuthenticated) {
              return <Redirect to="/login" />;
          } else {  
            return <Component {...props} />;
          }
=======
      render = {props =>{ 
        if (auth.isLoading) {
            return <h1>Loading...</h1>
        } else if(!auth.isAuthenticated) {
            return <Redirect to="/login" />
        } else {
            return <Component {...props} />;
        }
>>>>>>> 9a1212fbeb5a102f748f78fa1dafcd64f5924850
     } }
    />
);

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);