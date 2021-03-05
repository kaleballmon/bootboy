import React from 'react';
import Layout from '../components/layout';
import MovingPicture from '../components/movingpicture';

export default ({ data }) => {
	console.log(data);
  return (
		<Layout>
			{ data.contentfulVisionBoard.pictures.map(e => <MovingPicture key={e.id} src={e.file.url}i />)}
		</Layout>
	)
}

export const query = graphql`query MyQuery {
  contentfulVisionBoard {
    pictures {
      file {
        fileName
        url
      }
      id
    }
  }
}
`
