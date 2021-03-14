import React from 'react';
import styles from './styles.module.css'

export default ({src}) => (
				<iframe 
					className={styles.embedded}
					allow="encrypted-media *;" 
					width="99%" 
					height="300rem" 
					frameBorder="0" 
					src={src}>
				</iframe>
)
