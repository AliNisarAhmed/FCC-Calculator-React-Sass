import React from 'react'; 

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.clickHandler = this.clickHandler.bind(this);
  }
  
  render() {
    return (
      <button
        className="btn"
        id={this.props.children}
        onClick={this.clickHandler}
      >
        {this.props.value}
      </button>
    );
  }

  clickHandler() {
    this.props.handleClick(this.props.value);
  }
}


export default Button;