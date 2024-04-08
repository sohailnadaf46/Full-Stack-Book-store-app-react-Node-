import React from 'react'
import Backbutton from '../components/Backbutton';
import { useState } from 'react';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useEffect,  } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const CreateEditBook = () => {
const[loading, setLoading] = useState(false);
const[title, setTitle] = useState('');
const[author, setAuthor]=useState('');
const [publisher, setPublisher] = useState('');
const navigate = useNavigate();
const{id} = useParams();
const { enqueueSnackbar } = useSnackbar();


useEffect(()=>{
  setLoading(false);
  axios.get(`http://localhost:5555/books/${id}`)
        .then((Response)=>{
          setTitle(Response.data.title);
          setAuthor(Response.data.author);
          setPublisher(Response.data.publisher);
          setLoading(false);
        })
        .catch((error) =>{
          alert("an Error happend check in the console");
          console.log(error);
        })
},[])

const handleEditBook =()=>{
  const data = {
    title,
    author,
    publisher
  };
  setLoading(true);
  axios.put(`http://localhost:5555/books/${id}`, data)
        .then(()=>{
          setLoading(false);
          enqueueSnackbar("Book Edited successfully", {variant : 'success'});
          navigate("/");
        })
        .catch((error) => {
          setLoading(false);
          alert("An error occured check the console.");
          enqueueSnackbar("error", {variant : 'error'});
          console.log(error);
        })
  

};

  return (
    <div className='p-4'>
    <Backbutton />
    <h1 className='text-3xl my-4'>Create Book</h1>
    {loading ? <Spinner /> :
    <div className='flex flex-col border-2 border-sky-400 rounded-xl w[600px] p-4 mx-auto'>
      <div className='my-4'>
        <label className='text-xl mr-4 text-gray-500'>Title</label>
        <input
          type='text'
          value={title}
          onChange = {(save)=>setTitle(save.target.value)}
          className='border-2 border-gray-500 prx-4 py-3 w-full'
        />
      </div>
      <div className='my-4'>
        <label className='text-xl mr-4 text-gray-500'>Author</label>
        <input
          type='text'
          value={author}
          onChange = {(save)=>setAuthor(save.target.value)}
          className='border-2 border-gray-500 prx-4 py-3 w-full'
        />
      </div>
      <div className='my-4'>
        <label className='text-xl mr-4 text-gray-500'>publish Year</label>
        <input
          type='text'
          value={publisher}
          onChange = {(save)=>setPublisher(save.target.value)}
          className='border-2 border-gray-500 prx-4 py-3 w-full'
        />
      </div>
      <button className='p-2 bg-sky-300 m-8' onClick={handleEditBook}>
        Save
      </button>
    </div>
    }
    </div>
  )
}

export default CreateEditBook
