import React, { PureComponent } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Home from './Components/homePresentation';
import { addUser, changeUser, deleteUser, addAllClients } from "localRedux/clients"
import { getUsers } from "./../../../API/api"
let changeType = null;
class Content extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            client: {},
            visible: false
        }
    }
    componentDidMount() {
        console.log('componentDidMount');
        getUsers().then((response) => {
            if (response.isSuccess) {
                this.props.addAllClients(response.data);
            }
            else alert(response.data);
        })

    }
    //  infoObj = (record) => {
    //     this.props.changeClient(record)
    //     this.props.history.push(`/anketa/${record.key}`);

    // }

    render() {
        const infoObj = (record) => {
            this.props.changeClient(record)
            this.props.history.push(`/anketa/${record.key}`);

        }

        const deleteClient = () => {
            addClient();
        }

        const beforeDelete = (record) => {
            changeType = "delete";
            this.setState({ client: record })
        }

        const editClient = (record) => {
            changeType = "change"
            this.setState({ visible: true })
            this.setState({ client: record })
        }
        const addClient = () => {
            if (changeType === "add")
                this.props.addUser(this.state.client);
            else if (changeType === "change")
                this.props.changeUser(this.state.client);
            else if (changeType === "delete") {
                this.props.deleteUser(this.state.client.key);

            }
            this.setState({ client: {} })
            this.setState({ visible: false })
        }
        const openAddClientForm = () => {
            changeType = "add";
            this.setState({ visible: true })

        }


        const inputChange = (event) => {
            let temp = { ...this.state.client };
            const key = event.target['name']
            const value = event.target['value']
            temp[key] = value;
            this.setState({ client: temp })

        }


        const { client, visible } = this.state;
        const props = {
            visible, client,
            getClients: this.props.getClients,
            openAddClientForm,
            inputChange,
            addClient,
            editClient,
            deleteClient,
            infoObj,
            beforeDelete
        }

        return (
            <Home {...props} />
        )
    };
};



export const mapStateToProps = ({ getClients }) => ({ getClients })
const mapDispatchToProps = {
    addUser,
    changeUser,
    deleteUser,
    addAllClients
}
export default (connect(mapStateToProps, mapDispatchToProps)(withRouter(Content)));
