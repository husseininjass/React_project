import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import EditButton from "../UI-elements/edit";
import DeleteButton from "../UI-elements/delete";
import Admin from "../main";

function OrdersAdmin() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost/React_project/back-end/orders-admin/read.php")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <> 
        <Admin />
      <div className="content">
        <div className="container-lg">
          <div className="table-responsive">
            <div className="table-wrapper">
              <div className="table-title">
                <div className="row">
                  <div className="col-sm-8">
                    <h2> Orders <b> Details</b></h2>
                  </div>
                </div>
              </div>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map(item => (
                    <tr key={item.BillID}>
                      <td>{item.BillID}</td>
                      <td>{item.UserName}</td>
                      <td>{item.Email}</td>
                      <td>{item.ProductName}</td>
                      <td>{item.TotalPrice}</td>
                      <td>
                        <Link to={`/admin/orders/delete/${item.BillID}`}>
                          <DeleteButton>Cancel</DeleteButton>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrdersAdmin;
