import React from 'react';
import MetaTags from 'react-meta-tags';

const about = () => {
	return (
		<div className="About">
			<MetaTags>
	            <title>About us Bild Studio</title>
	            <meta name="description" content="About us Bild" />
	            <meta property="og:title" content="Bild About Page" />
          	</MetaTags>
			<h1>About</h1>
		</div>
	)
}

export default about;