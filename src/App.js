import React, { useEffect, useState } from "react";
import TransactionsLogTable from "./TransactionsLogTable";
import { columns } from "./Columns";
import axios from "axios";
import "./App.css"

const App = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`https://my-json-server.typicode.com/jidsfotech/jsonserver/transactionLogs`)
            .then((res) => {
                setData(res.data);
            }).catch((err) => {
                window.alert(err)
            })
    }
        , [])

    return (
        <div>
            <h1> Transactions Logs Table Created with <span style={{color:'red'}}>react-table</span> Library</h1>
            < TransactionsLogTable columns={columns} data={data} />
        </div>
    )
}

export default App; 