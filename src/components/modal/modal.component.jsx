import React, { Component } from 'react'

import { Modal, Button } from 'antd';
import { connect } from 'react-redux'

import { init }  from '../../functions/init.function'
import Frank from './frank-papaya.png'


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
    this.props.onHandleOk()
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
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          closable={false}
          centered={true}
          okText={'Play Frank-Papaya'}
          footer={[
            <div style={{textAlign: 'center', marginBottom: '10px'}}>
              <Button key="back" type="primary" onClick={this.handleOk}>
                Play Frank-Papaya
              </Button>
            </div>
          ]}
        >
          <img src={Frank} alt="Frank-papaya avatar" width="150px" style={{float: 'right'}}></img>
          <p>Of course, Frank is stuck in Asia because of COVID-19. He can´t take a plane back, and have to stay in the waterfall with the german girls. He has one wish from you, make an nice song that he can play to the germans to get some good vibes.</p>

          <p>You have 50 sec, and Frank will dance along and give you points if he feel the wibes.</p>
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>({
  onHandleOk: ()=>init(dispatch)
})

export default connect(null, mapDispatchToProps)(AntModal)