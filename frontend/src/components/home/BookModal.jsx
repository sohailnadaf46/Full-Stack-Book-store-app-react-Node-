import { AiOutlineClose } from 'react-icons/ai';
import PropTypes from "prop-types";
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';

const BookModal = ({ book, onClose }) => {
  return (
    <div
      className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className='w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative'
      >
        <AiOutlineClose
          className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer'
          onClick={onClose}
        />
        <h2 className='w-fit px-4 py-1 bg-red-300 rounded-lg'>
          {book.publisher}
        </h2>
        <h4 className='my-2 text-gray-500'>{book._id}</h4>
        <div className='flex justify-start items-center gap-x-2'>
          <PiBookOpenTextLight className='text-red-300 text-2xl' />
          <h2 className='my-1'>{book.title}</h2>
        </div>
        <div className='flex justify-start items-center gap-x-2'>
          <BiUserCircle className='text-red-300 text-2xl' />
          <h2 className='my-1'>{book.author}</h2>
        </div>
        <p className='mt-4'>Anything You want to show</p>
        <p className='my-2'>
        The great because of the pleasures themselves. Not prohibiting freedom, they encounter laboriousness with those who expedite, the necessities assumed. Who are they that take pleasure in pain? For what reason is there pain? They reject, they seek out which architect, pain to follow after!
        </p>
      </div>
    </div>
  );
};
BookModal.propTypes = {
  book: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    publisher: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    // Add more PropTypes for other properties if necessary
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default BookModal;