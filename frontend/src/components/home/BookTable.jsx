import React from 'react';
import PropTypes from 'prop-types'; 
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import {MdOutlineDelete } from "react-icons/md"
import { BsInfoCircle } from "react-icons/bs";


const BookTable = ({ books}) => {
  console.log(books)
  return (
    <table className="w-full border-separate border-spacing-2">
    <thead>
      <tr>
        <th className="border border-slate-600 rounded-md">No</th>
        <th className="border border-slate-600 rounded-md">Title</th>
        <th className="border border-slate-600 rounded-md max-md:hidden">
          Author
        </th>
        <th className="border border-slate-600 rounded-md max-md:hidden">
          PublishYear
        </th>
        <th className="border border-slate-600 rounded-md">Operations</th>
      </tr>
    </thead>
    <tbody>
      {books.map((book, index) => (
      <tr key={book._id} className="h-8">
        <td className="border border-slate-700 rounded-md text-center">
          {index + 1}
        </td>
        <td className="border border-slate-700 rounded-md text-center">
          {book.title}
        </td>
        <td className="border border-slate-700 rounded-md text-center max-md:hidden">
          {book.author}
        </td>
        <td className="border border-slate-700 rounded-md text-center max-md:hidden">
          {book.publisher}
        </td>
        <td className="border border-slate-700 rounded-md text-center">
          <Link to={`/books/details/${book._id}`}>
            <BsInfoCircle className="text-2x1 text-green-800" />
          </Link>
          <Link to={`books/edit/${book._id}`}>
            <AiOutlineEdit className="text-2xl text-yellow-600" />
          </Link>
          <Link to={`books/delete/${book._id}`}>
            <MdOutlineDelete className="text-2xl text-red-600" />
          </Link>
        </td>
      </tr>
      ))}
    </tbody>
  </table>
  )
};
BookTable.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      publisher: PropTypes.number.isRequired,
    })
  ).isRequired,
};


export default BookTable
