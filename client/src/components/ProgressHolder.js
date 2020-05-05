import React from 'react';
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
                <Step title="Waiting To be Sent" description="Uploaded at (time)" />
                <Step title="Sent" subTitle="" description="there are x commands" />
                <Step title="Recieving" description="x out of y files were recieved" />
            </Steps>
        );
    }
}

