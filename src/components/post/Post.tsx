import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import './post.css'

export default function Post(props: any) {
  const { title, body, id, onToggleLike, onToggleSave, onDelete, liked, saved, imageUrl } = props;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="delete" onClick={() => {
            onDelete(id);
          }}>
            <DeleteIcon />
          </IconButton>
        }
        title={title}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        src={imageUrl}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {body}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className='postIcons'>
        <IconButton aria-label="add to favorites" onClick={() => {
          onToggleLike(id);
        }}>
          {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
        <IconButton aria-label="save" onClick={() => {
          onToggleSave(id);
        }}>
          {saved ? <BookmarkIcon /> : <BookmarkBorderIcon />}
        </IconButton>
      </CardActions>
    </Card>
  );
}
