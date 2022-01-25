import React from 'react';
import './Grid.scss'
import gridCar from '../../images/grid/car.jpg'
import gridCat from '../../images/grid/cat.jpg'
import gridPopular from '../../images/grid/popular.jpg'
import gridUser1 from '../../images/grid/user1.png'
import gridUser2 from '../../images/grid/user2.png'
import gridUser3 from '../../images/grid/user3.png'
import gridUser4 from '../../images/grid/user4.png'

export default function Grid() {
	const columns = [
		{
			title: 'Architecture is the thoughtful making of space',
			img: gridUser2,
			name: 'Benjamin Turner',
			job: 'Traveler',

		}, {
			title: 'Architecture is the thoughtful making of space',
			img: gridUser3,
			name: 'Benjamin Turner',
			job: 'Traveler',

		}, {
			title: 'Architecture is the thoughtful making of space',
			img: gridUser4,
			name: 'Benjamin Turner',
			job: 'Traveler',

		}
	]
	const cplumnsElem = columns.map((column) => {
		return (
			<li class="columns__item item">
				<div class="item__body">
					{column.title}
				</div>
				<div class="item__user user">
					<div class="user__icon ibg">
						<img src={column.img}></img>
					</div>
					<div class="user__data">
						<div class="user__name">By {column.name}</div>
						<div class="user__job">{column.job}</div>
					</div>
				</div>
			</li>
		)
	})
	return (
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
											<div className='date'>Sept 26</div>
											<div className='comment'>26</div>
											<div className='like'>26</div>
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
						{cplumnsElem}
					</ul>
					<div class="columns__footer">Read more</div>
				</div>
			</div>
		</section>
	)
}
