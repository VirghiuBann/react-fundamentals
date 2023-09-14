const Book = ({ id, author, title, img, number }) => {
  return (
    <article className='book'>
      <img src={img} alt={author} />
      <h2>{title} </h2>

      <h4>{author}</h4>
      <span className='number'>{`# ${number + 1}`}</span>
    </article>
  )
}

export default Book
