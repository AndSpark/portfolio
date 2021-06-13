const experienceList = [
	{
		title: 'China Jiliang University',
		subtitle: 'Energy and Power Engineering',
		calendar: '2015 - 2019',
	},
	{
		title: 'China Jiliang University2',
		subtitle: 'Energy and Power Engineering',
		calendar: '2015 - 2019',
	},
	{
		title: 'China Jiliang University3',
		subtitle: 'Energy and Power Engineering',
		calendar: '2015 - 2019',
	},
]

const Experience = () => {
	return (
		<section className='experience section' id='experience'>
			<h2 className='section__title'>Experience</h2>
			<span className='section__subtitle'>My personal journey</span>
			<div className='experience__container container'>
				<div className='experience__content'>
						{experienceList.map((v,i) => (
							<div className='experience__data' key={v.title}>
								{
									(i+1) % 2 === 0 &&
									<>
									<div></div>
									<div>
										<span className='experience__rounder'></span>
										<span className='experience__line'></span>
										</div>
									</>
								}
								<div>
									<h3 className='experience__title'>{v.title}</h3>
									<span className='experience__subtitle'>{v.subtitle}</span>
									<div className='experience__calendar'>
										<i className='uil uil-calendar-alt'></i>
										{v.calendar}
									</div>
								</div>
								{
									(i+1) % 2 !== 0  &&
									<div>
										<span className='experience__rounder'></span>
										<span className='experience__line'></span>
									</div>
								}
							</div>
						))}
				</div>
				<h3 className="experience__foot">
					to be contanued
				</h3>
			</div>
		</section>
	)
}

export default Experience
