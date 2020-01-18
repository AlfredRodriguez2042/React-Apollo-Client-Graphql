import React from 'react'
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import { connect } from 'react-redux'

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },

  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0
  }
}))

const sections = [
  { title: 'Programing', url: '/programing' },
  { title: 'Systems', url: '/systems' },
  { title: 'Dashboard', url: '/dashboard' }
]

const navbar = props => {
  const classes = useStyles()
  return (
    <>
      <Toolbar component="nav" variant="dense">
        <NavLink to="/" className={classes.toolbarLink}>
          Home
        </NavLink>
        {props.isAuthenticated
          ? sections.map(section => (
              <NavLink
                key={section.title}
                to={section.url}
                className={classes.toolbarLink}
              >
                {section.title}
              </NavLink>
            ))
          : null}
        {props.isAuthenticated ? (
          <NavLink to="/logout">Log Out</NavLink>
        ) : (
          <div>
            {' '}
            <NavLink to="/signin" className={classes.toolbarLink}>
              SignIn
            </NavLink>
            <NavLink to="/signup" className={classes.toolbarLink}>
              SignUp
            </NavLink>
          </div>
        )}
      </Toolbar>
    </>
  )
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps, {})(navbar)
