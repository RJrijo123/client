import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './BookList.css';

const BookList = ({ onEdit, onDelete }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/books')
      .then(response => setBooks(response.data))
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  return (
    <div className="book-list">
      {books.map(book => (
        <div key={book._id} className="book-item">
          <div className="book-title">{book.title}</div>
          <div className="book-details">
            <p>Author: {book.author}</p>
            <p>Year: {book.year}</p>
            <p>Genre: {book.genre}</p>
            <button value="edit" onClick={() => onEdit(book)}>Edit</button>
            <button value="delete" onClick={() => onDelete(book._id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
