import React from 'react';
import { connect } from 'react-redux';
import Message from './Message';
import { mapStateToProps, mapDispatchToProps } from '../connectToStore';

class Messages extends React.Component {

  constructor() {
    super();

    this.state = {
      messageName: '',
      messageText: '',
    }
  }

  componentWillMount() {
    this.props.fetchMessages();
  }

  handleName(e) {
    this.setState({
      messageName: e.target.value,
    });
  }

  handleMessage(e) {
    this.setState({
      messageText: e.target.value,
    });
  }

  handleMessageSubmit() {
    this.props.addMessage(
      Date.now(),
      this.state.messageName,
      this.state.messageText
    );
  }

  removeMessage(e) {
    this.props.removeMessage(e.target.closest('li').dataset.id);
  }

  render() {
    return (
      <div>
        <h1 className="title">Messages</h1>
        <ul>
        {
          this.props.messages.map((el) => {
            return <Message onClick={this.removeMessage.bind(this)} key={el.id}
                                                                    id={el.id}
                                                                    userName={el.userName}
                                                                    text={el.text} />
          })
        }
        </ul>
        <div id="addMessage">
          <input onChange={this.handleName.bind(this)} type="text" placeholder="Name" className="name" />
          <textarea onChange={this.handleMessage.bind(this)} className="text" placeholder="Text ..."></textarea>
          <button onClick={this.handleMessageSubmit.bind(this)}>add new Message</button>
        </div>
      </div>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Messages);