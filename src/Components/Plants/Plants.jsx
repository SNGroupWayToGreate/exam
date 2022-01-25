import React from 'react';
import plantsBg from '../../images/plants/plantsBg.jpg'
import './Plants.scss'


export default function Plants() {
	return (
		<section className='plants'>
			<div class="plants__banner ibg">
				<img src={plantsBg} />
			</div>
			<div class="plants__container container">
				<div class="plants__content">
					<div class="plants__title">
						The Big Bloom or «How Flowering
						Plants Changed the World»
					</div>
					<div class="plants__button button">
						<div class="button__txt">
							Read more
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
