import Admin from "../main";
import axios from "axios";
import { useState, useEffect } from "react";
import './dash.css';

function DashBoard() {
  const [data, setData] = useState([]);
  const [cata, setcata] = useState([]);
  const [users, setuse] = useState([]);
  const [ord, setord] = useState([]);

  useEffect(() => {
    axios.get("http://localhost/React_project/back-end/admin/get_admins.php")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  useEffect(() => {
    axios.get("http://localhost/React_project/back-end/category-admin/read.php")
      .then((response) => {
        setcata(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  useEffect(() => {
    axios.get("http://localhost/React_project/back-end/users-admin/read.php")
      .then((response) => {
        setuse(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  useEffect(() => {
    axios.get("http://localhost/React_project/back-end/orders-admin/read.php")
      .then((response) => {
        setord(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);  
  

  return (
        <>
        <Admin />
        <div className="content_dash">
            <div className="Dash_Cards">
            <div className="card">
                <h1>Number of Admins</h1>
                <p>{data.length}</p>
            </div>
            
            <div className="card">
                <h1>Number of Categories</h1>
                <p>{cata.length}</p>
            </div>
            </div>
            
            <div className="Dash_Cards">
            <div className="card">
                <h1>Number of Users</h1>
                <p>{users.length}</p>
            </div>
            
            <div className="card">
                <h1>Number of Orders</h1>
                <p>{ord.length}</p>
            </div>
            </div>
        </div>
        </>
  );
}

export default DashBoard;
