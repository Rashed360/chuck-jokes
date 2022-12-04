import { useState, useEffect } from 'react'
import axios from 'axios'
import { BsArrowDown } from 'react-icons/bs'
import JokeCard from './JokeCard'

const AllJokes = () => {
	const [categories, setCategories] = useState([])
	const [jokes, setJokes] = useState([])
	const [displayJokes, setDisplayJokes] = useState([])
	const variant = ['red', 'orange', 'gold', 'yellow', 'lime', 'green', 'skyblue']

	const fetchCategories = async () => {
		await axios
			.get('https://api.chucknorris.io/jokes/categories')
			.then(response => {
				const data = response.data
				console.log(data)
				setCategories(data)
			})
			.catch(error => {
				console.log(error.response)
			})
	}

	const fetchJokes = async () => {
		await axios
			.get('https://api.chucknorris.io/jokes/search?query=all')
			.then(response => {
				const data = response.data.result
				console.log(data)
				setJokes(data)
			})
			.catch(error => {
				console.log(error.response)
			})
	}

	const getVariant = () => {
		return 'btn btn-' + variant[Math.floor(Math.random() * variant.length)]
	}

	useEffect(() => {
		fetchCategories()
		fetchJokes()
	}, [])

	useEffect(() => {
		setDisplayJokes(jokes.slice(0, 6))
	}, [jokes])

	return (
		<section id='allJokes'>
			<div className='container'>
				<div className='categories'>
					{categories.length !== 0 &&
						categories.slice(0, 8).map((itm, idx) => (
							<button className={getVariant()} key={idx}>
								{itm} Jokes
							</button>
						))}
					<button className='btn btn-outline'>
						<span>View All</span>
						<BsArrowDown className='float' />
					</button>
				</div>
				<div className='contents'>
					<div className='card-tags'>
						<div className='tag'>
							<span>Social Jokes</span>
						</div>
					</div>
					{displayJokes?.length > 0 ? (
						<div className='jokes'>
							{displayJokes.map((itm, idx) => (
								<JokeCard key={idx} joke={itm} />
							))}
						</div>
					) : (
						<div className='jokes'>
							<p>Loading...</p>
						</div>
					)}
					<div className='footer'>
						<button className='btn btn-outline'>
							<span>View More</span>
							<BsArrowDown className='float' />
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AllJokes
