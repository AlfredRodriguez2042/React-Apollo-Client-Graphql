import React from 'react'

import {
  makeStyles,
  Container,
  Grid,
  Paper,
  Typography
} from '@material-ui/core'
import MainBanner from '../../Components/MainBanner'
import MainPost from '../../Components/MainPost'
import { useMutation, useQuery } from '@apollo/react-hooks'
import { POSTS_QUERY } from '../../graphql/Query'

const useStyles = makeStyles(theme => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)'
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0
    }
  }
}))

const mainPosts = [
  {
    id: 1,
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text'
  },
  {
    id: 2,
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text'
  }
]
const Home = () => {
  const classes = useStyles()
  const { loading, error, data } = useQuery(POSTS_QUERY)
  if (error) return console.log(error)
  if (loading) return <p>loading...</p>
  console.log(data)

  return (
    <Container>
      <MainBanner
        title=" this is my post"
        description="Multiple lines of text that form the lede, informing new readers
      quickly and efficiently about what's most interesting in this
      post's contents."
      />
      <Grid container spacing={4}>
        <MainPost Post={data.Posts} />
      </Grid>
    </Container>
  )
}

export default Home
