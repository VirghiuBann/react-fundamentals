const Book = ({ id, author, title, img }) => {
  return (
    <article className='book'>
      <img src={img} alt={author} />
      <h2>{title} </h2>

      <h4>{author}</h4>
    </article>
  )
}

export default Book
