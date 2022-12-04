import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { BsDot } from 'react-icons/bs'
import Hand from '../assets/hand.png'

const SingleJoke = () => {
	const [loading, setLoading] = useState(false)
	const [joke, setJoke] = useState({})
	const navigate = useNavigate()
	const { jokeId } = useParams()

	useEffect(() => {
		const loadPosts = async () => {
			setLoading(true)
			const res = await axios.get(`https://api.chucknorris.io/jokes/${jokeId}`)
			console.log(res.data)
			setJoke(res.data)
			setLoading(false)
		}
		loadPosts()
	}, [jokeId])

	return (
		<section id='singleJoke'>
			<div className='container'>
				<div className='back-button'>
					<button className='btn btn-stylish' onClick={() => navigate(-1)}>
						<IoIosArrowBack />
					</button>
				</div>
				<div className='contents'>
					{loading ? (
						<div className='stats'>
							<div className='card'>
								<p>Loading...</p>
							</div>
						</div>
					) : (
						<div className='stats'>
							<div className='card'>
								<div className='card-info-header'>
									<div className='card-tags'>
										<div className='tag'>
											<BsDot />
											<span>{joke.categories?.length > 0 ? joke.categories[0] : 'uncategorized'} Jokes</span>
										</div>
										<div className='tag no-border trending'>
											<BsDot />
											<span>Trending</span>
										</div>
									</div>
									<div className='title'>
										<h2>Chuck Norris Joke</h2>
										<hr />
										<p>No #1</p>
									</div>
								</div>

								<div className='card-info-body'>
									<p>{joke.value}</p>
								</div>
							</div>

							<div className='controls'>
								<div className='stat'>
									<div className='info'>
										<button className='like'>
											<img src={Hand} alt='' />
										</button>
										<p>328</p>
									</div>
									<div className='info'>
										<button className='dislike'>
											<img src={Hand} className='flipped' alt='' />
										</button>
										<p>98</p>
									</div>
								</div>
								<div className='navigate'>
									<button className='prev'>
										<IoIosArrowBack />
										<span>Prev. Joke</span>
									</button>
									<button className='next'>
										<span>Next Joke</span>
										<IoIosArrowForward />
									</button>
								</div>
							</div>
						</div>
					)}

					<div className='sidebar'>
						<p className='sidebar-header'>The top 10 jokes this week</p>
						<div className='sidebar-body'>
							<a href='#'>Smoking Joke</a>
							<a href='#'>Smoking Joke</a>
							<a href='#'>Smoking Joke</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default SingleJoke
