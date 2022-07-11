import React from "react"
 
class Box extends React.Component {
  render() {
    return (
			<div className="box col-sm-j3 col-6">
        <span className="material-icons" style={{fontSize: 100, color: this.props.color}}>{this.props.icon}</span>
        <p>{this.props.value}</p>
        <p>{this.props.unit}</p>
      </div>
		)
  }
}

export default Box