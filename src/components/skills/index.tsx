import { useState } from 'react'

type Skill = {
	title: string
	subtitle: string
	icon: string
	open: boolean
	skillList: {
		title: string
		number: string
		percentage: string
	}[]
}

const Skills = () => {
	const [skills, setSkills] = useState<Skill[]>([
		{
			title: '前端相关',
			subtitle: 'More than 1 years',
			icon: 'uil uil-brackets-curly',
			open: true,
			skillList: [
				{
					title: 'HTML',
					number: '75%',
					percentage: 'skills__html',
				},
				{
					title: 'CSS',
					number: '70%',
					percentage: 'skills__css',
				},
				{
					title: 'JavaScript',
					number: '80%',
					percentage: 'skills__js',
				},
				{
					title: 'TypeScript',
					number: '70%',
					percentage: 'skills__js',
				},
				{
					title: 'Vue',
					number: '80%',
					percentage: 'skills__vue',
				},
				{
					title: 'React',
					number: '60%',
					percentage: 'skills__react',
				},
			],
		},
		{
			title: '后端相关',
			subtitle: 'More than 0 years',
			icon: 'uil uil-server-network',
			open: false,
			skillList: [
				{
					title: 'NodeJs',
					number: '66%',
					percentage: 'skills__node',
				},
				{
					title: 'NestJs',
					number: '60%',
					percentage: 'skills__node',
				},
				{
					title: 'TypeOrm',
					number: '65%',
					percentage: 'skills__node',
				},
			],
		},
	])

	const handleHeaderClick = (skill: Skill) => {
		setSkills(
			skills.map(v => {
				return {
					...v,
					open: skill.title === v.title ? !v.open : false,
				}
			})
		)
	}

	return (
		<section className='section skills' id='skills'>
			<h2 className='section__title'>技术</h2>
			<span className='section__subtitle'>My technical level</span>
			<div className='skills__container container grid'>
				{skills.map(skill => (
					<div
						className={
							skill.open ? 'skills__open skills__content' : 'skills__close skills__content'
						}
						key={skill.title}
					>
						<div className='skills__header' onClick={() => handleHeaderClick(skill)}>
							<i className={skill.icon + ' skills__icon'}></i>
							<div>
								<h1 className='skills__title'>{skill.title}</h1>
								<span className='skills__subtitle'>{skill.subtitle}</span>
							</div>
							<i className='uil uil-angle-down skills__arrow'></i>
						</div>
						<div className='skills__list grid'>
							{skill.skillList.map(v => (
								<div className='skills__data' key={v.title}>
									<div className='skills__titles'>
										<h3 className='skills__name'>{v.title}</h3>
										<span className='skills__number'></span>
									</div>
									<div className='skills__bar'>
										<span
											className={v.percentage + ' skills__percentage'}
											style={{ '--percentage': v.number } as React.CSSProperties}
										></span>
									</div>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	)
}

export default Skills
