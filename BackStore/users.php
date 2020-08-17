<!DOCTYPE html>
<html lang="en">
  <head>
    <title>MarketToGo Users</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    
  </head>
  <body onload="fillTable()">
      <div class="container">
          <div class="row">
              
              <div class="col-sm-12">
                <nav class="navbar navbar-default">
                    <div class="container-fluid">
                      <div class="navbar-header">
                        <a class="navbar-brand" href="../index.html">MarketToGo</a>
                      </div>
                      <ul class="nav navbar-nav">
                        
                        <li><a href="backendPL.html">Products</a></li>
                        <li  class="active"><a href="users.html">Users</a></li>
                        <li><a href="OrderList.html">Orders</a></li>
                      </ul>
                    </div>
                  </nav>
              </div>
              
          </div>
          <div class="row">
            <div class="col-sm-2"></div>
            <div class="col-sm-3"><h2 align="center">Users</h2><br/></div>
            <div class="col-sm-7"></div>
          </div>
          <div class="row">
            <div class="col-sm-1"></div>
            <div class="col-sm-3">
              <input type="text" class="form-control" placeholder="Filter Users" id="myInput" onkeyup="filterTable()">
                
              </br>
                <button type="button" class="btn btn-primary" onclick="mailList()">
                  <span class="glyphicon glyphicon-send"></span> Add selected users to mail list 
                </button>
            </div>
            
            <div class="col-sm-7">
          
            <table class="table table-striped table-bordered" id="myTable" >
                <tr>
                    <th>Select</th>
                    <th>User Name
                      <button type="button" class="btn btn-default btn-sm" onclick="sortTable()">
                        <span class="glyphicon glyphicon-sort-by-alphabet"></span>
                      </button>
                    </th>
                    <th>Email
                      <button type="button" class="btn btn-default btn-sm">
                        <span class="glyphicon glyphicon-sort"></span>
                      </button>
                    </th>
                    <td> <a href="newUser.php" class="btn btn-primary" role="button">Add User</a></td>
                </tr>

               <?php
               
               $fp = fopen("usersmtg.csv","r");
                $users=array();
                $count=0;
                while(! feof($fp))
                  {
                    
                    $users[$count]=fgetcsv($fp);
                    $count++;
                  
                  }
                   fclose($fp);
                   $count=0;
               foreach($users as $row){
                 if($row){
                echo "<tr>";
                echo "<td><input type=\"checkbox\" name=\"mail\" value=".$count."></td>";
                echo "<td>".$row[0]." ".$row[1]."</td>";
                echo "<td>".$row[2]."</td>";
                echo "<td><a href=\"editUser.php?user=".$count."\" role=\"button\" class=\"btn btn-warning\">Edit User</a>";
                echo "</tr>";
                $count++;
                 }
               }
               ?>

             </table>
          </div>
          <div class="col-sm-1"></div>
      </div>
      </div>
      
      
  </body>
  <script>
    function sortTable() { 
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable");
  switching = true;
      
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[1];
       y = rows[i + 1].getElementsByTagName("TD")[1];
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
         shouldSwitch = true;
          break;
       }
   }
     if (shouldSwitch) {
       rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
       switching = true;
     }
  }
 }
  
function filterTable() {
   var input, filter, table, tr, td, i, txtValue;
   input = document.getElementById("myInput");
   filter = input.value.toUpperCase();
   table = document.getElementById("myTable");
   tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
       td = tr[i].getElementsByTagName("td")[1];
       if (td) {
         txtValue = td.textContent || td.innerText;
         if (txtValue.toUpperCase().indexOf(filter) > -1) {
         tr[i].style.display = "";
         } else {
           tr[i].style.display = "none";
        }
      }
     }
  }
  </script>
</html>