import React, { useState, useEffect } from "react";
import { Button, Table, Popconfirm } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { withRouter } from "react-router-dom";
import axios from 'axios';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from "redux/connectProps"
const AddClient = React.lazy(() => import("./Components/addClient"));

let changeType = null;
const Content = (props) => {

  useEffect(() => {
    axios.get(`https://www.reddit.com/r/reactjs.json`)
      .then(res => {
        const persons = res.data.data.children;
        let clients = []
        clients = persons.map((person, key) => {
          return {
            kind: person.kind,
            key: key,
            name: person.data.author,
            age: person.data.author_flair_type,
            address: person.data.author_fullname,
          }
        })
        props.addAllClients(clients);

      }).catch(er => {
        console.log(er)
      })
    // eslint-disable-next-line
  }, [])


  const history = useHistory();
  const [visible, changeVisible] = useState(false)

  const [client, changeCli] = useState({})
  const headTable = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => <Button onClick={() => infoObj(record)} type='link'> {text}</Button>
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
          <Button type="link" onClick={() => editClient(record)} ><EditOutlined /></Button>
          <Popconfirm
            title="Are you sure delete this task?"
            onConfirm={deleteClient}
            okText="Yes"
            cancelText="No"
          >
            <Button type="link" onClick={() => beforeDelete(record)} className="text-danger"><DeleteOutlined /></Button>
          </Popconfirm>


        </span >
      )
    }]


  const infoObj = (record) => {
    props.changeClient(record)
    history.push('/anketa')

  }
  const deleteClient = () => {
    addClient();
  }

  const beforeDelete = (record) => {
    changeType = "delete";
    changeCli(record)
  }



  const editClient = (record) => {
    changeType = "change"
    changeVisible(true);
    changeCli(record)
  }
  const addClient = () => {
    console.log(client.key)
    console.log(changeType)
    if (changeType === "add")
      props.addUser(client);
    else if (changeType === "change")
      props.changeUser(client);
    else if (changeType === "delete") {
      props.deleteUser(client.key);

    }
    changeCli({})
    changeVisible(false);
  }
  const openAddClientForm = () => {
    changeType = "add";
    changeVisible(true);
  }


  let inputChange = (event) => {
    let temp = { ...client };
    const key = event.target['name']
    const value = event.target['value']
    temp[key] = value;
    changeCli(temp)

  }


  return (
    <div className="m-2">

      <Button className=" mb-2" type="primary float-right" onClick={openAddClientForm}>ADD</Button>

      <Table dataSource={props.getClients} columns={headTable} scroll={{ y: 300 }} />
      <AddClient client={client} visible={visible} inputChange={inputChange} addClient={addClient} />
    </div>
  );
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Content));
