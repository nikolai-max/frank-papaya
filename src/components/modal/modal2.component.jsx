import React from 'react'

import { Modal, Button } from 'antd';
import { connect } from 'react-redux'

import { init }  from '../../functions/init.function'
import Frank from './frank-papaya.png'

class AntModal2 extends React.Component {
  state = {
    visible: true,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
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
      message = 'Frank is blown away! God damn, you got the groove. The Germans are all over Frank now.'
    } else if (this.props.currentScore > 4000) {
      message = 'WHOHOWOAHAAA, your breaking the scores! Frank is holding on to his German babes and are afraid that you will take them with your grooves'
    } else {
      message = "You gotta groove better than that! Frank is trying to follow along but just can't feel the vibe."
    }

    return (
      <div>
        <Modal
          visible={visible}
          closable={false}
          centered={true}
          footer={[
            <div style={{textAlign: 'center', marginBottom: '10px'}}>
              <Button key="back" type="primary" onClick={this.handleRestart}>
                Play again
              </Button>
            </div>
          ]}
        >
            <img src={Frank} alt="Frank-papaya avatar" width="80px" style={{float: 'left'}}></img>
            <div style={{fontSize: '45px', textAlign: 'center', marginBottom: '25px', color: '#621E50'}}>{this.props.currentScore} points!</div>
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