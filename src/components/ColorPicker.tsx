import { useEffect, useState } from 'react'
import { localGet, localSet } from '@andspark/utils'

const colorList = [
	{
		label: '#e05757',
		value: '0',
	},
	{
		label: '#e09e57',
		value: '31',
	},
	{
		label: '#e0d557',
		value: '55',
	},
	{
		label: '#9ce057',
		value: '90',
	},
	{
		label: '#57e0b5',
		value: '161',
	},
	{
		label: '#5797e0',
		value: '212',
	},
	{
		label: '#e05785',
		value: '340',
	},
]

let style: HTMLStyleElement;

const ColorPicker = () => {
	const [isShowPanel, setIsShowPanel] = useState(false)

	useEffect(() => {
		style = document.createElement('style')
		document.body.appendChild(style)
		const color = localGet('color')
		color && setRootColor(color)
	},[])


	const setRootColor = (color: string) => {
		localSet('color', color)
		style.innerHTML = `
		:root {
			--hue-color: ${color}
		}
		`
	}


	return (
		<div className='color-picker'>
			<i onClick={() => setIsShowPanel(!isShowPanel)} className='uil uil-palette change-color'></i>
			{isShowPanel && (
				<ul className='color__panel'>
					{colorList.map(color => (
						<li key={color.value} className='color__block' style={{ backgroundColor: color.label }} onClick={() => setRootColor(color.value)}></li>
					))}
				</ul>
			)}
		</div>
	)
}

export default ColorPicker
