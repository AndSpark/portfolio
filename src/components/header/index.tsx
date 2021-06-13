import { useEffect, useRef, useState } from 'react'
import ColorPicker from '../ColorPicker'
const navList = [
	{
		href: '#home',title: 'Home',iconClass: 'uil uil-estate',
	},
	{
		href: '#about',title: 'About',iconClass: 'uil uil-user',
	},
	{
		href: '#skills',title: 'Skills',iconClass: 'uil uil-file-alt',
	},
	{
		href: '#experience',title: 'Experience',iconClass: 'uil uil-briefcase-alt',
	},
	{
		href: '#portfolio',title: 'Portfolio',iconClass: 'uil uil-scenery',
	},
	{
		href: '#contact',title: 'Contact',iconClass: 'uil uil-message',
	},
]

type Props = {
	isDarkTheme:boolean
	setDarkTheme:Function
}

const Header = ({isDarkTheme,setDarkTheme}:Props) => {
	const [show, setShow] = useState(false)
	const menuEl = useRef<HTMLDivElement>(null)
	const header = useRef<HTMLElement>(null)

	useEffect(() => {
		show 
			? menuEl.current!.style.bottom = '0'
			: menuEl.current!.style.bottom = '-100%'
	},[show])
	

	useEffect(() => {
		scrollNav()
		scrollHeader()
		
	}, [])

	const scrollNav = () => {
		const sectionsEl = [...document.querySelectorAll('section[id]')] as HTMLElement[]

		const sections = sectionsEl.sort((a, b) => a.offsetTop - b.offsetTop)

		const scrollNavActive = () => {
			const scrollY = window.pageYOffset + 2
			
			sections.reduce((p, c,i) => {
				let navItems = document.querySelectorAll('.nav__link')
				let n = i ? i - 1 : i
				let current = navItems[n]
				if (scrollY >= p  && scrollY < c.offsetTop ) {
					current.classList.add('active-link')
				}  else {
					current.classList.remove('active-link')
				}

				if (scrollY > c.offsetTop  ) {
					navItems[i].classList.add('active-link')
					current.classList.remove('active-link')
				} else {
					navItems[i].classList.remove('active-link')
				}

				return c.offsetTop
			}, 0)
			
		}
	
		window.addEventListener('scroll', scrollNavActive)
	}

	const scrollHeader = () => {
		const scrollHeaderActive = () => {
			const scrollY = window.pageYOffset 
			if (scrollY > 100) {
				header.current?.classList.add('scroll-header')
			} else {
				header.current?.classList.remove('scroll-header')
				
			}
		}

		window.addEventListener('scroll', scrollHeaderActive)
	}

	return (
		<header className='header' ref={header}>
			<nav className='nav container'>
				<a href='/' className='nav__logo'>
					Hibana
				</a>
				<div className='nav__menu' ref={menuEl}>
					<ul className='nav__list grid'>
						{navList.map((item,i) => (
							<li className='nav__item' key={item.title}>
								<a href={item.href} className={(i === 0 ? 'active-link' : '') + ' nav__link'}>
									<i className={item.iconClass + ' nav__icon'}></i> {item.title}
								</a>
							</li>
						))}
					</ul>
					<i className="nav__close uil uil-times" onClick={() => setShow(false)}></i>
				</div>
				<div className="nav__btns">
					<ColorPicker/>
					<i className={(isDarkTheme ? 'uil-sun' :'uil-moon') + ' uil change-theme'} onClick={() => setDarkTheme()}></i>
					<div className="nav__toggle" onClick={() => setShow(true)}>
						<i className="uil uil-apps"></i>
					</div>
				</div>
			</nav>
		</header>
	)
}

export default Header
