import React, { useEffect, useState } from "react";
import TransactionsLogTable from "./TransactionsLogTable";
import { columns } from "./Columns";
import axios from "axios";
import "./App.css"
import log from './db'
const App = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        console.log(log)
        setData(log)
    }, [])

    return (
        <div className="main">
            <div className="title"> Transactions Logs Table Built with <span style={{ color: 'white' }}>react-table</span> Library</div>
            < TransactionsLogTable columns={columns} data={data} />
        </div>
    )
}

export default App; 