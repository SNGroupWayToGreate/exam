import React from 'react';
import './Recommend.scss'
import recommendBanner from '../../images/recommend/recommend_banner.jpg'
import play from '../../images/recommend/play.png'
import recommendUser from '../../images/recommend/user.png'

export default function Recommend() {

	const recommends = [
		{
			category: 'Food',
			text: 'For Chicken-Fried Steak, Too Much Is Just Enough'
		},
		{
			category: 'Cars',
			text: 'Storm Has Car Dealers Doing Swift Business'
		},
		{
			category: 'Movies',
			text: 'War Is Hell? In New Military Dramas, It’s One-Dimensiona'
		},
		{
			category: 'NFL',
			text: '11 surprising stat rankings for active NFL players'
		},
		{
			category: 'Tech Reviews',
			text: 'The bookcases you can buy online and assemble yourself'
		}
	]
	const recommendsElem = recommends.map(recommend => {
		return (
			<li class="navbar__item item">
				<div class="item__title">{recommend.category}</div>
				<div class="item__body">
					<span class="item__txt">{recommend.text}</span>
					<span className='item_button'>
						<div class="item__icon ibg">
							<img src={play} />
						</div>
					</span>
				</div>
			</li>
		)
	})

	return (
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
						{recommendsElem}
					</ul>
				</div>
			</div>

		</section>
	);
}
