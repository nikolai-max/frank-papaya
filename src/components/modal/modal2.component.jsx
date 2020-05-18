import React from 'react'

import { Modal, Button } from 'antd';
import { connect } from 'react-redux'

import Score from '../score/points/points.component'
import { init }  from '../../functions/init.function'

class AntModal2 extends React.Component {
  state = {
    visible: true,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({ visible: false });
  };

  handleRestart = () => {
    this.setState({ visible: false });
    this.props.onHandleRestart()
  };

  render() {
    const { visible } = this.state;

    return (
      <div>
        <Modal
          visible={visible}
          title="Great work!!"
          footer={[
            <Button key="back" type="primary" onClick={this.handleRestart}>
              Play again
            </Button>,
            <Button key="submit" type="primary" onClick={this.handleOk}>
              Submit score
            </Button>,
            <Button key="download" type="primary" onClick={this.handleOk}>
            Download track
          </Button>,
          ]}
        >
            <Score></Score>
            <p>Frank enjoyed your vibes! What a show. The Germans have really enjoyed themself.</p>
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>({
    onHandleRestart: ()=>init(dispatch)
  })
  
  export default connect(null, mapDispatchToProps)(AntModal2)