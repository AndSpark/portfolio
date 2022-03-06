const experienceList = [
	{
		title: '中国计量大学',
		subtitle: '能源与动力工程',
		calendar: '2015.9 - 2019.6',
	},
	{
		title: '宁波中盛产品检测有限公司',
		subtitle: '测试工程师',
		calendar: '2019.8 - 2020.8',
	},
	{
		title: '',
		subtitle: '自学前端中...',
		calendar: '2020.8 - 2020.10',
	},
	{
		title: '宁波乐搜网络科技有限公司',
		subtitle: '前端开发',
		calendar: '2020.10 - 2021.7',
	},
	{
		title: '杭州鹿径科技有限公司',
		subtitle: '前端开发',
		calendar: '2021.7 - 至今',
	},
]

const Experience = () => {
	return (
		<section className='experience section' id='experience'>
			<h2 className='section__title'>经历</h2>
			<span className='section__subtitle'>My personal journey</span>
			<div className='experience__container container'>
				<div className='experience__content'>
					{experienceList.map((v, i) => (
						<div className='experience__data' key={v.title}>
							{(i + 1) % 2 === 0 && (
								<>
									<div></div>
									<div>
										<span className='experience__rounder'></span>
										<span className='experience__line'></span>
									</div>
								</>
							)}
							<div>
								<h3 className='experience__title'>{v.title}</h3>
								<span className='experience__subtitle'>{v.subtitle}</span>
								<div className='experience__calendar'>
									<i className='uil uil-calendar-alt experience__icon'></i>
									{v.calendar}
								</div>
							</div>
							{(i + 1) % 2 !== 0 && (
								<div>
									<span className='experience__rounder'></span>
									<span className='experience__line'></span>
								</div>
							)}
						</div>
					))}
				</div>
				<h3 className='experience__foot'>to be continued</h3>
			</div>
		</section>
	)
}

export default Experience
