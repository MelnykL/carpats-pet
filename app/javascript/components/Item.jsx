import React from "react";
import {
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Button,
  CardActions,
  Grid
} from '@material-ui/core'
import {Link} from "react-router-dom";


const Item = (props) => {
  return(
    <Grid item xs={12} sm={4}>
      <Card className="item-card">
        <CardActionArea>
          <CardMedia
            className='item-image'
            image={props.attributes.img_link}
            title='image'
            alt='some text'
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.attributes.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className="item-description">
              {props.attributes.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to={`/show/${props.id}`}>
            <Button size='small' color='inherit'>
              See
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default Item;
