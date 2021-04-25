import React from "react";
import {useFormik} from "formik";
import {Rating} from '@material-ui/lab';
import {Container, TextField, Typography, Button, Box, Grid} from "@material-ui/core";
import axios from "axios";
import { useHistory } from 'react-router-dom';

export default function HotelForm() {
  const history = useHistory()
  const formik = useFormik({
    initialValues: {
      name: '',
      stars: 3,
      description: '',
      country: '',
      city: '',
      street: '',
      rooms_count: '',
      price: '',
      img_link: ''
    },
    onSubmit: (values) => {
      axios.post('api/v1/hotels', {values});
      history.push('/');
    },
  });

  const onKeyDown = (keyEvent) => {
    if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
      keyEvent.preventDefault();
    }
  }

  return (
    <Container className='container'>
      <form noValidate autoComplete="off" onSubmit={formik.handleSubmit} onKeyDown={onKeyDown}>
        <Typography variant='h4'>Add new hotel:</Typography>
        <Box display='flex'>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={9}>
              <TextField
                id="hotel-name"
                label="Hotel name"
                variant="outlined"
                name='name'
                fullWidth
                value={formik.values.name}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography component='legend'>Stars</Typography>
              <Rating
                name="stars"
                value={formik.values.stars}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                id="hotel-description"
                label="Description"
                variant="outlined"
                name='description'
                fullWidth
                multiline
                value={formik.values.description}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                id="hotel-country"
                label="Country"
                variant="outlined"
                name='country'
                fullWidth
                value={formik.values.country}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                id="hotel-country"
                label="City"
                variant="outlined"
                name='city'
                fullWidth
                value={formik.values.city}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                id="hotel-country"
                label="Street"
                variant="outlined"
                name='street'
                fullWidth
                value={formik.values.street}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                id="hotel-rooms"
                label="Rooms count"
                variant="outlined"
                name='rooms_count'
                type='number'
                fullWidth
                value={formik.values.rooms_count}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                id="hotel-price"
                label="Price per person ($)"
                variant="outlined"
                name='price'
                type='number'
                fullWidth
                value={formik.values.price}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                id="hotel-img-link"
                label="Image link"
                variant="outlined"
                name='img_link'
                fullWidth
                value={formik.values.img_link}
                onChange={formik.handleChange}
              />
            </Grid>
          </Grid>
        </Box>
        <Box mt={2}>
          <Button type='submit'>Create hotel</Button>
        </Box>
      </form>
    </Container>
  );
}
