import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import 'swiper/swiper-bundle.min.css'

import demo1 from '../../assets/images/demo1.png'
import demo2 from '../../assets/images/portfolio.png'

SwiperCore.use([Navigation, Pagination])

const demoList = [
	{
		img: demo1,
		title: 'Music Player',
		description: 'This is a music player which could play netesat music',
	},
	{
		img: demo2,
		title: 'Music Player2',
		description: 'This is a music player which could play netesat music',
	},
]

const Portfolio = () => {
	return (
		<section className='portfolio section' id="portfolio">
			<h2 className='section__title'>Portfolio</h2>
			<span className='section__subtitle'>Most recent work</span>
			<div className='portfolio__container container'>
				<Swiper
					navigation
					pagination={{ clickable: true }}
					spaceBetween={50}
					slidesPerView={1}
					loop={true}
					onSlideChange={() => console.log('slide change')}
					onSwiper={swiper => console.log(swiper)}
				>
					{demoList.map(demo => (
						<SwiperSlide key={demo.title}>
							<div className='portfolio__content grid'>
								<img src={demo.img} alt='demo1' className='portfolio__img' />
								<div className='portfolio__data'>
									<h3 className='portfolio__title'>{demo.title}</h3>
									<p className='portfolio__description'>{demo.description}</p>
									<a href='/' className='button button--flex button--small portfolio__button'>
										Demo
										<i className='uil uil-arrow-right button__icon'></i>
									</a>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	)
}

export default Portfolio
