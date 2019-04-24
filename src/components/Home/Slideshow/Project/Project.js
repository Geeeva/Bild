import React from 'react';

const project = props => {
	return (
		<div>
            <h3 className="DetailsTitle">{props.title}</h3>
            <p className="DetailsTxt">{props.project}</p>
        </div>
	)
}

export default project;