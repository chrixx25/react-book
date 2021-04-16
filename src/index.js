import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import {books} from './books';
import Book from './Book';

// stateless functional Component
// always return jsx
// jsx rules
// always return single element
// div / section / article / React.Fragment
// user camelcase on html attributes
// className instead of class for css

//setup vars

const BookList = () => (
  <section className="book-list">{
    books.map(book =>
      (<Book key={book.id} {...book}>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem quod doloremque blanditiis quidem consequuntur dicta iste debitis excepturi voluptates, rerum nesciunt doloribus inventore harum numquam ab ipsum nostrum saepe? Accusantium!</p>
      </Book>))
  }</section>
);

//const Greeting = ()=>  React.createElement('div', {}, React.createElement('h1', {}, 'Hello'));
ReactDom.render(<BookList />, document.getElementById('root'));