import React from 'react';
import styles from './styles.module.css';

export default () => {
	return (
		<header className={ styles.header }>
			<span>
				Howard White
				{' '}
				+1(225)603-6585
				{' '}
				<a className={ styles.blueLink } href='mailto:bootboyphotos@gmail.com'>
					bootboyphotos@gmail.com
				</a>
			</span>
			<br />
			<span className={ styles.topRow }>
				Portfolio
				{', '}
				Info
				{', '}
				<a className={ styles.blueLink } href='http://www.instagran.com/bootboyphotos/'>Instagram</a>
			</span>
		</header>
	)
}
