import { useNavigate } from 'react-router-dom'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { BsDot } from 'react-icons/bs'
import Hand from '../assets/hand.png'

const SingleJoke = () => {
	const navigate = useNavigate()
	return (
		<section id='singleJoke'>
			<div className='container'>
				<div className='back-button'>
					<button className='btn btn-stylish' onClick={() => navigate(-1)}>
						<IoIosArrowBack />
					</button>
				</div>
				<div className='contents'>
					<div className='stats'>
						<div className='card'>
							<div className='card-info-header'>
								<div className='card-tags'>
									<div className='tag'>
										<BsDot />
										<span>Social Jokes</span>
									</div>
									<div className='tag no-border trending'>
										<BsDot />
										<span>Trending</span>
									</div>
								</div>
								<div className='title'>
									<h2>Lawyer Joke</h2>
									<hr />
									<p>No #1</p>
								</div>
							</div>

							<div className='card-info-body'>
								<p>
									A lawyer dies and goes to Heaven. "There must be some mistake, "the lawyer argues. "I'm too
									young to die. I'm only 55. ""Fifty-five?" says Saint Peter. "No, according to out
									calculations, you're 82."" How'd you get that?" the lawyer asks. Answers St. Peter, "We
									added up your time sheets."
								</p>
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
