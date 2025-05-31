import React from 'react';

function BookList({ books, onEdit, onDelete }) {
  return (
    <div className="card p-4 shadow-sm">
      <h4 className="mb-3">Danh Sách Sách</h4>
      <ul className="list-group">
        {books.map((book) => (
          <li
            key={book.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span>
              <strong>{book.title}</strong> - {book.author} ({book.year})
            </span>
            <div>
              <button className="btn btn-sm btn-warning me-2" onClick={() => onEdit(book)}>
                Sửa
              </button>
              <button className="btn btn-sm btn-danger" onClick={() => onDelete(book.id)}>
                Xóa
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;