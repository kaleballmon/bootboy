import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

const cycle = (index, len) => (index + 1) % len;


export default ({ node }) => {
	const [index, setIndex] = useState(0);

	const handleClick = () => {
		setIndex(cycle(index, node.photos.length));
	}

	useEffect(() => {
		console.log(node.photos[index].id);
		document.getElementById(
			node.photos[index].id
			).style.display = 'block';

		return () => {
			document.getElementById(
				node.photos[index].id
				).style.display = 'none';
		}
	}, [index])
	
	return (
		<div className={styles.roulette}>
			<div onClick={() => handleClick()}>
				{	
					node.photos.map(photo => (
						<img 
							alt={`${node.name} shoot`}
							className={styles.photo}
							key={photo.file.filename} 
							src={photo.file.url} 
							id={photo.id}
						/>
					)
				)}
			</div>
			<p className={styles.shootName}>{node.name}</p>
		</div>
	)
}
