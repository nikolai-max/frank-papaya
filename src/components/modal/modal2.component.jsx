import React from 'react'

import { Modal, Button } from 'antd';
import { connect } from 'react-redux'

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
    let message
    if(this.props.currentScore > 100) {
      message = 'Frank enjoyed your vibes! What a show. The Germans are all over Frank now.'
    } else if (this.props.currentScore > 1000) {
      message = 'Frank is blown away! God damn you got groowe. The Germans are all over Frank now.'
    } else {
      message = 'You gotta groowe better than that! Frank is trying to follow along, but just cant feel the wibe'
    }

    return (
      <div>
        <Modal
          visible={visible}
          closable={false}
          centered={true}
          footer={[
            <div style={{textAlign: 'center'}}>
              <Button key="back" type="primary" onClick={this.handleRestart}>
                Play again
              </Button>
              <Button key="submit" type="primary" onClick={this.handleOk}>
                Submit score
              </Button>
            </div>
          ]}
        >
            <div style={{fontSize: '65px', textAlign: 'center', marginBottom: '25px', color: '#621E50'}}>{this.props.currentScore} points!</div>
            <p>{message}</p>
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>({
    onHandleRestart: ()=>init(dispatch)
  })

  const mapStateToProps = state => ({
    currentScore: state.score.currentScore,
})
  
  export default connect(mapStateToProps, mapDispatchToProps)(AntModal2)