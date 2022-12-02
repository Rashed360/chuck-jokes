import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

const Footer = () => {
	return (
		<footer>
			<div className='container'>
				<p>Got jokes? Get paid for submitting!</p>
				<a href='#'>
					<span>Submit Joke</span>
					<BsArrowRight />
				</a>
			</div>
		</footer>
	)
}

export default Footer
