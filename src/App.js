const books = [
  {
    id: 1,
    author: 'Stephen King',
    title: 'Holly Hardcover',
    img: 'https://m.media-amazon.com/images/I/417kSOgt4aL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
  },
  {
    id: 2,
    author: 'Rebecca Yarros',
    title: 'Iron Flame',
    img: 'https://m.media-amazon.com/images/I/51xSijRxXqL._SX307_BO1,204,203,200_.jpg',
  },
]

function App() {
  return (
    <div className='App'>
      <BookList />
    </div>
  )
}

const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id)
    console.log(book)
  }

  return (
    <section className='booklist'>
      <EventExamples />
      {books.map((book) => {
        return <Book {...book} key={book.id} getBook={getBook} />
      })}
    </section>
  )
}

const Book = ({ id, author, title, img, getBook }) => {
  return (
    <article className='book'>
      <img src={img} alt={author} />
      <h2>{title} </h2>
      <button
        onClick={() => {
          getBook(id)
        }}
      >
        Display title
      </button>
      <h4>{author}</h4>
    </article>
  )
}

const EventExamples = () => {
  const handleFormInput = () => {
    console.log('handle form input')
  }

  const handleButtonClick = () => {
    alert('handle button click')
  }

  const handleFromSubmission = (e) => {
    e.preventDefault()
    console.log('form submission')
  }

  return (
    <section>
      <form onSubmit={handleFromSubmission}>
        <h2>Typical Form</h2>
        <input
          type='text'
          name='example'
          onChange={handleFormInput}
          style={{ margin: '1rem 0' }}
        />
        <button type='submit'>submit form</button>
      </form>
      <button onClick={handleButtonClick}>click me</button>
    </section>
  )
}

export default App
