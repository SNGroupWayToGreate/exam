import React from 'react';
import './Menu.scss'

export default function Menu() {
	return (
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
	);
}
