// import { useState, useEffect } from 'react'
// import { Link, useRouteMatch } from 'react-router-dom'
// import * as moviesApi from '../services/movies-api'
// import PageHeading from '../components/PageHeading/PageHeading'

// export default function BooksView() {
//   const { url } = useRouteMatch()
//   const [books, setBooks] = useState([])

//   useEffect(() => {
//     moviesApi.fetchBooks().then(setBooks)
//   }, [])

//   return (
//     <>
//       <PageHeading text="Книги" />

//   {books && (
//     <ul>
//       {books.map((book) => (
//         <li key={book.id}>
//           <Link to={`${url}/${book.id}`}>{book.title}</Link>
//         </li>
//       ))}
//     </ul>
//   )}
//     </>
//   )
// }
