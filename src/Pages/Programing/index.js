import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { USERS_QUERY } from '../../graphql/Query'
import { makeStyles, Container, Grid, Paper } from '@material-ui/core'
import PostCard from '../../Components/PostCard'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3)
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  paper: {
    maxWidth: 600,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2)
  }
}))

const Programin = () => {
  const classes = useStyles()

  return (
    <Container className={classes.root}>
      <Paper className={classes.paper}>
        <Grid>
          <PostCard />
        </Grid>
      </Paper>
    </Container>
  )
}

export default Programin
