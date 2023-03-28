
import React,{useEffect, useState} from 'react'
import { Grid } from '@mui/material';
import axios from 'axios';
import BookCard from '../../Components/BookCard';
import Header from '../../Components/Header';
const ViewBook = () => {
  const[book, setBook]= useState([]);
  console.log('data', book);

  const viewAllBooks = async () => {
    await axios.get(`http://localhost:8000/save-book-data`).then ((res) => {
      if(res) {
        setBook(res.data);
      }
    })
  }

  useEffect(() =>{
    viewAllBooks();
  },[])
  return (

    <Grid container>
      {book?.length > 0 &&
      book?.map((data, index) => {
        return(
          <Grid key={index}  item>
            <BookCard data={data} />
          </Grid>
              )
      })
      }

    </Grid>
  )
}

export default ViewBook;