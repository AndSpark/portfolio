import { useRef, useState } from "react"
import { useEffect } from "react"

const ScrollTop = () => {
	const scrollTop = useRef<HTMLAnchorElement>(null)
	const [show,setShow] = useState(false)
	useEffect(() => {
		const scrollUp = () => {
			const scrollY =window.scrollY
			if (scrollY > 600) {
				setShow(true)
			} else {
				setShow(false)
			}
		}
		window.addEventListener("scroll",scrollUp)
	}, [])
	
	return (
		<a href="#home" className={(show && 'scrolltop-show') + ' scrolltop' } ref={scrollTop}>
			<i className="uil uil-arrow-up scroll__icon"></i>	
		</a>
		
	)
}

export default ScrollTop
