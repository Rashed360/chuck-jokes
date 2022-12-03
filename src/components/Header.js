import React from 'react'
import { GoSearch } from 'react-icons/go'
import { MdBolt } from 'react-icons/md'

const Header = () => {
	return (
		<header>
			<h1>The Joke Bible</h1>
			<p>Daily Laughs for you and yours</p>
			<div className='input-box'>
				<input type='text' placeholder='How can we make you laugh today?' />
				<GoSearch className='float' />
				<div className='search-results'>
					<div>
						<MdBolt className='popular' />
						<span>Social Jokes: The Crazy Teacher</span>
					</div>
					<div>
						<MdBolt className='trending' />
						<span>Social Jokes: The Crazy Teacher</span>
					</div>
					<div>
						<MdBolt className='epic' />
						<span>Social Jokes: The Crazy Teacher</span>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
