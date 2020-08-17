<!DOCTYPE html>
<html lang="en">

<?php
  if (!empty($_GET)) {
       $editID = $_GET["user"];
       $users= file("usersmtg.csv");
       $user = $users[$_GET["user"]];
       $user = str_getcsv($user,",");
       $fName = $user[0];
       $lName = $user[1];
       $email = $user[2];
  }else{
    $fName = "";
    $lName = "";
    $email = "";
  }

      ?>
          

<?php
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
      
  }
?>

  <head>
    <title>MarketToGo Edit User</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    
  </head>
  
      <div class="container">
          <header>
          <div class="row">
              
              <div class="col-sm-12">
                <nav class="navbar navbar-default">
                    <div class="container-fluid">
                      <div class="navbar-header">
                        <a class="navbar-brand" href="../index.html">MarketToGo</a>
                      </div>
                      <ul class="nav navbar-nav">
                        
                        <li><a href="backendPL.html">Products</a></li>
                        <li  class="active"><a href="users.php">Users</a></li>
                        <li><a href="OrderList.html">Orders</a></li>
                      </ul>
                    </div>
                  </nav>
              </div>
              
          </div>
          </header>
          <body onload="getUser()">
            <p id="demo"></p>
              <div class="row">
                  <div class="col-sm-3"></div>
                  <div class="col-sm-6">
                      <h2>Edit User</h2>
                      <br/>
                      <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
                        <div class="form-group">
                          <label for="firstName">First Name:</label>
                          
                            <input type="text" class="form-control" id="firstName" name="fName" value="<?php echo $fName;?>">
                            
                        </div>
                        <div class="form-group">
                            <label for="lastName">Last Name:</label>
                            
                           <input type="text" class="form-control" id="lastName" name="lName" value="<?php echo $lName;?>">
                            
                        </div>
                        <div class="form-group">
                            <label for="email">Email:</label>
                            <input type="email" class="form-control" id="email" name="email" value="<?php echo $email;?>">
                            
                        </div>
                        
                    
                        <button type="submit" class="btn btn-default" name="editID" value="<?php echo $editID;?>">Save</button>
                        <button type="submit" class="btn btn-danger" >Delete</button>
                      </form>
                    </div>
                  <div class="col-sm-3"></div>
              </div>
          </body>
      </div>
      <?php
// define variables and set to empty values


if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nameErr = $lNameErr = $emailErr ="";
$fName = $lName = $email ="";
  if (empty($_POST["fName"])) {
    $fNameErr = "Name is required";
  } else {
    $fName = test_input($_POST["fName"]);
    // check if name only contains letters and whitespace
    if (!preg_match("/^[a-zA-Z ]*$/",$fName)) {
      $fNameErr = "Only letters and white space allowed";
    }
  }
  if (empty($_POST["lName"])) {
    $lNameErr = "Name is required";
  } else {
    $lName = test_input($_POST["lName"]);
    // check if name only contains letters and whitespace
    if (!preg_match("/^[a-zA-Z ]*$/",$lName)) {
      $lNameErr = "Only letters and white space allowed";
    }
  }
  
  if (empty($_POST["email"])) {
    $emailErr = "Email is required";
  } else {
    $email = test_input($_POST["email"]);
    // check if e-mail address is well-formed
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $emailErr = "Invalid email format";
    }
  }
    
  
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>
<?php
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
          $editID = $_POST["editID"];
          $fp = fopen("usersmtg.csv","r");
          $count=0;
          while(! feof($fp))
                  {
                    $users[$count]=fgetcsv($fp);
                    $count++;
                  }
          $user = $users[$editID];
          $user[0] = $fName;
          $user[1] = $lName;
          $user[2] = $email;
          $users[$editID] = $user;
          $fp=fopen("usersmtg.csv","w");
          foreach($users as $line){
            if($line){
            fputcsv($fp,$line);
          }
          }
          fclose($fp);
          header("location: users.php");
  }
?>
</html>