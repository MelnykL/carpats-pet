import React, { useState, useEffect } from "react";
import axios from "axios";
import {Container, Grid, Typography} from "@material-ui/core";
import {Rating} from "@material-ui/lab";


const Show = (props) => {
  const [hotel, setHotel] = useState({})
  const [loaded, setLoaded] = useState(false)

  useEffect(async () => {
    const url = `/api/v1/hotels/${props.match.params.id}`;
    const response = await axios.get(url);
    setHotel(response.data);
    setLoaded(true);
  },[])

  if(loaded) {
    return (
      <Container className='container'>
        <Grid container
              spacing={4}
              direction="row"
              justify="center"
              alignItems="flex-start"
              m={4}
        >
          <Grid item sm={6}>
            <img className='banner' src={hotel.data.attributes.img_link}></img>
          </Grid>
          <Grid item sm={6}>
            <Grid container
                  spacing={2}
                  direction="column"
                  justify="center"
                  alignItems="flex-start">
              <Grid item>
                <Typography variant='h3'>
                  {hotel.data.attributes.name}
                </Typography>
              </Grid>
              <Grid item>
                <Rating
                  name="rating"
                  value={hotel.data.attributes.stars}
                />
              </Grid>
              <Grid item>
                <div>
                  <div className='bolt'>Country:</div> {hotel.data.attributes.country}
                </div>
              </Grid>
              <Grid item>
                <div>
                  <div className='bolt'>City:</div> {hotel.data.attributes.city}
                </div>
              </Grid>
              <Grid item>
                <div>
                  <div className='bolt'>Country:</div> {hotel.data.attributes.street}
                </div>
              </Grid>
              <Grid item>
                <div>
                  <div className='bolt'>Rooms:</div> {hotel.data.attributes.rooms_count}
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={9}>
            {hotel.data.attributes.description}
          </Grid>
          <Grid item sm={3}>
            <span className='bolt'>Price:</span> {hotel.data.attributes.price}$
          </Grid>
        </Grid>
      </Container>
    )
  }

  return 'Loading'
}

export default Show;

