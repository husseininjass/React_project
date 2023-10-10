import React, { useEffect } from "react";
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
function DeleteOrder(){
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const url = `http://localhost/React_project/back-end/orders-admin/delete.php?id=${id}`;

        axios.delete(url)
            .then(response => {
                console.log("User deleted:", response.data);
                navigate('/admin/orders');
            })
            .catch(error => {
                console.error("Error:", error);
            });
    }, [id, navigate]);
    return(
        <>

        </>
    )
}
export default DeleteOrder;