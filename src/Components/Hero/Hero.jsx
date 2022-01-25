import React from 'react';
import './Hero.scss'
import heroImage from '../../images/hero/image.png'
import heroImage1 from '../../images/hero/image1.png'
import heroImage2 from '../../images/hero/image2.png'
import heroImage3 from '../../images/hero/image3.png'


const links = [
	{ link: 'News' },
	{ link: 'Opinion' },
	{ link: 'Science' },
	{ link: 'Life' },
	{ link: 'Travel' },
	{ link: 'Moneys' },
	{ link: 'Art and Design' },
	{ link: 'Sports' },
	{ link: 'People' },
	{ link: 'Health' },
	{ link: 'Education' },
]
const linksElem = links.map(link => {
	return (
		<li class="navbar__item">
			<a href='#' class="navbar__link">{link.link}</a>
		</li>
	)
})
const news = [
	{
		title: '25 Songs That Tell Us Where Music Is Going',
		img: heroImage
	},
	{
		title: 'These Ancient Assassins Eat Their Own Kind',
		img: heroImage1
	},
	{
		title: 'How Do You Teach People to Love Difficult Music',
		img: heroImage2
	},
	{
		title: 'International Soccer’s Man of Mystery',
		img: heroImage3
	}

]
const newsElem = news.map(news => {
	return (
		<li class="news__item">
			<div class="news__title">{news.title}</div>
			<div class="news__image _ibg">
				<img src={news.img}></img>
			</div>
		</li>

	)
})

export default function Hero() {
	return (
		<section className='hero' >
			<div class="hero__container container">

				<nav class="hero__navbar navbar">
					<ul class="navbar__list">
						{linksElem}
					</ul>
				</nav>
				<div className='hero__news news'>
					<div class="news__container">
						<ul class="news__list">
							{newsElem}
						</ul>
					</div>

				</div>
			</div>
		</section>
	);
}
