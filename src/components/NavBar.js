import React from 'react'
import { FaUser, FaCaretDown } from 'react-icons/fa'

const NavBar = () => {
	return (
		<nav>
			<div className='container'>
				<ul id='navbar'>
					<li>
						<a href='#'>So Funktioniert's</a>
					</li>
					<li>
						<a href='#'>Sonderangebote</a>
					</li>
					<li>
						<FaUser />
						<span>Mein Berrich</span>
						<FaCaretDown />
						<ul id='options'>
							<li>My published jokes</li>
							<li>My saved jokes</li>
							<li>Account Information</li>
							<li>Publish new joke</li>
						</ul>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default NavBar
