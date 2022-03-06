import { useState } from 'react'
import contactGif from '../../assets/images/contact.gif'
const contactList = [
	{
		icon: 'uil uil-phone',
		title: '手机',
		subtitle: '13777041196',
	},
	{
		icon: 'uil uil-envelope',
		title: '邮箱',
		subtitle: '421786477@qq.com',
	},
	{
		icon: 'uil uil-map-marker',
		title: '人在',
		subtitle: '浙江省 宁波市 ',
	},
]

const Contact = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	})
	const postForm = async (e: any) => {
		e.preventDefault()
		const res = await fetch(process.env.REACT_APP_URL + '/portfolio', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
		})
		if (res.status === 201) {
			setFormData({
				name: '',
				email: '',
				message: '',
			})
			alert('提交成功,我会尽快联系您')
		} else {
			alert('提交失败，请稍后再试')
		}
	}

	return (
		<section className='contact section' id='contact'>
			<h2 className='section__title'>联系</h2>
			<span className='section__subtitle'>Get in toch</span>
			<div className='contact__container container grid'>
				<div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
					{contactList.map(v => (
						<div className='contact__information' key={v.title}>
							<i className={v.icon + ' contact__icon'}></i>
							<div>
								<h3 className='contact__title'>{v.title}</h3>
								<span className='contact__subtitle'>{v.subtitle}</span>
							</div>
						</div>
					))}
					<img src={contactGif} alt='contact' />
				</div>
				{/* <form action='' className='contact__form grid'>
					<div className='contact__inputs grid'>
						<div className='contact__content'>
							<label className='contact__label'>称呼：</label>
							<input
								type='text'
								value={formData.name}
								className='contact__input'
								onChange={e => setFormData({ ...formData, name: e.currentTarget.value })}
							/>
						</div>
						<div className='contact__content'>
							<label className='contact__label'>邮箱：</label>
							<input
								type='email'
								value={formData.email}
								className='contact__input'
								onChange={e => setFormData({ ...formData, email: e.currentTarget.value })}
							/>
						</div>
						<div className='contact__content'>
							<label className='contact__label'>消息：</label>
							<textarea
								value={formData.message}
								onChange={e => setFormData({ ...formData, message: e.currentTarget.value })}
								className='contact__input'
							></textarea>
						</div>
						<div>
							<a href='/' className='button button--flex' onClick={e => postForm(e)}>
								留下消息
								<i className='uil uil-message contact__icon'></i>
							</a>
						</div>
					</div>
				</form> */}
			</div>
		</section>
	)
}

export default Contact
