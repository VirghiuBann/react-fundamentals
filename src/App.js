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
  return (
    <section className='booklist'>
      {books.map((book) => {
        return (
          <Book
            author={book.author}
            title={book.title}
            img={book.img}
            key={book.id}
          />
        )
      })}
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
