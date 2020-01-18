import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Hidden from '@material-ui/core/Hidden'
import moment from 'moment'
import { Favorite, Share, QuestionAnswer } from '@material-ui/icons'
import { Divider, IconButton } from '@material-ui/core'
const useStyles = makeStyles({
  card: {
    display: 'flex'
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: 160
  }
})

export default function MainPost(props) {
  const classes = useStyles()
  const [like, setlike] = React.useState(false)
  const handleLike = () => {
    setlike(!like)
  }

  if (!props.Post) return <p>no hay post</p>
  return (
    <>
      {props.Post.map(post => {
        return (
          <Grid item xs={12} md={6} key={post._id}>
            <Link to="/:id">
              <Card className={classes.card}>
                <div className={classes.cardDetails}>
                  <CardContent style={{ paddingBottom: 4 }}>
                    <Typography component="h2" variant="h5">
                      {post.title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {moment(post.createdAt).fromNow(true)}
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                      {post.body}
                    </Typography>
                    <Typography variant="subtitle1" color="primary">
                      Continue reading...
                    </Typography>
                    <Divider style={{ margin: 2 }} />

                    <IconButton onClick={handleLike}>
                      <Favorite color={like ? 'secondary' : 'inherit'} />
                    </IconButton>
                    {post.likesNum ? <span>{post.likesNum}</span> : null}
                    <IconButton>
                      <QuestionAnswer />
                    </IconButton>
                    {post.commentNum ? <span>{post.commentNum}</span> : null}
                    <IconButton>
                      <Share />
                    </IconButton>
                  </CardContent>
                </div>
                <Hidden xsDown>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title={post.imageTitle}
                  />
                </Hidden>
              </Card>
            </Link>
          </Grid>
        )
      })}
    </>
  )
}

MainPost.propTypes = {
  post: PropTypes.object
}
