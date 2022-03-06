import aboutImg from '../../assets/images/about.gif'

const About = () => {
	return (
		<section className='about section' id='about'>
			<h2 className='section__title'>关于</h2>
			<span className='section__subtitle'>My introduction</span>
			<div className='about__container container grid'>
				<img src={aboutImg} className='about__img' alt='about' />
				<div className='about__data'>
					<p className='about__description'>
						大学毕业后先是在一家家电检测认证机构上班，觉得不是我想要的工作，大约一年后辞职在家自学前端。先从HTML、
						CSS、JS开始学习，然后是VUE，TypeScript，还有nodejs用来做各种小工具。也稍微用了一下React。
					</p>
					<p className='about__description'>
						到了后面觉得光只会前端也不行，不然怎么自己一个人做网站。正好nodejs可以做后端接口，虽然没有去深入了解过nodejs各种API、原理，但是用来CRUD做做接口已经足够了...目前在一家网络公司工作，写写网页。
					</p>
					<div className='about__buttons'>
						<a href='#about' className='button button--flex'>
							装饰用的按钮
							<i className='uil uil-download-alt button__icon'></i>
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About
