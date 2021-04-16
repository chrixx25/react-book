import React from 'react'

const Book = ({ img, title, author, children }) => {
  //const { img, title, author, children } = props;

  const clickHandler = () => {
    alert();
  }

  const getAuthor = author => {
    console.log(author)
  }

  return (
    <article className="book" onMouseOver={() => getAuthor(author)}>
      <img src={img} alt="_AC_SX184_"/>
      <h1>{title}</h1>
      <h4 onClick={()=> alert()}>{author.toLocaleUpperCase()}</h4>
      {children || 'No Description'}
      <button type='button' onClick={clickHandler}>Buy and Read</button>
      <button type='button' onClick={() => getAuthor(author)}>Test</button>
    </article>
  )
};

export default Book
