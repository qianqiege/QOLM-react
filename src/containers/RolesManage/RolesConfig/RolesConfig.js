// 角色配置页面
// import cookie from 'js-cookie';
import React from 'react';
//import ReactDOM from 'react-dom';
import { Table, } from 'antd';
import { observer } from 'mobx-react';
import AddRole from './AddRole';
import DeleteRole from './DeleteRole';
import EditRole from './EditRole';
//import $ from "jquery";
// import UserList from './UserList';
import RoleConfig from 'models/rolesConfig';
// import UserRoleConfig from 'models/UserRoleConfig';
import '../CustomTable.scss';

@observer
class CustomTable extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [{
      title: '编号',
      dataIndex: 'id',
      width: '30%',
      key:'0',
    }, {
      title: '角色名称',
      dataIndex: 'name',
      key:'1',
    }, {
      title: '操作',
      dataIndex: 'operation',
      key:'2',
      render: (text, record) => {
        return (
          <span className="inline">
            <EditRole store={record} />
            <DeleteRole store={record} />
          </span>   
        );
      }
    }];
  }
 
  componentDidMount() {
    RoleConfig.getRolesList();
  }

  render() {
    const columns = this.columns;
    const dataSource = RoleConfig.rolesLists.data.toJS();
    return (
      <div className="role-block">
      <h3 className="roleconfig">角色配置</h3>
        <AddRole />
        <Table 
        bordered 
        dataSource={dataSource} 
        columns={columns} 
        className="table-role"
        rowKey={(record) => record.id}
        pagination={false}
        />
      </div>
    );
  }
}

export default CustomTable;
