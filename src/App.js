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
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => (
  <img
    src='https://images-na.ssl-images-amazon.com/images/I/815oQ6G6HDL._AC_UL600_SR600,400_.jpg'
    alt='Holly Hardcover '
  />
)
const Title = () => {
  return <h2>Holly Hardcover </h2>
}
const Author = () => <h4> Stephen King</h4>

export default App
