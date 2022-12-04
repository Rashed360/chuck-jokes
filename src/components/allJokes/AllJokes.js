import { useState, useEffect } from 'react'
import axios from 'axios'
import { BsArrowDown } from 'react-icons/bs'
import JokeCard from './JokeCard'

const AllJokes = () => {
	const [count, setCount] = useState(0)
	const [variant, setVariant] = useState(['red', 'orange', 'gold', 'yellow', 'lime', 'green', 'skyblue'])
	const [categories, setCategories] = useState([])

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

	const getVariant = () => {
		return 'btn btn-' + variant[Math.floor(Math.random() * variant.length)]
	}

	useEffect(() => {
		fetchCategories()
	}, [])

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
					{/* <div className='tag'>Social Jokes</div> */}
					<div className='jokes'>
						<JokeCard />
						<JokeCard />
						<JokeCard />
						<JokeCard />
						<JokeCard />
						<JokeCard />
					</div>
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
