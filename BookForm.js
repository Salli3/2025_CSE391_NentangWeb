import React, { useState, useEffect } from 'react';

function BookForm({ onAdd, onUpdate, editingBook, onCancelEdit }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');

  useEffect(() => {
    if (editingBook) {
      setTitle(editingBook.title);
      setAuthor(editingBook.author);
      setYear(editingBook.year);
    } else {
      setTitle('');
      setAuthor('');
      setYear('');
    }
  }, [editingBook]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const yearNumber = parseInt(year, 10);
    if (!title || !author || !year) {
         alert('Vui lòng nhập đầy đủ thông tin!');
        return;
}
    if (isNaN(yearNumber) || yearNumber <= 0) {
        alert('Năm xuất bản phải là số nguyên dương!');
        return;
}

    if (editingBook) {
      onUpdate({ ...editingBook, title, author, year: parseInt(year, 10) });
    } else {
      const newBook = {
        id: Date.now(),
        title,
        author,
        year: parseInt(year, 10),
      };
      onAdd(newBook);
    }

    setTitle('');
    setAuthor('');
    setYear('');
  };

  return (
    <form onSubmit={handleSubmit} className="card p-4 mb-4 shadow-sm">
  <h4 className="mb-3">{editingBook ? 'Cập Nhật Sách' : 'Thêm Sách'}</h4>
  
  <div className="mb-3">
    <label className="form-label">Tiêu Đề</label>
    <input
      type="text"
      className="form-control"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      placeholder="Nhập tiêu đề sách"
    />
  </div>

  <div className="mb-3">
    <label className="form-label">Tác Giả</label>
    <input
      type="text"
      className="form-control"
      value={author}
      onChange={(e) => setAuthor(e.target.value)}
      placeholder="Nhập tên tác giả"
    />
  </div>

  <div className="mb-3">
    <label className="form-label">Năm Xuất Bản </label>
    <input
      type="number"
      className="form-control"
      value={year}
      onChange={(e) => setYear(e.target.value)}
      placeholder="Nhập năm xuất bản"
    />
  </div>

  <div className="d-flex justify-content-between">
    <button className="btn btn-primary" type="submit">
      {editingBook ? 'Cập Nhật' : 'Thêm'}
    </button>
    {editingBook && (
      <button className="btn btn-secondary" type="button" onClick={onCancelEdit}>
        Hủy
      </button>
    )}
  </div>
</form>

  );
}

export default BookForm;