import React from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import { Row, Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import { ScheduledCommand } from './ScheduledCommand'
import { ProgressHolder } from './ProgressHolder'
import { FileRepresentor } from './FileRepresentor'

const { Panel } = Collapse;

const drop_down_style = {backgroundColor : "white", borderRadius: 2, marginBotoom: 24, border: 0, overflow: "hidden"}

export class ExcelFile extends React.Component
{
    render() {
        return (
            <div style={{marginTop: 50}}>
                <Row>
                    <h1> 
                        excel file name
                    </h1>
                    <p>
                        excel file description
                    </p>
                </Row>
                <ProgressHolder current_step={2}/>

                <Collapse
                    bordered={false}
                    // defaultActiveKey={['1']} // should be opened initialy
                    expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                    style={drop_down_style}>

                    <Panel header="Files" key="1" style={drop_down_style}>
                        <FileRepresentor/>
                    </Panel>

                </Collapse>


                <Collapse
                    bordered={false}
                    // defaultActiveKey={['1']}
                    expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                    style={drop_down_style}>

                    <Panel header="Commands" key="1" style={drop_down_style}>
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

