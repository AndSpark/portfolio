import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import 'swiper/swiper-bundle.min.css'

import demo1 from '../../assets/images/demo1.png'
import demo2 from '../../assets/images/demo2.jpg'
import demo3 from '../../assets/images/demo3.jpg'

SwiperCore.use([Navigation, Pagination])

const demoList = [
	{
		img: demo1,
		title: 'Apple Music',
		description:
			'这是我自学前端期间用VUE写的一个音乐播放器，之前我比较喜欢Apple Muisc的界面，于是参考着写了一个，其中后端用的来自github上的Netease CloudMusicApi，是网易云音乐的API接口。',
		href: 'https://music.hibana.xyz',
	},
	{
		img: demo2,
		title: '企业网站建站系统',
		description:
			'写了一套企业网站建站系统，包括用nodeJs从数据库读取数据，渲染模板标签页面，通过域名返回不同企业页面，后台管理界面使用VUE3 + Element搭建，后端API服务使用nestJs实现。',
		href: '',
	},
	{
		img: demo3,
		title: '数治警务服务管理平台',
		description:
			'该平台可以为交警提供远程处罚和事故处理指挥的功能。项目原先采用vue2+element框架，后面混入了compositionApi+TS，使代码更严谨易读。本人独立负责此后台开发。',
		href: '',
	},
]

const Portfolio = () => {
	return (
		<section className='portfolio section' id='portfolio'>
			<h2 className='section__title'>项目</h2>
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
									{demo.href && (
										<a
											href={demo.href}
											className='button button--flex button--small portfolio__button'
										>
											Demo
											<i className='uil uil-arrow-right button__icon'></i>
										</a>
									)}
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
