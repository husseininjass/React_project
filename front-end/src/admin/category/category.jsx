import Admin from "../main";
import Button from "../UI-elements/button";
import { useState , useEffect } from "react";
import axios from "axios";
import { useNavigate , Link } from "react-router-dom";
import DeleteButton from "../UI-elements/delete"
import EditButton from "../UI-elements/edit";
import './category.css';
function AdminCategory (){
    const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [input , updInput] = useState({});
    const Show = () =>{
        document.querySelector('#admins').classList.toggle('show')
    }
  useEffect(() => {
    axios.get("http://localhost/React_project/back-end/admin/get_admins.php")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const inputHandler = (e) =>{
    const name  = e.target.name;
    const value = e.target.value;
    updInput(values => ({...values , [name]: value}));
  }
  const addHandler = (e) => {
    // e.preventDefault();
    
    
    axios.post('http://localhost/React_project/back-end/admin/create.php', input)
      .then((r) => {
        console.log(r.data);
        navigate('/admin');
      })
  };
    return(
        <>
            <Admin />
            <div className="content">
            <Button className="add_category" onClick={Show}>Add Category</Button>
            <form className="admins category" id="admins" onSubmit={addHandler}>
                <label>Fname</label>
                <input type="text" name="Fname" onChange={inputHandler}/>
                <label>Lname</label>
                <input type="text" name="Lname" onChange={inputHandler}/>
                <label>password</label>
                <input type="password" name="password" onChange={inputHandler}/>
                <label>email</label>
                <input type="email" name="email" onChange={inputHandler}/>
                <input type="submit" />
            </form>
            <div id="maindiv">

                <div className="container-lg">
                    <div className="table-responsive">
                        <div className="table-wrapper">
                            <div className="table-title">
                                <div className="row">
                                    <div className="col-sm-8"><h2> Categories  <b> Details</b></h2></div>
                                </div>
                            </div>
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>FName</th>
                                        <th>Lname</th>
                                        <th>email</th>
                                        <th>password</th>
                                        <th>action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map(item => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.Fname}</td>
                                            <td>{item.Lname}</td>
                                            <td>{item.email}</td>
                                            <td>{item.password}</td>
                                            <td>
                                            
                                            <Link to={`/admin/edit/${item.id}`}>  <EditButton>Edit</EditButton>
                                                </Link> 
                                                
                                            
                                            <Link to={`/admin/delete/${item.id}`}> <DeleteButton>Delete</DeleteButton></Link>
                                            
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}
export default AdminCategory;