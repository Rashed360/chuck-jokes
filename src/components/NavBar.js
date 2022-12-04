import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaUser, FaCaretDown, FaBars } from 'react-icons/fa'

const NavBar = () => {
	const [dropDownActive, setDropDownActive] = useState(false)
	const [responsiveMenuActive, setResponsiveMenuActive] = useState(false)

	const dropDownToggle = () => {
		setDropDownActive(!dropDownActive)
	}
	const responsiveMenuToggle = () => {
		setResponsiveMenuActive(!responsiveMenuActive)
	}

	return (
		<nav>
			<div className='container'>
				<div className='bars' onClick={responsiveMenuToggle}>
					<FaBars />
				</div>
				<ul className={`navbar${responsiveMenuActive ? ' active' : ''}`}>
					<li className='opt'>
						<Link to='/'>So Funktioniert's</Link>
					</li>
					<li className='opt'>
						<a href='#'>Sonderangebote</a>
					</li>
					<li onClick={dropDownToggle}>
						<FaUser />
						<span>Mein Berrich</span>
						<FaCaretDown />
						<div className={`options${dropDownActive ? ' active' : ''}`}>
							<i>My published jokes</i>
							<i>My saved jokes</i>
							<i>Account Information</i>
							<i>Publish new joke</i>
						</div>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default NavBar
