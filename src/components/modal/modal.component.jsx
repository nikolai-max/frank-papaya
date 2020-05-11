import React, { Component } from 'react'

import { Modal } from 'antd';

class AntModal extends Component {
  state = { visible: true };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <Modal
          title="Oh no, Frank-Papaya is stuck"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          closable={false}
          centered={true}
          okText={'Play Frank-Papaya'}
        >
          <p>Of course, Frank is stuck in Asia because of COVID-19. He can´t take a plane back, and have to stay in the waterfall with the german girls. He has one wish from you, make an nice song that he can play to the germans to get some good vibes.</p>

          <p>You have 30 sec, and Frank will dance along and give you points if he feel the wibes.</p>
        </Modal>
      </div>
    );
  }
}

export default AntModal