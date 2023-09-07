const author = 'Stephen King'
const title = 'Holly Hardcover'
const img = './images/book-1.jpg'

function App() {
  return (
    <div className='App'>
      <BookList />
    </div>
  )
}

const BookList = () => {
  return (
    <section className='booklist'>
      <Book author={author} title={title} img={img} />
      <Book author={author} title={title} img={img} />
    </section>
  )
}

const Book = ({ author, title, img }) => {
  return (
    <article className='book'>
      <img src={img} alt={author} />
      <h2>{title} </h2>
      <h4>{author}</h4>
    </article>
  )
}

export default App
