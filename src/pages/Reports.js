import React, { useState, useEffect } from "react";
import DataTable from "../components/DataTable";
import "./../styles/Reports.scss";

const columns = [
  {
    Header: "Image",
    accessor: "image",
    Cell: ({ cell: { value } }) => <img src={value} alt="User" style={{ width: "30px", height: "30px", borderRadius: "50%" }} />,
  },
  {
    Header: "First Name",
    accessor: "firstName",
  },
  {
    Header: "Last Name",
    accessor: "lastName",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Phone",
    accessor: "phone",
  },
];

const Reports = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/users");
        const result = await response.json();
        const formattedData = result.users.map((user) => ({
          firstName: user?.firstName,
          lastName: user?.lastName,
          email: user?.email,
          phone: user?.phone,
          image: user?.image,
        }));
        setData(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="reports">
      <h1 className="header">User Reports</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default Reports;
