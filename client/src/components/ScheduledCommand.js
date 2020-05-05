import React from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import { Collapse, Switch, Card, Popover } from 'antd';


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
    loading: false,
  };

  render() {
    const { loading } = this.state;

    return (
      <div>
        <Card style={{ width: 300, marginRight: 100, marginBottom: 100}} loading={loading}>
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