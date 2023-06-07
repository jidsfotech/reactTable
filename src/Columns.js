import React from 'react'

export const columns = [
                {
                    Header: "Date",
                    accessor: "date",
                    Cell: (cellProps) => {
                        let date = new Date(cellProps.value).toDateString();
                        let day = date.split(' ')[2];
                        let month = date.split(' ')[1]
                        if (day.charAt(0) === '0') {
                            day = day.charAt(1)
                        };
                        return day + " " + month;
                    },
                    filter: "dateFilter",
                  },

                {
                    Header: "Name",
                    accessor: "user",
                },

                {
                    Header: "Amount",
                    accessor: "amount",
                },

                {
                    Header: "Category",
                    accessor: "category",
                    filter: 'equals',
                },

                {
                    Header: "Status",
                    accessor: "status",
                    Cell: (cellProps) => {
                        switch (cellProps.value) {
                            case "pending":
                                return (<div className="transaction-status" style={{ background: "yellow" }}></div>);
                            case "faild":
                                return (<div className="transaction-status" style={{ background: "red" }}></div>);
                            case "successful":
                                return (<div className="transaction-status" style={{ background: "green" }}></div>);
                            default:
                                return (<div className="transaction-status" style={{ background: "yellow" }}></div>);
                        }
                    }
                }
            ]