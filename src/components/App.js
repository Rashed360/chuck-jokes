import { Routes, Route } from 'react-router-dom'
import NavBar from './NavBar'
import Header from './Header'
import Footer from './Footer'
import AllJokes from './allJokes/AllJokes'
import SingleJoke from './SingleJoke'
import NoMatch from './NoMatch'

function App() {
	return (
		<>
			<NavBar />
			<Header />
			<Routes>
				<Route path='/' element={<AllJokes />} />
				<Route path='/joke/:id' element={<SingleJoke />} />
				<Route element={<NoMatch />} />
			</Routes>
			<Footer />
		</>
	)
}

export default App
