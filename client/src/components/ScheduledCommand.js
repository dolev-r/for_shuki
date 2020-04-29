import React from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import { Collapse, Switch, Card, Popover } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

const files = [
    {"file_name": "asd", "file_size": 25, "full_path": "C:\\asd"},
    {"file_name": "dsa", "file_size": 75, "full_path": "C:\\dsa"}
  ]
  
const data = {
    "computer_name": "moses",
    "amount_of_files": 2,
    "total_size": 100,
    "scheduling": "",
    "Files": files
  }


const { Meta } = Card;

export class ScheduledCommand extends React.Component {
  state = {
    loading: true,
  };

  onChange = checked => {
    this.setState({ loading: !checked });
  };



  render() {
    const { loading } = this.state;

    return (
      <div>
        <Switch checked={!loading} onChange={this.onChange} />

          <Card style={{ width: 300, marginTop: 16 }} loading={loading}>
            <Meta
              title="Card title"
              description="This is the description"
            />
            
            <Collapse accordion>
              <Panel header="This is panel header 1" key="1">

              </Panel>
            </Collapse>

          </Card>
     
      </div>
    );
  }
}