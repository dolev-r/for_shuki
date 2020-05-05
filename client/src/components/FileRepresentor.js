import React from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import { Table, Tag } from 'antd';

const columns = [
    {
      title: 'File Path',
      dataIndex: 'file_path',
      key: 'name',
    },
    {
      title: 'Size',
      dataIndex: 'size',
      key: 'size',
    },
    {
      title: 'Recieved',
      dataIndex: 'recv',
      key: 'recv',
      render: recv => (
        <span>
          {recv.map(tag => {
            let color = tag;
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </span> 
        )
    },
  ];

const data = [
    {
        key: '1',
        file_path: 'John Brown',
        size: 32,
        recv: ['error'],
    },
    {
        key: '2',
        file_path: 'John Brown',
        size: 32,
        recv: ['processing'],
    },
    {
        key: '3',
        file_path: 'John Brown',
        size: 32,
        recv: ['success'],
    },
];


export class FileRepresentor extends React.Component
{
    render() {
        return (
            <Table
              columns={columns}
              dataSource={data}
              pagination={false}
            />
        );
    }
}

