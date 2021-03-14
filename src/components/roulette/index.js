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
	
	console.log(node.embdedLinks)
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
				<p className={styles.shootName}>{node.name}</p>
			</div>
			<div className={styles.embeddedMusic}>
				<CustomIFrame src="https://embed.music.apple.com/us/playlist/desean/pl.u-d2b0lzBFMoDy1B9" />
				<CustomIFrame src="https://open.spotify.com/embed/artist/64VvC9AGQYcX1uiaDInCQm" />
				<CustomIFrame src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1223345128&color=%2365f512&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />
    	</div>
		</div>
  );
};
