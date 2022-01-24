import './App.scss'
import hamburger from './images/Hamburger.png'
///////////////////////////////////////////////////
import heroImage from './images/hero/image.png'
import heroImage1 from './images/hero/image1.png'
import heroImage2 from './images/hero/image2.png'
import heroImage3 from './images/hero/image3.png'
////////////////////////////////////////////////////
import image from './images/image.png'
import man from './images/Man.png'
import search from './images/Search.png'
import sun from './images/Sun.png'
import image1 from './images/image-252.png'
import recommendBanner from './images/recommend/recommend_banner.jpg'
import play from '././images/recommend/play.png'
import recommendUser from '././images/recommend/user.png'
////////////////////////////////////////////////////////////////
import gridCar from './images/grid/car.jpg'
import gridCat from './images/grid/cat.jpg'
import gridPopular from './images/grid/popular.jpg'
import gridUser1 from './images/grid/user1.png'
import gridUser2 from './images/grid/user2.png'
import gridUser3 from './images/grid/user3.png'
import gridUser4 from './images/grid/user4.png'
////////////////////////////////////////////////////////////////
import categoriesItem1 from './images/categories/item/image1.jpg'
import categoriesItem2 from './images/categories/item/Image2.jpg'
import categoriesItem3 from './images/categories/item/Image3.jpg'
import categoriesItem4 from './images/categories/item/Image4.jpg'
import categoriesItem5 from './images/categories/item/Image5.jpg'
import categoriesItem6 from './images/categories/item/Image6.jpg'
import categoriesUser1 from './images/categories/recomend/image1.png'
import categoriesUser2 from './images/categories/recomend/image2.png'
import categoriesUser3 from './images/categories/recomend/image3.png'
import categoriesUser4 from './images/categories/recomend/image4.png'
import categoriesUser5 from './images/categories/recomend/image5.png'
import categoriesUser6 from './images/categories/recomend/image6.png'
import categoriesUser7 from './images/categories/recomend/image7.png'
////////////////////////////////////////////////////////////////////
import Facebook from './images/social/Facebook.svg'
import Instagram from './images/social/Instagram.svg'
import Twitter from './images/social/Twitter.svg'
import YouTube from './images/social/YouTube.svg'
/////////////////////////////////////////////////////////////////////////
import plantsBg from './images/plants/plantsBg.jpg'
////////////////////////////////////////////////////////////////////////
import hot1 from './images/hot/image1.jpg'
import image2 from './images/hot/image2.png'
import user1 from './images/hot/user1.png'


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
				<section className='recommend'>
					<div class="recommend__container container">
						<div class="recommend__content content">
							<div class="recommend__banner ibg">
								<img src={recommendBanner}></img>
							</div>
							<div class="content__user user">
								<div class="user__icon ibg">
									<img src={recommendUser}></img>
								</div>
								<div class="user__data">
									<div class="user__name">By Benjamin Turner</div>
									<div class="user__job">Traveler</div>
								</div>
							</div>
							<div class="content__body body">
								<div class="body__destinations">Destinations</div>
								<div class="body__title">In Southeast England, White Cliffs and Fish</div>
								<div class="body__buttons buttons">
									<div class="buttons__read read">
										<div class="read__txt">
											Read more
										</div>
										<div class="read__icon _ibg">
											<img src={man}></img>
										</div>
									</div>
									<div class="buttons__play play">
										<div class="play__button">
											<div class="play__icon _ibg">
												<img src={play}></img>
											</div>
										</div>
										<div class="play__data">
											<div class="play__title">The chalk cliff of Beachy Head</div>
											<div class="play__time">18:05</div>
										</div>
									</div>
								</div>
							</div>

						</div>
						<div class="recommend__navbar navbar">
							<div class="navbar__title">Recommended for you</div>
							<ul class="navbar__list">
								<li class="navbar__item item">
									<div class="item__title">Food</div>
									<div class="item__body">
										<span class="item__txt">For Chicken-Fried Steak, Too Much Is Just Enough</span>
										<span className='item_button'>
											<div class="item__icon ibg">
												<img src={play} />
											</div>
										</span>
									</div>
								</li>
								<li class="navbar__item item">
									<div class="item__title">Cars</div>
									<div class="item__body">
										<span class="item__txt">Storm Has Car Dealers Doing Swift Business</span>
										<span className='item_button'>
											<div class="item__icon ibg">
												<img src={play} />
											</div>
										</span>
									</div>
								</li>
								<li class="navbar__item item">
									<div class="item__title">Movies</div>
									<div class="item__body">
										<span class="item__txt">War Is Hell? In New Military Dramas, It’s One-Dimensional</span>
										<span className='item_button'>
											<div class="item__icon ibg">
												<img src={play} />
											</div>
										</span>
									</div>
								</li>
								<li class="navbar__item item">
									<div class="item__title">NFL</div>
									<div class="item__body">
										<span class="item__txt">11 surprising stat rankings for active NFL players</span>
										<span className='item_button'>
											<div class="item__icon ibg">
												<img src={play} />
											</div>
										</span>
									</div>
								</li>
								<li class="navbar__item item">
									<div class="item__title">Tech Reviews</div>
									<div class="item__body">
										<span class="item__txt">The bookcases you can buy online and assemble yourself</span>
										<span className='item_button'>
											<div class="item__icon ibg">
												<img src={play} />
											</div>
										</span>
									</div>
								</li>
							</ul>
						</div>
					</div>

				</section>
				<section className='grid'>
					<div class="grid__container container">
						<div className='grid__column1'>
							<div className='grid__row1 row1'>
								<div class="row1__cars cars">
									<div class="cars__banner ibg">
										<img src={gridCar}></img>
									</div>
									<div class="cars__content">
										<div class="cars__category">Cars</div>
										<div class="cars__title">The joy of replicas: A $ 5 million car for $ 50,000</div>
										<div class="cars__body">The 31-year-old self-taught engineer and former amateur racer spends his days building artful recreations of one of most iconic sports cars</div>
										<div class="cars__image _ibg">
											<img src={recommendBanner} />
										</div>
									</div>
									<div class="cars__footer footer">
										<div class="footer__user user">
											<div class="user__icon">
												<img src={gridUser1} />
											</div>
											<div class="user__name">Jessica Miller:</div>
										</div>
										<div class="footer__txt">
											Even as the ride-hailing service’s future remem…
										</div>
										<div class="footer__comments comments" >
											<div class="comments__icon">
												<img src={play} />
											</div>
											<div class="comments__qty">
												342
											</div>
										</div>
									</div>
								</div>
								<div class="row1__popular popular">
									<div class="popular__banner ibg">
										<img src={gridPopular} />
									</div>
									<div class="popular__contetn">
										<span class="popular__button">Popular</span>
										<div class="popular__category">Art & Design</div>
										<div class="popular__body">Invisible ink: the weird world of tattoo removal – in pictures</div>
										<div class="popular__user user">
											<div class="user__icon">
												<img src={gridUser1} />
											</div>
											<div class="user__data">
												<div class="user__name">
													By Sarah Jenkins
												</div>
												<div class="user_info user__job">
													Sept 26
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='grid__row2 row2'>
								<div class="row2__big big">
									<div class="big__img ibg">
										<img src={gridCat} />
									</div>
									<div class="big__body">
										200+ Doomed Cats Saved From Euthanization
									</div>
								</div>
								<div class="row2__smalls">
									<div class="row2__small small">
										<div class="small__title">Is Coffee Bad for Bones?</div>
										<div class="small__body">Coffee drinkers may excrete more calcium, but it doesn’t appear to weaken bones</div>
										<div class="small__date">Oct 15</div>
									</div>
									<div class="row2__small small">
										<div class="small__title">What We Manufacture</div>
										<div class="small__body">A global history of the factory and the modern world that all should read</div>
										<div class="small__date">Oct 14</div>
									</div>
									<div class="row2__small small">
										<div class="small__title">It’s a Stressful World</div>
										<div class="small__body">Can a cruise skeptic enjoy four days on the seas with his family and a bunch of princesses?</div>
										<div class="small__date">Oct 14</div>
									</div>
									<div class="row2__small small">
										<div class="small__title">A Treat for Lemon Lovers</div>
										<div class="small__body">This tangerine, ginger and chocolate tart has verve, depth and a hint of spice</div>
										<div class="small__date">Oct 13</div>
									</div>
								</div>
							</div>
						</div>
						<div className='grid__column2 columns'>
							<div class="columns__title">Columns</div>
							<ul class="columns__list">
								<li class="columns__item item">
									<div class="item__body">
										Architecture is the thoughtful making of space
									</div>
									<div class="item__user user">
										<div class="user__icon ibg">
											<img src={gridUser2}></img>
										</div>
										<div class="user__data">
											<div class="user__name">By Benjamin Turner</div>
											<div class="user__job">Traveler</div>
										</div>
									</div>
								</li>
								<li class="columns__item item">
									<div class="item__body">
										Architecture is the thoughtful making of space
									</div>
									<div class="item__user user">
										<div class="user__icon ibg">
											<img src={gridUser3}></img>
										</div>
										<div class="user__data">
											<div class="user__name">By Benjamin Turner</div>
											<div class="user__job">Traveler</div>
										</div>
									</div>
								</li>
								<li class="columns__item item">
									<div class="item__body">
										Architecture is the thoughtful making of space
									</div>
									<div class="item__user user">
										<div class="user__icon ibg">
											<img src={gridUser4}></img>
										</div>
										<div class="user__data">
											<div class="user__name">By Benjamin Turner</div>
											<div class="user__job">Traveler</div>
										</div>
									</div>
								</li>
							</ul>
							<div class="columns__footer">Read more</div>
						</div>
					</div>
				</section>
				<section className='plants'>
					<div class="plants__banner ibg">
						<img src={plantsBg} />
					</div>
					<div class="plants__container container">
						<div class="plants__content">
							<div class="plants__title">The Big Bloom or «How Flowering
								Plants Changed the World»</div>
							<div class="plants__button read">
								<div class="read__txt">Read more</div>
								<div class="read__icon"></div>
							</div>
						</div>
					</div>

				</section>
				<section className='categories'>
					<div class="categories__coontainer container">
						<ul class="categories__list">
							<li class="categories__item item">
								<div class="categories__img ibg">
									<img src={categoriesItem1} />
								</div>
								<div class="categories__data">
									<div class="categories__category">
										Flights
									</div>
									<div class="categories__title">Passengers Suffer as Crowded Field Puts Pressure on Europe’s Airlines</div>
									<div class="categories__body">Weaker carriers have fallen by the wayside amid fierce competition, while others have been hit by bad luck. The result: thousands of canceled flights.</div>
									<div class="categories__date">Oct 7</div>

								</div>
							</li>
							<li class="categories__item item">
								<div class="categories__img ibg">
									<img src={categoriesItem2} />
								</div>
								<div class="categories__data">
									<div class="categories__category">
										Flights
									</div>
									<div class="categories__title">Passengers Suffer as Crowded Field Puts Pressure on Europe’s Airlines</div>
									<div class="categories__body">Weaker carriers have fallen by the wayside amid fierce competition, while others have been hit by bad luck. The result: thousands of canceled flights.</div>
									<div class="categories__date">Oct 7</div>

								</div>
							</li>
							<li class="categories__item item">
								<div class="categories__img ibg">
									<img src={categoriesItem3} />
								</div>
								<div class="categories__data">
									<div class="categories__category">
										Flights
									</div>
									<div class="categories__title">Passengers Suffer as Crowded Field Puts Pressure on Europe’s Airlines</div>
									<div class="categories__body">Weaker carriers have fallen by the wayside amid fierce competition, while others have been hit by bad luck. The result: thousands of canceled flights.</div>
									<div class="categories__date">Oct 7</div>

								</div>
							</li>
							<li class="categories__item item">
								<div class="categories__img ibg">
									<img src={categoriesItem4} />
								</div>
								<div class="categories__data">
									<div class="categories__category">
										Flights
									</div>
									<div class="categories__title">Passengers Suffer as Crowded Field Puts Pressure on Europe’s Airlines</div>
									<div class="categories__body">Weaker carriers have fallen by the wayside amid fierce competition, while others have been hit by bad luck. The result: thousands of canceled flights.</div>
									<div class="categories__date">Oct 7</div>

								</div>
							</li>
							<li class="categories__item item">
								<div class="categories__img ibg">
									<img src={categoriesItem5} />
								</div>
								<div class="categories__data">
									<div class="categories__category">
										Flights
									</div>
									<div class="categories__title">Passengers Suffer as Crowded Field Puts Pressure on Europe’s Airlines</div>
									<div class="categories__body">Weaker carriers have fallen by the wayside amid fierce competition, while others have been hit by bad luck. The result: thousands of canceled flights.</div>
									<div class="categories__date">Oct 7</div>

								</div>
							</li>
							<li class="categories__item item">
								<div class="categories__img ibg">
									<img src={categoriesItem6} />
								</div>
								<div class="categories__data">
									<div class="categories__category">
										Flights
									</div>
									<div class="categories__title">Passengers Suffer as Crowded Field Puts Pressure on Europe’s Airlines</div>
									<div class="categories__body">Weaker carriers have fallen by the wayside amid fierce competition, while others have been hit by bad luck. The result: thousands of canceled flights.</div>
									<div class="categories__date">Oct 7</div>

								</div>
							</li>
						</ul>
						<nav className='categories__navbar navbar'>
							<div class="navbar__title">
								Recommended for you
							</div>
							<ul class="navbar__list">
								<li class="navbar__item user">
									<div class="user__icon ibg">
										<img src={categoriesUser1} />
									</div>
									<div class="user__data">
										<div class="user__name">Office Meetings Leave the Office</div>
										<div class="user__job">15 minuts ago</div>
									</div>
								</li>
								<li class="navbar__item user">
									<div class="user__icon ibg">
										<img src={categoriesUser2} />
									</div>
									<div class="user__data">
										<div class="user__name">Office Meetings Leave the Office</div>
										<div class="user__job">15 minuts ago</div>
									</div>
								</li>
								<li class="navbar__item user">
									<div class="user__icon ibg">
										<img src={categoriesUser3} />
									</div>
									<div class="user__data">
										<div class="user__name">Office Meetings Leave the Office</div>
										<div class="user__job">15 minuts ago</div>
									</div>
								</li>
								<li class="navbar__item user">
									<div class="user__icon ibg">
										<img src={categoriesUser4} />
									</div>
									<div class="user__data">
										<div class="user__name">Office Meetings Leave the Office</div>
										<div class="user__job">15 minuts ago</div>
									</div>
								</li>
								<li class="navbar__item user">
									<div class="user__icon ibg">
										<img src={categoriesUser5} />
									</div>
									<div class="user__data">
										<div class="user__name">Office Meetings Leave the Office</div>
										<div class="user__job">15 minuts ago</div>
									</div>
								</li>
								<li class="navbar__item user">
									<div class="user__icon ibg">
										<img src={categoriesUser6} />
									</div>
									<div class="user__data">
										<div class="user__name">Office Meetings Leave the Office</div>
										<div class="user__job">15 minuts ago</div>
									</div>
								</li>
								<li class="navbar__item user">
									<div class="user__icon ibg">
										<img src={categoriesUser7} />
									</div>
									<div class="user__data">
										<div class="user__name">Office Meetings Leave the Office</div>
										<div class="user__job">15 minuts ago</div>
									</div>
								</li>
							</ul>
							<div class="navbar__footer">
								Read more
							</div>
						</nav>
					</div>
				</section>
				<section className='hot'>
					<div class="hot__container container">
						<div class="hot__column1 column1">
							<div class="column1__banner ibg">
								<img src={hot1} />
							</div>
							<div class="column1__content">
								<div class="column1__user user">
									<div class="user__icon _ibg">
										<img src={user1} />
									</div>
									<div class="user__data">
										<div class="user__name">By Sarah Jenkins</div>
										<div class="user__job">Photographer</div>
									</div>
								</div>
								<div class="column1__title">
									Readers' Choice winners: Your wine country favorites
								</div>
								<span class="column1__button button">
									<div class="button__icon _ibg">
										<img crs={play} />
									</div>
									<div class="button__txt">Watch photos</div>
									<div class="button__qty">26</div>
								</span>
							</div>
						</div>
						<div class="hot__column2">
							<div class="hot__row1 row1">
								<div class="row1__circle" />
								<div class="row1__image _ibg">
									<img src={image2} />
								</div>
								<div class="row1__body">
									<div class="row1__category">Careers</div>
									<div class="row1__title">Had a Job Interview but No Callback? Here’s What to Do</div>
									<div class="row1__txt">Try to understand the culture of the company where you want to work and be authentic in your interview, experts emphasize</div>
									<span class="row1__button">
										<span class="button__txt">Read more</span>
										<span class="button__icon _ibg">
											<img crs={Instagram} />
										</span>
									</span>
								</div>
							</div>
							<div class="hot__row2">
								<div class="row2__small small">
									<div class="small__title">Is Coffee Bad for Bones?</div>
									<div class="small__body">Coffee drinkers may excrete more calcium, but it doesn’t appear to weaken bones</div>
									<div class="small__date">Oct 15</div>
								</div>
								<div class="row2__small small">
									<div class="small__title">What We Manufacture</div>
									<div class="small__body">A global history of the factory and the modern world that all should read</div>
									<div class="small__date">Oct 14</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className='subscribe'>
					<div class="subscribe__container container">
						<div class="subscribe__title">Subscribe now and get 20% off</div>
						<div class="subscribe__block">
							<input class="subscribe__input" placeholder='Enter your email'></input>
							<div class="subscribe__button button">
								<div className='button__txt'>Subscribe</div>
							</div>
						</div>
					</div>
				</section>
				<section className='menu'>
					<div class="menu__container container">
						<div class="menu__column">
							<div class="menu__label">	Moneys</div>
							<ul class="menu__list">
								<li class="menu__item">
									<a class="menu__link">Markets</a>
								</li>
								<li class="menu__item">
									<a class="menu__link">Personal Finance</a>
								</li>
								<li class="menu__item">
									<a class="menu__link">Retirement</a>
								</li>
								<li class="menu__item">
									<a class="menu__link">Careers</a>
								</li>
							</ul>
						</div>
						<div class="menu__column">
							<div class="menu__label">	News</div>
							<ul class="menu__list">
								<li class="menu__item">
									<a class="menu__link">Nation</a>
								</li>
								<li class="menu__item">
									<a class="menu__link">World</a>
								</li>
								<li class="menu__item">
									<a class="menu__link">Politics</a>
								</li>
								<li class="menu__item">
									<a class="menu__link">Solar Eclipse</a>
								</li>
							</ul>

						</div>
						<div class="menu__column">
							<div class="menu__label">Arts</div>
							<ul class="menu__list">
								<li class="menu__item">
									<a class="menu__link">Art & Design</a>
								</li>
								<li class="menu__item">
									<a class="menu__link">Movies</a>
								</li>
								<li class="menu__item">
									<a class="menu__link">People</a>
								</li>
								<li class="menu__item">
									<a class="menu__link">Video: Arts</a>
								</li>
								<li class="menu__item">
									<a class="menu__link">Theater</a>
								</li>
							</ul>
						</div>
						<div class="menu__column">
							<div class="menu__label">Travel</div>
							<ul class="menu__list">
								<li class="menu__item">
									<a class="menu__link">Destinations</a>
								</li>
								<li class="menu__item">
									<a class="menu__link">Flights</a>
								</li>
								<li class="menu__item">
									<a class="menu__link">Business Trave</a>
								</li>
							</ul>
						</div>
						<div class="menu__column">
							<div class="menu__label">Sports</div>
							<ul class="menu__list">
								<li class="menu__item">
									<a class="menu__link">Motor Sports</a>
								</li>
								<li class="menu__item">
									<a class="menu__link">Volleyball</a>
								</li>
								<li class="menu__item">
									<a class="menu__link">MMA</a>
								</li>
								<li class="menu__item">
									<a class="menu__link">Cycling</a>
								</li>
							</ul>
						</div>
						<div class="menu__column">
							<div class="menu__label">	Tech</div>
							<ul class="menu__list">
								<li class="menu__item">
									<a class="menu__link">Tech</a>
								</li>
								<li class="menu__item">
									<a class="menu__link">Tech Reviews</a>
								</li>
								<li class="menu__item">
									<a class="menu__link">Talking Tech</a>
								</li>
							</ul>
						</div>
					</div>
				</section>
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
