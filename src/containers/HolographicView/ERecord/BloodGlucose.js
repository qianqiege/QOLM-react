import React from "react";
import { Table, Row, Col } from "antd";
import PatientRecord from 'models/PatientRecord';
import Chart from "./Chart";

const columns = [{
  key:'0',
  title: '监测日期',
  dataIndex: 'updated_at',
}, {
  key:'1',
  title: '血糖值',
  dataIndex: 'value',
}, {
  key:'2',
  title: '是否异常',
  dataIndex: 'status1',
}];


class BloodGlucose extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data=PatientRecord.bloodGlu.data.slice();
    console.log(data);
    return ( <div style={{}}>
      <Row>
        <Col xs={{ span: 12}}>
          <Table bordered
              columns={columns}
              dataSource={data}
               />
            
        </Col>
        <Col xs={{ span: 12}}>
          <Chart />
        </Col>
      </Row>
    </div>        
    );
  }
}
export default BloodGlucose;