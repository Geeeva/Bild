import React from 'react';

const tab = (props) => {
    return (
        <div  className={ this.props.isActive ? 'navigation--active': '' }>
    		<p>{props.title}</p>
    		<p>{props.text}</p>

        </div>
    )
}

export default tab;