import React from 'react'
import { useState, useEffect} from "react";
import axios from "axios";
import Backbutton from '../components/Backbutton';
import Spinner from '../components/Spinner';
import { useParams } from 'react-router-dom';

const ShowBook = () => {
  const [loading, setLoading] = useState(false);
  const [book, setBooks] = useState([]);
  const { id } = useParams();

  useEffect(()=>{
    setLoading(true);
    axios.get(`http://localhost:5555/books/${id}`)
    .then((Response)=>{
      setBooks(Response.data)
      console.log(book);
      setLoading(false);
    })
    .catch((error)=>{
      console.log(error);
      setLoading(false);
    })
  },[])



  return (
    <div className='p-4'>
      <Backbutton />
      <h1 className='text-3xl my-4'>Show Book</h1>
      {loading ? (
        <Spinner />
      ):(
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>ID</span>
            <span>{book._id}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Title</span>
            <span>{book.title}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Author</span>
            <span>{book.author}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>publisher</span>
            <span>{book.publisher}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Create Time</span>
            <span>{book.createAt}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Last update time</span>
            <span>{book.updateAt}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default ShowBook
