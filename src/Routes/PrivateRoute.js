import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        return auth ? <Redirect to="/login" /> : <Component {...props} />
      }}
    />
  )
}

PrivateRoute.PropTypes = {}
const mapStateToProps = state => ({
  auth: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(PrivateRoute)
