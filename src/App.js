const firstBook = {
  author: 'Stephen King',
  title: 'Holly Hardcover',
  img: 'https://m.media-amazon.com/images/I/417kSOgt4aL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
}

const secondBook = {
  author: 'Rebecca Yarros',
  title: 'Iron Flame',
  img: 'https://m.media-amazon.com/images/I/51xSijRxXqL._SX307_BO1,204,203,200_.jpg',
}

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
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      >
        {' '}
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.{' '}
      </Book>
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
    </section>
  )
}

const Book = ({ author, title, img, children }) => {
  return (
    <article className='book'>
      <img src={img} alt={author} />
      <h2>{title} </h2>
      <h4>{author}</h4>
      <p>{children}</p>
    </article>
  )
}

export default App
