import React from 'react'
import { BsArrowDown } from 'react-icons/bs'
import JokeCard from './JokeCard'

const AllJokes = () => {
	return (
		<section id='allJokes'>
			<div className='container'>
				<div className='categories'>
					<button className='btn btn-red'>Adult Jokes</button>
					<button className='btn btn-orange'>Adult Jokes</button>
					<button className='btn btn-gold'>Adult Jokes</button>
					<button className='btn btn-yellow'>Adult Jokes</button>
					<button className='btn btn-lime'>Adult Jokes</button>
					<button className='btn btn-green'>Adult Jokes</button>
					<button className='btn btn-skyblue'>Adult Jokes</button>
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
