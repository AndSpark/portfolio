import HomeSvg from './HomeSvg'
import portfiolio from '../../assets/images/me.gif'

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
							<image className="home__blob-img" xlinkHref={portfiolio}></image>
						</HomeSvg>
					</div>
					<div className="home__data">
					<h1 className="home__title">Hi，我是 GLS</h1>
					<h3 className="home__subtitle">新进前端工程师</h3>
					<p className="home__description">
						生而为人，习惯吃饭、睡觉、学习、Keep、音乐、娱乐、游戏，想创建自己的Website...
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
