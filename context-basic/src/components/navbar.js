import React from 'react'
import PropTypes from "prop-types"
 function Navbar(props) {
    return (
        <div>
            <h3>{props.title}</h3>
        </div>
    )
}
// with prop types requirement can control
Navbar.propTypes={
    title: PropTypes.string.isRequired

}
Navbar.defaultProps={
    title:"Default App"
}
export default Navbar