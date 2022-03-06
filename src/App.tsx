import Header from './components/header/index'
import Home from './components/home/index'
import About from './components/about/index'
import Skills from './components/skills/index'
import Experience from './components/experience/index'
import Portfolio from './components/portfolio/index'
import Contact from './components/contact/index'
import Footer from './components/footer/index'
import ScrollTop from './components/ScrollTop'
import { useEffect, useLayoutEffect, useState } from 'react'

const App = () => {

	const [isDarkTheme, setDarkTheme] = useState(false)

	useLayoutEffect(() => {
		const hour = new Date().getHours()

		if (hour > 19) {
			setDarkTheme(true)
		}
	},[])

	useEffect(() => {
		isDarkTheme
			? document.body.classList.add('dark-theme')
			: document.body.classList.remove('dark-theme')
	}, [isDarkTheme])
	
	return (
		<div>
			<Header isDarkTheme={isDarkTheme} setDarkTheme={() => setDarkTheme(!isDarkTheme)}  />
			<Home />
			<About />
			<Skills />
			<Experience />
			<Portfolio />
			<Contact />
			<Footer />
			<ScrollTop/>
		</div>
	)
}

export default App

