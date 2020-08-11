// import React, { useEffect, useState } from "react"
// import axios from 'axios';
// import { Table } from "antd"

// const headTable = [{
//     title: 'name',
//     dataIndex: "name",
//     key: 'id',
// },
// {
//     title: 'time',
//     dataIndex: 'time',
//     key: 'time',
// }]

// const url = "https://api.telegram.org/bot1066925173:AAGxZJECGLreVU3CsGQoIJRvMrxKHXBnicM/"
// const Tgbot = (props) => {
//     let [tableSoure, changeSoure] = useState([])
//     let [count, changeCount] = useState(0)
//     let arr = [];
//     useEffect(() => {
//         axios.get(url + 'getUpdates')
//             .then(res => {
//                 for (let rez of res.data.result) {
//                     console.log("rez", rez)
//                     arr.push({
//                         text: rez.message.text,
//                         name: rez.message.chat.first_name + " " + rez.message.chat.last_name,
//                         time: new Date(rez.message.date).toLocaleString(),
//                         id: rez.message.message_id,
//                         chat_id: rez.message.chat.id
//                     })
//                     console.log("arr", arr)

//                 }
//                 changeSoure(arr);
//                 changeCount(res.data.result.length)
//                 console.log("res.data.result.lenth", res.data.result.length)
//                 console.log("count", count)
//                 if (res.data.result.length > count) sendMessage(arr[arr.length - 1].chat_id, arr[arr.length - 1].name);
//             }).catch(er => {
//                 console.log(er)
//             })
//     }, [])

//     const sendMessage = (chat_id, name) => {
//         console.log("chat_id", chat_id)
//         axios.get(url + 'sendMessage?chat_id=' + chat_id + "&text=Привет " + name + "!")
//             .then(res => {
//                 console.log("arr", res.data)
//             }).catch(er => {
//                 console.log(er)
//             })
//     }
//     return (
//         <div>
//             <Table dataSource={tableSoure} columns={headTable} scroll={{ y: 300 }} />
//         </div>
//     )
// }
// export default Tgbot;