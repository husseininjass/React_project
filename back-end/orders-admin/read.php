<?php
include '../db.php';

$sql = "SELECT
    B.BillID,
    B.OrderDate,
    B.TotalPrice,
    U.FirstName AS UserName,
    U.Email,
    P.ProductName AS ProductName
FROM
    bill AS B
JOIN
    users AS U ON B.UserID = U.UserID
JOIN
    products AS P ON B.product_id = P.ProductID;
";

$data = $pdo->query($sql);

if ($data) {
    $result = $data->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($result);
    }
else {
    // Handle query error
    echo "Error executing the query.";
}
?>
