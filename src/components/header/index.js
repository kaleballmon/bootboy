import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import styles from './styles.module.css';
const pathMap = {
	'/': 'portfolio',
	'/info': 'info',
	'/vision': 'vision',
}

export default () => {
	useEffect(() => {
		document.getElementById(
			pathMap[window.location.pathname]
			).style.color = 'black';
		document.getElementById(
			pathMap[window.location.pathname]
			).style.textDecoration = 'underline';
	});

	return (
		<header className={ styles.header }>
			<span>
				Howard White
				{' '}
				+1(225)603-6585
				{' '}
				<a className={ styles.link } href='mailto:bootboyphotos@gmail.com'>
					bootboyphotos@gmail.com
				</a>
			</span>
			<br />
			<span>
				<Link id='portfolio' className={ styles.link } to='/'>Portfolio</Link>
				{', '}
				<Link id='info' className={ styles.link } to='/info'>Info</Link>
				{', '}
				<a className={ styles.link } href='http://www.instagran.com/bootboyphotos/' target='_blank' rel="noreferrer">Instagram</a>
				{', '}
				<Link id='vision' className={ styles.link } to='/vision'>Vision Board</Link>
			</span>
		</header>
	)
}
