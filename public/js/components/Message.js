import React from 'react'

class Message extends React.Component {

  render() {
    return (
      <li className="message-item"
          data-id={this.props.id}>

        <h3>{this.props.userName}</h3>
        <p>{this.props.text}</p>

        <a href="#" onClick={this.props.onClick} className="small-button delete-item icon-cross"></a>
      </li>
    )
  }

}

export default Message;