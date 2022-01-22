import './App.scss'
import hamburger from './images/Hamburger.png'
import heroImage from './images/hero/image.png'
import heroImage1 from './images/hero/image1.png'
import heroImage2 from './images/hero/image2.png'
import heroImage3 from './images/hero/image3.png'
import image from './images/image.png'
import man from './images/Man.png'
import search from './images/Search.png'
import sun from './images/Sun.png'
import image1 from './images/image-252.png'

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
				<section className='hero' >
					<div class="hero__container container">

						<nav class="hero__navbar navbar">
							<ul class="navbar__list">
								<li class="navbar__item">
									<a href='#' class="navbar__link">News</a>
								</li>
								<li class="navbar__item">
									<a href='#' class="navbar__link">Opinion</a>
								</li>
								<li class="navbar__item">
									<a href='#' class="navbar__link">Science</a>
								</li>
								<li class="navbar__item">
									<a href='#' class="navbar__link">Life</a>
								</li>
								<li class="navbar__item">
									<a href='#' class="navbar__link">Travel</a>
								</li>
								<li class="navbar__item">
									<a href='#' class="navbar__link">Moneys</a>
								</li>
								<li class="navbar__item">
									<a href='#' class="navbar__link">Art and Design</a>
								</li>
								<li class="navbar__item">
									<a href='#' class="navbar__link">Sports</a>
								</li>
								<li class="navbar__item">
									<a href='#' class="navbar__link">People</a>
								</li>
								<li class="navbar__item">
									<a href='#' class="navbar__link">Health</a>
								</li>
								<li class="navbar__item">
									<a href='#' class="navbar__link">Education</a>
								</li>
							</ul>
						</nav>
						<div className='hero__news news'>
							<div class="news__container">
								<ul class="news__list">
									<li class="news__item">
										<div class="news__title">25 Songs That Tell Us Where Music Is Going</div>
										<div class="news__image _ibg">
											<img src={heroImage}></img>
										</div>
									</li>
									<li class="news__item">
										<div class="news__title">These Ancient Assassins Eat Their Own Kind</div>
										<div class="news__image _ibg">
											<img src={heroImage1}></img>
										</div>
									</li>
									<li class="news__item">
										<div class="news__title">How Do You Teach People to Love Difficult Music?</div>
										<div class="news__image _ibg">
											<img src={heroImage2}></img>
										</div>
									</li>
									<li class="news__item">
										<div class="news__title">International Soccer’s Man of Mystery</div>
										<div class="news__image _ibg">
											<img src={heroImage3}></img>
										</div>
									</li>
								</ul>
							</div>

						</div>
					</div>
					{/*<div className='hero__banner ' />*/}
				</section>
			</main>
			<footer className='footer'>
				<div class="footer__aontainer">
				</div>
			</footer>
		</div>
	);
}
export default App;
