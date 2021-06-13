import aboutImg from '../../assets/images/about.jpg'

const aboutInfo = [
	{
		title: '08+',
		name:<>Years <br/> experience </>
	},
	{
		title: '20+',
		name:<>Completed <br/> project </>
	},
	{
		title: '05+',
		name:<>Companies <br/> worked </>
	},
]

const About = () => {
	return (
		<section className="about section" id="about">
			<h2 className="section__title">About Me</h2>
			<span className="section__subtitle">My introduction</span>
			<div className="about__container container grid">
				<img src={aboutImg} className="about__img" alt="about" />
				<div className="about__data">
					<p className="about__description">
							其函数签名与 useEffect 相同，但它会在所有的 DOM 变更之后同步调用 effect。可以使用它来读取 DOM 布局并同步触发重渲染。在浏览器执行绘制之前，useLayoutEffect 内部的更新计划将被同步刷新。
					</p>
					<div className="about__info">
						{
							aboutInfo.map(info => (
								<div key={info.title}>
									<span className="about__info-title">{ info.title}</span>
									<span className="about__info-name">{info.name }</span>
								</div>
							))
						}
					</div>
					<div className="about__buttons">
					<a href="assets/cv.pdf" download className="button button--flex">
						Download CV
						<i className="uil uil-download-alt button_icon"></i>
					</a>
				</div>
				</div>

			</div>
		</section>
	)
}

export default About
