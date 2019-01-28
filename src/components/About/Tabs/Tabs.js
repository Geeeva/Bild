/*import React from 'react';
import Tab from './Tab';

const tabs = (props) => {
    return (
        <div>
        	{props.data.map((article, index) => {
        		return(
					<Tab
						key={article.id}
						text={article.body}
						title={article.title}
						position={index}
						click={()=>this.props.clicked(index)}
					/>
				)
        	})}
        </div>
    )
}

export default tabs;*/

import React, { Component } from 'react';
import Tab from './Tab';

class Tabs extends Component {
  	constructor(props) {
    	super(props);

	    this.state = {
	    };
  	}

	render() {
	  	return (
		  	<div>
		  		

		  	</div>
	  	);
	}
}

export default Tabs;