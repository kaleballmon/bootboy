require("dotenv").config({ path: __dirname + "/.env" }) // delete when deploying

module.exports = {
  siteMetadata: {
    title: 'Boot Boy',
  },
  plugins: [
		{
			resolve: 'gatsby-source-contentful',
			options: {
				spaceId: process.env.SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
			},
		}
	],
};
