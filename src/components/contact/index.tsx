const contactList = [
	{
		icon: 'uil uil-phone',
		title: 'CALL ME',
		subtitle: '13777041196',
	},
	{
		icon: 'uil uil-envelope',
		title: 'Email',
		subtitle: '13777041196',
	},
	{
		icon: 'uil uil-map-marker',
		title: 'Location',
		subtitle: 'Zhejiang Ningbo',
	},
]

const Contact = () => {
	return (
		<section className='contact section' id="contact">
			<h2 className='section__title'>Contact Me</h2>
			<span className='section__subtitle'>Get in toch</span>
			<div className='contact__container container grid'>
				<div>
						{contactList.map(v => (
							<div className='contact__information' key={v.title}>
								<i className={v.icon + ' contact__icon'}></i>
								<div>
									<h3 className='contact__title'>{v.title}</h3>
									<span className='contact__subtitle'>{v.subtitle}</span>
								</div>
							</div>
						))}
				</div>
				<form action="" className="contact__form grid">
					<div className="contact__inputs grid">
						<div className="contact__content">
							<label htmlFor="" className="contact__label">Name</label>
							<input type="text" className="contact__input" />
						</div>
						<div className="contact__content">
							<label htmlFor="" className="contact__label">Email</label>
							<input type="email" className="contact__input" />
						</div>
						<div className="contact__content">
							<label htmlFor="" className="contact__label">Message</label>
							<textarea name="" id="" className="contact__input"></textarea>
						</div>
						<div>
							<a href="/" className="button button--flex">
								Send Message
								<i className="uil uil-message contact__icon"></i>
							</a>
						</div>
						</div>
					</form>
			</div>
		</section>
	)
}

export default Contact
