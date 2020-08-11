import React from 'react';
import { Modal, Input } from "antd"

const AddClient = (props) => {
    return (
        <Modal
            title="Basic Modal"
            visible={props.visible}
            onOk={props.addClient}
        >
            <div onChange={props.inputChange}>
                <p><Input name="name" value={props.client.name} /></p>
                <p><Input name="address" value={props.client.address} /></p>
                <p><Input name="age" value={props.client.age} /></p>
            </div>
        </Modal>
    )
}

export default AddClient;
