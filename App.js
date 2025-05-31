import React, { useState, useEffect } from 'react';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [books, setBooks] = useState([
    { id: 1, title: 'React Cơ Bản', author: 'Nguyễn Văn A', year: 2023 },
    { id: 2, title: 'JavaScript Nâng Cao', author: 'Trần Thị B', year: 2022 },
  ]);
  const [editingBook, setEditingBook] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('books');
    if (stored) {
      setBooks(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  const handleAddBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  const handleUpdateBook = (updatedBook) => {
    const newList = books.map((b) => (b.id === updatedBook.id ? updatedBook : b));
    setBooks(newList);
    setEditingBook(null);
  };

  const handleEditClick = (book) => {
    setEditingBook(book);
  };

  const handleDeleteBook = (id) => {
    const newList = books.filter((b) => b.id !== id);
    setBooks(newList);
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Quản Lý Sách</h1>
      <BookForm
        onAdd={handleAddBook}
        onUpdate={handleUpdateBook}
        editingBook={editingBook}
         onCancelEdit={() => setEditingBook(null)}
      />
      <BookList books={books} onEdit={handleEditClick} onDelete={handleDeleteBook} />
    </div>
  );
}

export default App;