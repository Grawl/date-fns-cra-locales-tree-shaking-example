import React from "react";
import './button.sass'
class Button extends React.Component {
    render() {
        const { isSecondary } = this.props
        return (
            <button
                className={`button ${isSecondary ? 'is-secondary' : ''}`}
            >
                {this.props.children}
            </button>
        );
    }
}
export default Button
