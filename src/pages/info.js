import React from 'react';
import Layout from '../components/layout';
import showdown from 'showdown';
const converter = new showdown.Converter();
function createMarkup(m) {
  return {__html: m};
}
export default ({ data }) => {
  return (
		<Layout>
			<div 
				dangerouslySetInnerHTML={
					createMarkup(converter.makeHtml(data.contentfulInfoContentTextNode.content))
				} 
				style={{fontSize: '17px'}}
			/>
		</Layout>
	)
}

export const query = graphql`
	query {
		contentfulInfoContentTextNode {
			content
		}
	}
`
