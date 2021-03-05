import React from 'react';
import Layout from '../components/layout';
import Roulette from '../components/roulette';

export default ({ data }) => {
	const shoots = data.allContentfulShoot.edges;
	return (
		<Layout>
			{ shoots.map(node => <Roulette key={node.node.id} node={node.node} />) }
		</Layout>
	)
}

export const query = graphql`
	query {
		allContentfulShoot(sort: {fields: date, order: DESC}) {
			edges {
				node {
					id
					name
					photos {
						id
						file {
							fileName
							url
							details {
								image {
									height
									width
								}
							}
						}
					}
				}
			}
		}
	}
`
