import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import { MdBolt } from 'react-icons/md'

const JokeCard = () => {
	return (
		<div className='card'>
			<div className='card-header'>
				<MdBolt />
				<h2>Lawyer Joke</h2>
			</div>
			<div className='card-body'>
				<p>
					A lawyer dies and goes to Heaven. "There must be some mistake, "the lawyer argues. "I'm too young to
					die. I'm only 55. ""Fifty-five?" says Saint Peter. "No, according to out calculations, you're 82.""
					How'd you get that?" the lawyer asks. Answers St. Peter, "We added up your time sheets."
				</p>
			</div>
			<div className='card-footer'>
				<Link className='link' to='/joke/1'>
					<span>See Stats</span>
					<BsArrowRight />
				</Link>
			</div>
		</div>
	)
}

export default JokeCard
