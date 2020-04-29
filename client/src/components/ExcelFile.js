import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import '../index.css';
import { Row, Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import { ScheduledCommand } from './ScheduledCommand'
import { ProgressHolder } from './ProgressHolder'

const { Panel } = Collapse;

export class ExcelFile extends React.Component
{
    render() {
        
        return (
            <div>

                <ProgressHolder current_step={1}/>

                <Collapse
                    bordered={false}
                    defaultActiveKey={['1']}
                    expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                    className="site-collapse-custom-collapse">

                    <Panel header="This is panel header 1" key="1" className="site-collapse-custom-panel">
                        <Row>
                            <ScheduledCommand/>
                            <ScheduledCommand/>
                        </Row>
                    </Panel>

                </Collapse>

            </div>
            
        );
        
    }

}

