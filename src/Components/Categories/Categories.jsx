import React from 'react';
import './Categories.scss'
import categoriesItem1 from '../../images/categories/item/image1.jpg'
import categoriesItem2 from '../../images/categories/item/Image2.jpg'
import categoriesItem3 from '../../images/categories/item/Image3.jpg'
import categoriesItem4 from '../../images/categories/item/Image4.jpg'
import categoriesItem5 from '../../images/categories/item/Image5.jpg'
import categoriesItem6 from '../../images/categories/item/Image6.jpg'
import categoriesUser1 from '../../images/categories/recomend/image1.png'
import categoriesUser2 from '../../images/categories/recomend/image2.png'
import categoriesUser3 from '../../images/categories/recomend/image3.png'
import categoriesUser4 from '../../images/categories/recomend/image4.png'
import categoriesUser5 from '../../images/categories/recomend/image5.png'
import categoriesUser6 from '../../images/categories/recomend/image6.png'
import categoriesUser7 from '../../images/categories/recomend/image7.png'

const categories = [
	{
		img: categoriesItem1,
		category: 'Flights',
		title: 'Passengers Suffer as Crowded Field Puts Pressure on Europe’s Airlines',
		body: 'Weaker carriers have fallen by the wayside amid fierce competition, while others have been hit by bad luck. The result: thousands of canceled flights.',
		date: 7
	},
	{
		img: categoriesItem3,
		category: 'Flights',
		title: 'Passengers Suffer as Crowded Field Puts Pressure on Europe’s Airlines',
		body: 'Weaker carriers have fallen by the wayside amid fierce competition, while others have been hit by bad luck. The result: thousands of canceled flights.',
		date: 7
	},
	{
		img: categoriesItem2,
		category: 'Flights',
		title: 'Passengers Suffer as Crowded Field Puts Pressure on Europe’s Airlines',
		body: 'Weaker carriers have fallen by the wayside amid fierce competition, while others have been hit by bad luck. The result: thousands of canceled flights.',
		date: 7
	},
	{
		img: categoriesItem4,
		category: 'Flights',
		title: 'Passengers Suffer as Crowded Field Puts Pressure on Europe’s Airlines',
		body: 'Weaker carriers have fallen by the wayside amid fierce competition, while others have been hit by bad luck. The result: thousands of canceled flights.',
		date: 7
	},
	{
		img: categoriesItem5,
		category: 'Flights',
		title: 'Passengers Suffer as Crowded Field Puts Pressure on Europe’s Airlines',
		body: 'Weaker carriers have fallen by the wayside amid fierce competition, while others have been hit by bad luck. The result: thousands of canceled flights.',
		date: 7
	},
	{
		img: categoriesItem6,
		category: 'Flights',
		title: 'Passengers Suffer as Crowded Field Puts Pressure on Europe’s Airlines',
		body: 'Weaker carriers have fallen by the wayside amid fierce competition, while others have been hit by bad luck. The result: thousands of canceled flights.',
		date: 7
	}

]
const categoriesElem = categories.map((category) => {
	return <li class="categories__item item">
		<div class="categories__img ibg">
			<img src={category.img} />
		</div>
		<div class="categories__data">
			<div class="categories__category">
				{category.category}
			</div>
			<div class="categories__title">{category.title}</div>
			<div class="categories__body">{category.body}</div>
			<div class="user_info">
				<div className='date'>Sept {category.date}</div>
				<div className='comment'>342</div>
				<div className='like'>83</div>
			</div>
		</div>
	</li>
})
const recommends = [
	{
		img: categoriesUser1,
		title: 'Office Meetings Leave the Office',
		time: '15'
	},
	{
		img: categoriesUser2,
		title: 'Office Meetings Leave the Office',
		time: '15'
	},
	{
		img: categoriesUser3,
		title: 'Office Meetings Leave the Office',
		time: '15'
	},
	{
		img: categoriesUser4,
		title: 'Office Meetings Leave the Office',
		time: '15'
	},
	{
		img: categoriesUser5,
		title: 'Office Meetings Leave the Office',
		time: '15'
	},
	{
		img: categoriesUser6,
		title: 'Office Meetings Leave the Office',
		time: '15'
	},
	{
		img: categoriesUser7,
		title: 'Office Meetings Leave the Office',
		time: '15'
	}
]
const recommendsElem = recommends.map(recommend => {
	return (
		<li class="navbar__item user">
			<div class="user__icon ibg">
				<img src={recommend.img} />
			</div>
			<div class="user__data">
				<div class="user__name">{recommend.title}</div>
				<div class="user__job">{recommend.time} minuts ago</div>
			</div>
		</li>

	)
})
export default function Categories() {
	return <section className='categories'>
		<div class="categories__coontainer container">
			<ul class="categories__list">
				{categoriesElem}
			</ul>
			<nav className='categories__navbar navbar'>
				<div class="navbar__title">
					Recommended for you
				</div>
				<ul class="navbar__list">
					{recommendsElem}
				</ul>
				<div class="navbar__footer">
					Read more
				</div>
			</nav>
		</div>
	</section>;
}
