import React from 'react';
import { Button, Table, Col, Row, Popconfirm } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
const AddClient = React.lazy(() => import("./addClient"));

const Home = (props) => {
    const headTable = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text, record) => <Button onClick={() => props.infoObj(record)} type='link'> {text}</Button>
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'kind',
            dataIndex: 'kind',
            key: 'kind',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'action',
            dataIndex: 'action',
            key: 'action',
            render: (text, record) => (
                <span>
                    <Button type="link" onClick={() => props.editClient(record)} ><EditOutlined /></Button>
                    <Popconfirm
                        title="Are you sure delete this task?"
                        onConfirm={props.deleteClient}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button type="link" onClick={() => props.beforeDelete(record)} className="text-danger"><DeleteOutlined /></Button>
                    </Popconfirm>
                </span >
            )
        }]
    return (
        <Row className="m-2">
            <Col span={24}>
                <Button className="mb-2 float-right" type="primary " onClick={props.openAddClientForm}>ADD</Button>

            </Col>
            <Col span={24}>
                <Table dataSource={props.getClients} columns={headTable} scroll={{ y: 300 }} />
                <AddClient client={props.client} visible={props.visible} inputChange={props.inputChange} addClient={props.addClient} />
            </Col>
        </Row>
    )
};

export default Home;