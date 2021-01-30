<?php
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    $hostname="localhost";
    $username="cosuldei_romeokiss";
    $password="@Alabala007@";
    $dbname="cosuldei_resume";

    // Create connection
$conn = new mysqli($hostname, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
$sql = "INSERT INTO resume (firstName, lastName, email, phone, message)
VALUES ('$firstName', '$lastName', '$email', '$phone', '$message')";
if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
    header( "refresh:3;url=index.html" ); //this line used to redirect to the index.php page after 3 seconds
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
$conn->close();
?>