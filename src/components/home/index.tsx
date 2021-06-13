import HomeSvg from './HomeSvg'
import portfiolio from '../../assets/images/portfolio.png'

const socialList = [
	{
		href: 'http://hibana.xyz',
		icon:'uil uil-link-h'
	},
	{
		href: 'https://github.com/AndSpark',
		icon: 'uil uil-github-alt',
	},
	{
		href: 'mailto:421786477@qq.com',
		icon:'uil uil-envelope-upload'
	},
	
]
const Home = () => {

	return (
		<section className='home section' id="home">
			<div className='home__container container grid'>
				<div className='home__content grid'>
					<div className='home__social grid'>
						{socialList.map(social => (
							<a href={social.href} target='_blank' rel="noreferrer" key={social.href} className='home__sociall-icon'>
								<i className={social.icon}></i>
							</a>
						))}
					</div>
					<div className="home__img">
						<HomeSvg className="home__blob">
							<image className="home__blob-img"  xlinkHref={portfiolio}></image>
						</HomeSvg>
					</div>
					<div className="home__data">
					<h1 className="home__title">Hi,i'am Hibana</h1>
					<h3 className="home__subtitle">Frontend Developer</h3>
					<p className="home__description">
						High level experience in web design and knowledge, producing quality work.
					</p>
					<a href="#contact" className="button button--flex">
						Contact Me
						<i className="uil uil-message button__icon"></i>
					</a>
				</div>
				</div>
				
				<div className="home__scroll">
					<a href="#about" className="home__scroll-button button--flex">
						<i className="uil uil-mouse-alt home__scroll-mouse"></i>
						<span className="home__scroll-name">Scroll down</span>
						<i className="uil uil-arrow-down home__scroll-arrow"></i>
					</a>
				</div>
			</div>
		</section>
	)
}

export default Home
