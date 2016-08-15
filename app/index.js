/**
 * Dependencies
 */
import React from 'react'
import { render } from 'react-dom'

/**
 * We are writing a javascript app here, but we actually need this app to be able
 * to work directly with our HTML page, so therefor we are going to "mount" our
 * application inside of our HTML.  So in this case, in our HTML page we are creating
 * an HTML section called "root", and we are telling our javascript to look for that
 * element:  <div id="root"></div>
 *
 * What we should expect here is that **inside** of the "root" tag, we will see our
 * HTML element that we are creating here:  <div>Hello World</div>
 */
 
let App = React.createClass({
	render: function(){
		return (<div>Hello World</div>);
	}
})

React.render(
	<App />,
	document.getElementById('root')
)
