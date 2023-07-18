import { useState } from 'react'
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    setBooks([...books, { title, id: Math.round(Math.random() * 9999) }])
  }

  const deleteBookById = (id) => {
    setBooks(books.filter((book) => {
      return book.id !== id;
    }))
  }

  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <BookCreate onCreate={createBook} />
      <BookList books={books} onEdit={editBookById} onDelete={deleteBookById} />
    </div>
  )
}

export default App;