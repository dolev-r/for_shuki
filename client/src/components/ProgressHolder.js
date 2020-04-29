import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import '../index.css';
import { Steps } from 'antd';

const { Step } = Steps;

export class ProgressHolder extends React.Component
{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Steps current={this.props.current_step}>
                <Step title="Waiting To be Sent" description="This is a description." />
                <Step title="Sent" subTitle="Left 00:00:08" description="This is a description." />
                <Step title="Recieved" description="This is a description." />
            </Steps>
        );
    }

}

