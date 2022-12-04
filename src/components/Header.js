import axios from 'axios'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { GoSearch } from 'react-icons/go'
import { MdBolt } from 'react-icons/md'

const Header = () => {
	const [searchQuery, setSearchQuery] = useState('')
	const [loading, setLoading] = useState(false)
	const [results, setResults] = useState([])
	const [focus, setFocus] = useState(false)

	useEffect(() => {
		if (searchQuery.length > 3) {
			const loadPosts = async () => {
				setLoading(true)
				const res = await axios.get(`https://api.chucknorris.io/jokes/search?query=${searchQuery}`)
				console.log(res.data.result)
				setResults(res.data.result)
				setLoading(false)
			}
			loadPosts()
		}
	}, [searchQuery])

	const onInputChange = e => {
		setSearchQuery(e.target.value)
		setFocus(true)
	}

	return (
		<header onClick={() => setFocus(false)}>
			<div className='container'>
				<div className='header-contents'>
					<h1>The Joke Bible</h1>
					<p>Daily Laughs for you and yours</p>
					<div className='input-box'>
						<input
							type='text'
							value={searchQuery}
							placeholder='How can we make you laugh today?'
							onChange={onInputChange}
						/>
						<GoSearch className='float' />

						<div
							className={`search-results${focus ? (searchQuery.length > 3 ? ' active' : '') : ''}`}
							onClick={e => e.stopPropagation()}
						>
							{loading ? (
								<div>
									<span>Loading...</span>
								</div>
							) : results.length > 0 ? (
								results.slice(0, 4).map((itm, idx) => (
									<div key={idx}>
										<MdBolt className='trending' />
										<Link to={`/joke/${itm.id}`}>
											<span>
												{itm.categories.length > 0 ? itm.categories[0] : 'uncategorized'}:{' '}
												{itm.value.slice(0, 30)}
												...
											</span>
										</Link>
									</div>
								))
							) : (
								<div>
									<span>No results.</span>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
