import React from 'react';
import { observer } from 'mobx-react';
import { Icon,Modal, Button } from 'antd';


@observer
class DeleteRole extends React.Component {
  state = { visible: false }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  }
  render() {
    return (
      <div>
        <Button type="primary" style={{height:35,fontSize:15}}  onClick={this.showModal}>删除</Button>
        <Modal
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >

          <Icon type="exclamation-circle-o" style={{fontSize:100,marginLeft:190, color:'orange'}}/>
          <p style={{fontSize:26,marginLeft:180,marginTop:20}}>您确定吗？</p>
          <p style={{fontSize:18,marginLeft:160}}>您选择的角色将被删除！</p>
        </Modal>
      </div>
    );
  }
}


export default DeleteRole;
