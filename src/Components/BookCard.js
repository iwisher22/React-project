import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { maxWidth } from '@mui/system';
import { useNavigate } from 'react-router-dom';


export default function ActionAreaCard({data}) {
 const navigate =useNavigate();

 const handleRoute=(item) => {
  navigate(`/edit-book/${data.id}`) ;
 }
  return (
    <Card sx={{ minWidth: 245 ,maxWidth : 345}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="50"
          image= {data.Cover_image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
         {data.book_name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.book_description}
          </Typography>
          
    
        </CardContent>
      </CardActionArea>
    
    </Card>
  );
}