import './App.scss'
import hamburger from './images/Hamburger.png'
import image from './images/image.png'
import man from './images/Man.png'
import search from './images/Search.png'
import sun from './images/Sun.png'
import image1 from './images/image-252.png'
import Facebook from './images/social/Facebook.svg'
import Instagram from './images/social/Instagram.svg'
import Twitter from './images/social/Twitter.svg'
import YouTube from './images/social/YouTube.svg'
import Hot from './Components/Hot/Hot'
import Grid from './Components/Grid/Grid'
import Categories from './Components/Categories/Categories'
import Hero from './Components/Hero/Hero'
import Recommend from './Components/Recommend/Recommend'
import Plants from './Components/Plants/Plants'
import Subscribe from './Components/Subscribe/Subscribe'
import Menu from './Components/Menu/Menu'


function App() {
	return (
		<div className="wrapper">
			<div className='header'>
				<div class="header__container container">
					<div class="header__top top">
						<div class="top__leftcolumn">
							<div class="top__section sections">
								<div class="sections__icon _ibg">
									<img src={hamburger}></img>
								</div>
								<div class="section__txt">
									Sections
								</div>
							</div>
							<div class="top__search search">
								<div class="search__icon _ibg">
									<img src={search}></img>
								</div>
								<input class="search__input" placeholder='Search...' />
							</div>
						</div>
						<div class="top__rightcolumn">
							<div className='top__subscribe subscribe'>
								<div class="subscribe__image _ibg">
									<img src={image}></img>
								</div>
								<div class="subscribe__txt">
									<div class="subscribe__title">
										Subscribe Now
									</div>
									<div class="subscribe__date">
										3 month for $19
									</div>
								</div>
							</div>
							<div className='top__signin signin'>
								<div class="signin__icon _ibg">
									<img src={man}></img>
								</div>
								<div class="signin__txt">
									Sign In
								</div>
							</div>
						</div>
					</div>
					<div class="header__sub sub">
						<div class="sub__logoblochk">
							<div class="sub__logo _ibg">
								<img src={image1}></img>
							</div>
							<div class="sub__txt">
								Boston and New York Bear Brunt
							</div>
						</div>
						<div class="sub__title">
							Universal
						</div>
						<div class="sub__date">
							Monday, January 1, 2018
						</div>
						<div class="sub__weather weather">
							<div class="weather__icon _ibg">
								<img src={sun}></img>
							</div>
							<div class="weather__temperature">
								- 23 °C
							</div>
						</div>
					</div>
				</div>
			</div>
			<main className='main'>
				<Hero />
				<Recommend />
				<Grid />
				<Plants />
				<Categories />
				<Hot />
				<Subscribe />
				<Menu />
			</main>
			<footer className='footer top'>
				<div class="footer__container container">
					<div class="footer__logo logo">
						<div class="logo__txt">JNV</div>
					</div>
					<div class="footer__menu menu">
						<ul class="menu__list">
							<li class="menu__link">
								<a href='#'>Contact Us</a>
							</li>
							<li class="menu__link">
								<a href='#'>Work with Us</a>
							</li>
							<li class="menu__link">
								<a href='#'>Advertise</a>
							</li>
							<li class="menu__link">
								<a href='#'></a>
							</li>
							<li class="menu__link">
								<a href='#'>Your Ad Choise</a>
							</li>
						</ul>
					</div>
					<div class="footer__links links">
						<ul class="links__menu">
							<li class="links__link">
								<a className='links__icon _ibg' href='#' >
									<img src={Facebook} />
								</a>
							</li>
							<li class="links__link">
								<a className='links__icon _ibg' href='#' >
									<img src={Twitter} />
								</a>
							</li>
							<li class="links__link">
								<a className='links__icon _ibg' href='#' >
									<img src={YouTube} />
								</a>
							</li>
							<li class="links__link">
								<a className='links__icon _ibg' href='#' >
									<img src={Instagram} />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</footer>
			<div class="footer sub">
				<div class="sub__container container">
					<div class="sub__txt">Universal’s business concept is to offer fashion and quality at the best price in a sustainable way. Universal has since it was founded in 2015 grown into one of the world's leading fashion companies. </div>
					<div class="sub__txt right">© 2019 Universal UI Kit</div>
				</div>
			</div>
		</div>
	);
}
export default App;
