import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import CustomIFrame from '../customiframe';

const cycle = (index, len) => (index + 1) % len;

export default ({ node }) => {
  const [index, setIndex] = useState(0);

  const handleClick = () => {
    setIndex(cycle(index, node.photos.length));
  };

  useEffect(() => {
    document.getElementById(node.photos[index].id).style.display = "block";

    return () => {
      document.getElementById(node.photos[index].id).style.display = "none";
    };
  }, [index, node.photos]);
	
  return (
    <div className={styles.roulette}>
			<div className={styles.shoot}> 
				<button className={styles.button} onClick={() => handleClick()}>
					{node.photos.map((photo) => (
						<img
							alt={`${node.name} shoot`}
							className={styles.photo}
							key={photo.id}
							src={photo.file.url}
							id={photo.id}
						/>
					))}
				</button>
				{node.nameLink ? <a href={node.nameLink} rel="noreferrer" target='_blank'><p className={styles.shootName}>{node.name}</p></a> : <p className={styles.shootName}>{node.name}</p>}
			</div>
			<div className={styles.embeddedMusic}>
				{node.embedLinks && node.embedLinks.map(src => <CustomIFrame key={src} src={src} />)}
    	</div>
		</div>
  );
};
