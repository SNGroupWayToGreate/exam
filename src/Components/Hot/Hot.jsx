import React from 'react';
import './Hot.scss'
import bg3 from '../../images/recommend/recommend_banner.jpg'
import bg1 from '../../images/hot/image1.jpg'
import image2 from '../../images/hot/image2.png'
import user from '../../images/hot/user1.png'
import user1 from '../../images/grid/user1.png'
import user3 from '../../images/grid/user3.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SwiperCore, {
	Pagination,
	Autoplay,
	EffectCards
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination, Autoplay, EffectCards]);


export default function Hot() {
	const cards = [
		{
			image: bg1,
			user: user,
			title: 'Readers Choice winners: Your wine country favorites',
			watches: 26,
			name: 'Sarah Jenkins',
			job: 'Photographer'
		},
		{
			image: bg3,
			user: user1,
			title: 'Readers Choice winners: Your wine country favorites',
			watches: 30,
			name: 'Jesica Millner',
			job: 'Traveler'
		},
		{
			image: bg1,
			user: user3,
			title: 'Readers Choice winners: Your wine country favorites',
			watches: 20,
			name: 'Jesica Millner',
			job: 'Traveler'
		}
	]
	const coruselElem = cards.map((card, index) => {
		return (
			<SwiperSlide>
				<div class="column1__banner ibg">
					<img src={card.image} />
				</div>
				<div className="column1__card">
					<div class="column1__content">
						<div class="column1__user user">
							<div class="user__icon _ibg">
								<img src={card.user} />
							</div>
							<div class="user__data">
								<div class="user__name">By {card.name} </div>
								<div class="user__job">{card.job}</div>
							</div>
						</div>
						<div class="column1__title">
							Readers' Choice winners: Your wine country favorites
						</div>
						<span class="column1__button button">
							<div class="button__icon _ibg">
								<img crs='' />
							</div>
							<div class="button__txt">Watch photos</div>
							<div class="button__qty">{card.watches}</div>
						</span>
					</div>
				</div>
			</SwiperSlide>
		)
	})

	return (
		<section className='hot'>
			<div class="hot__container container">
				<div class="hot__column1 column1">
					<Swiper
						autoplay={{
							"delay": 2500,
							"disableOnInteraction": false
						}}
						effect={'cards'}
						grabCursor={true}
						loop={{ infinity: true }}
						className='mySwiper'
						//direction={'vertical'}
						modules={[Navigation, Pagination, Scrollbar, A11y]}
						slidesPerView={1}
						//navigation
						pagination={{ clickable: true }}
						//scrollbar={{ draggable: true }}
						onSwiper={(swiper) => console.log(swiper)}
						onSlideChange={() => console.log('slide change')}
					>
						{coruselElem}
					</Swiper>
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
									<img crs='' />
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
		</section >
	)
}
