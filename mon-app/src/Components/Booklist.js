import React, { useState, useEffect } from 'react';
import './BookList.css'; // Assurez-vous de créer ce fichier CSS

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Simuler la récupération des données de la base de données
    const fetchBooks = () => {
      const booksFromDB = [
        { id: 1, image: '/img/Initial-D-T01.jpg', title: 'Initial D volume 1', author: 'Shūichi Shigeno' },
        { id: 2, image: '/img/slump.jpg', title: 'DR. Slump volume 1', author: 'Akira Toriyama' },
        { id: 3, image: '/img/akira.jpg', title: 'Akira volume 1', author: 'Katsuhiro Ōtomo' },
        { id: 4, image: '/img/jojo.jpeg', title: 'JoJoLand', author: 'Yoshihiro Araki' },
        { id: 5, image: '/img/hunter.jpeg', title: 'Hunter X Hunter', author: 'Yoshihiro Togashi' },
        { id: 6, image: '/img/amer.jpg', title: 'Amer betton', author: 'Kentaro Miura' },
        { id: 7, image: '/img/watch.jpeg', title: 'Watchmen', author: 'Alan Moore' },
        { id: 8, image: '/img/spawn.jpg', title: 'Spawn', author: 'Todd McFarlane' },
        { id: 9, image: '/img/v.jpg', title: 'V for Vendetta', author: 'Alan Moore' },
        { id: 10, image: '/img/savage.jpg', title: 'Savage Dragon', author: 'Erik Larsen' },
        { id: 11, image: '/img/sj.jpg', title: 'Transmetropolitan', author: 'Waren Ellis' },
        { id: 12, image: '/img/puta.jpg', title: 'Puta Madre', author: 'Waren Ellis' },


      ];
      setBooks(booksFromDB);
    };

    fetchBooks();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Nos livres les plus populaires</h2>
      <div className="book-grid">
        {books.map((book) => (
          <div key={book.id} className="book-item">
            {book.image && <img src={book.image} alt={book.title} className="book-image" />}
            <div>
              <strong>{book.title}</strong><br />
              Auteur: {book.author}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
