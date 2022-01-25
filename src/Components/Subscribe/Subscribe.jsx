import React from 'react';
import './Subscribe.scss'

export default function Subscribe() {
	return (
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
	);
}
