import React,{useState} from 'react';
import Header from '../../Components/Header';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import  { StyledBox,StyledTextField } from './styled';
import { Typography, Button } from '@mui/material';
import { ContactSupportTwoTone } from '@mui/icons-material';

const AddBook = () => {
  const navigate= useNavigate();

const [formData, setFormData] = useState ({});
console.log('formData',formData);


  const handleChange = (event) =>{
    console.log(event.target.value);
    const {name,value} = event.target;
    console.log('name',name,'value',value);
    setFormData((prevData)=>({
      ...prevData,
      [name] : value
    }))
  }
    
    const handleSubmit = async (event) =>{
       event.preventDefault();

       axios.post(`http://localhost:8000/save-book-data`,formData).then((res) => {
        if(res){
          navigate('/view-book');
        }
       }).catch(error => {
        console.log('error',error);
       })
       

    }
    

  return (
    <div>
      <Header/>
      <StyledBox>
        <Typography variant='h4'> Add Your Book</Typography>
        <form onSubmit={handleSubmit}>
< StyledTextField  label="Book Id" type="text" onChange={handleChange}  name="book_id" variant="outlined"/>
< StyledTextField  label="Book Name" type="text"onChange={handleChange} name="book_name" variant="outlined"/>
< StyledTextField  label="Book Description" type="text" onChange={handleChange} name="book_description" variant="outlined"/>
< StyledTextField  label="Author Name" type="text" onChange={handleChange} name="author_name" variant="outlined"/>
< StyledTextField  label="Cover Image" type="text" onChange={handleChange} name="cover_image" variant="outlined"/>

<br /> 


<Button sx={{margin:2 , width:'10%'}} variant="contained" color='primary' type="submit">Save</Button>
        </form>

      </StyledBox>
    </div>
  )
}

export default AddBook;