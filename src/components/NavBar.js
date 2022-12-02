import React from 'react'
import { FaUser, FaCaretDown } from 'react-icons/fa'

const NavBar = () => {
	return (
		<nav>
			<div className='container'>
				<ul>
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
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default NavBar
