import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import '../index.css';
import { Row, Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import { ScheduledCommand } from './ScheduledCommand'
import { ProgressHolder } from './ProgressHolder'

const { Panel } = Collapse;

const drop_down_style = {backgroundColor : "white", borderRadius: 2, marginBotoom: 24, border: 0, overflow: "hidden"}

export class ExcelFile extends React.Component
{
    render() {
        return (
            <div style={{marginTop: 50}}>
                <ProgressHolder current_step={1}/>

                <Collapse
                    bordered={false}
                    defaultActiveKey={['1']}
                    expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                    className="site-collapse-custom-collapse"
                    style={drop_down_style}>

                    <Panel header="This is panel header 1" key="1" style={drop_down_style}>
                        <Row>
                            <ScheduledCommand/>
                            <ScheduledCommand/>
                            <ScheduledCommand/>
                            <ScheduledCommand/>
                            <ScheduledCommand/>
                        </Row>
                    </Panel>

                </Collapse>

            </div>
            
        );
        
    }

}

