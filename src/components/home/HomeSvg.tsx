interface Props {
	children?: JSX.Element[] | JSX.Element
	className?:string
}

const HomeSvg = ({ children,className }: Props) => {
	return (
		<svg className={className} style={{ overflow: 'hidden' }} viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M47.4,-57.3C61.5,-44.5,73.3,-29.8,76.8,-13.1C80.3,3.6,75.5,22.2,65.5,36.2C55.5,50.2,40.3,59.6,23.1,67.7C5.9,75.8,-13.3,82.6,-27.5,76.8C-41.6,71.1,-50.7,52.8,-60.9,35.2C-71,17.5,-82.3,0.5,-82.3,-17.1C-82.3,-34.8,-71,-53,-55.5,-65.6C-39.9,-78.2,-19.9,-85,-1.7,-83C16.6,-81,33.2,-70.1,47.4,-57.3Z'
				transform='translate(100 100)'
			/>
			<path
				fill='url(#image)'
				d='M47.4,-57.3C61.5,-44.5,73.3,-29.8,76.8,-13.1C80.3,3.6,75.5,22.2,65.5,36.2C55.5,50.2,40.3,59.6,23.1,67.7C5.9,75.8,-13.3,82.6,-27.5,76.8C-41.6,71.1,-50.7,52.8,-60.9,35.2C-71,17.5,-82.3,0.5,-82.3,-17.1C-82.3,-34.8,-71,-53,-55.5,-65.6C-39.9,-78.2,-19.9,-85,-1.7,-83C16.6,-81,33.2,-70.1,47.4,-57.3Z'
				transform='translate(100 100)'
			/>

			<defs>
				<pattern id='image' x='0%' y='0%' height='100%' width='100%'>
					{children}
				</pattern>
			</defs>
		</svg>
	)
}

export default HomeSvg
