import React from 'react'
import { GoSearch } from 'react-icons/go'

const Header = () => {
	return (
		<header>
			<h1>The Joke Bible</h1>
			<p>Daily Laughs for you and yours</p>
			<div className='input-box'>
				<input type='text' placeholder='How can we make you laugh today?' />
				<GoSearch />
			</div>
		</header>
	)
}

export default Header
