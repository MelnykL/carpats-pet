import {Grid} from "@material-ui/core";
import Item from "./Item";
import Container from "@material-ui/core/Container";
import React , { useState, useEffect } from "react";
import axios from 'axios';

const Home = () => {
  const [hotels, setHotels] = useState([])

  useEffect(() => {
    axios.get('/api/v1/hotels.json')
      .then(response=> {
        setHotels(response.data.data)
      })
      .catch(resp => console.log(resp ))
  }, [hotels.length])

  const hotelsList = hotels.map( hotel => {
    return(
      <Item
        key={hotel.id}
        attributes={hotel.attributes}
        id={hotel.id}
      />
    )
  })

  return(
    <>
      <Container className="container">
        <Grid container
              spacing={2}
              direction="row"
              justify="center"
              alignItems="center"
        >
          {hotelsList}
        </Grid>
      </Container></>
  )
}

export default Home;
