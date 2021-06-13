const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__bg">
			<div className="footer__container container grid">
				<div>
					<h1 className="footer__title">Hibana</h1>
					<span className="footer__subtitle">Frontend Developer</span>
				</div>
				<ul className="footer__links">
					<li>
						<a href="#about" className="footer__link">
							Home
						</a>
					</li>
					<li>
						<a href="#about" className="footer__link">
							About
						</a>
					</li>
					<li>
						<a href="http://hibana.xyz" target="_blank" rel="noreferrer" className="footer__link">
							Hibana
						</a>
					</li>
				</ul>
				<div className="footer__socials">
					<a href="http://hibana.xyz" className="footer__social"
						target="_blank"
						rel="noreferrer"
					>
						<i className="footer__icon uil uil-link-h"></i>
					</a>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://github.com/AndSpark" className="footer__social">
						<i className="footer__icon uil uil-github-alt"></i>
					</a>
				</div>
				<p className="footer__copy">
					&#169; Hibana All right reserved
				</p>
			</div>

			</div>
			
		</footer>
	)
}

export default Footer
