import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export default function MediaCard({image, link, header, details}) {

  return (
    <div className='cardContainer'>
      <Card sx={{ maxWidth: 345, height:  310 }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {header}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {details}
        </Typography>
      </CardContent>
      <CardActions>
        <a target="_blank" href={link}>Open in Browser</a>
      </CardActions>
    </Card>
    </div>
  );
}
