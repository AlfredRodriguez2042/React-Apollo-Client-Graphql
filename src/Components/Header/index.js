import React from 'react'
import NavBar from './navbar'
import {
  Typography,
  Toolbar,
  Grid,
  Container,
  makeStyles
} from '@material-ui/core'
import Profile from './Profile'

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbarTitle: {
    flex: 1
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto'
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0
  }
}))

const Header = () => {
  const classes = useStyles()
  return (
    <Container component="header" maxWidth="xl" className={classes.toolbar}>
      <Grid container justify="space-between">
        <Toolbar>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
          >
            logo
          </Typography>
        </Toolbar>
        <NavBar />
        <Profile />
      </Grid>
    </Container>
  )
}

export default Header
