import { books } from './books'
import Book from './Book'

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
      {/* <EventExamples /> */}
      {books.map((book) => {
        return <Book {...book} key={book.id} />
      })}
    </section>
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
