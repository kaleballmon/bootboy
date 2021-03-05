import React from 'react';
import Header from '../header';
import styles from './styles.module.css';

export default ({ children }) => {
	return (
		<div className={styles.body}>
			<Header />
			{ children }
		</div>
	)
}
