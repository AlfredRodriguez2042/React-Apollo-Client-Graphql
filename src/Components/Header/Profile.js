import React from 'react'
import { Toolbar, Typography, Grid } from '@material-ui/core'
import { connect } from 'react-redux'

const Profile = props => {
  return (
    <div>
      <Grid item xs={12}>
        <Toolbar>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="right"
            noWrap
          >
            {props.user ? props.user.username : null}
          </Typography>
        </Toolbar>
      </Grid>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user
})
export default connect(mapStateToProps, {})(Profile)
