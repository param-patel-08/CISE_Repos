'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Book, DefaultEmptyBook } from './Book';
import Link from 'next/link';

function ShowBookDetails() {
  const [book, setBook] = useState<Book>(DefaultEmptyBook);
  const id = useParams<{ id: string }>().id;
  const navigate = useRouter();

  useEffect(() => {
    fetch(`http://localhost:8082/api/books/${id}`)
      .then((res) => res.json())
      .then((json) => setBook(json))
      .catch((err) => {
        console.log('Error from ShowBookDetails: ' + err);
      });
  }, [id]);

  const onDeleteClick = (id: string) => {
    fetch(`http://localhost:8082/api/books/${id}`, { method: 'DELETE' })
      .then((res) => {
        navigate.push('/');
      })
      .catch((err) => {
        console.log('Error form ShowBookDetails_deleteClick: ' + err);
      });
  };

  const BookItem = (
    <div>
      <table className="table table-hover table-dark table-striped table-bordered">
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Title</td>
            <td>{book.title}</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Author</td>
            <td>{book.author}</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>ISBN</td>
            <td>{book.isbn}</td>
          </tr>
          <tr>
