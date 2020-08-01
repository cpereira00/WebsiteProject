var users = [
  {fName:"James", lName:"Elman", email:"james@elman.org"},
  {fName:"Erik", lName:"Perez", email:"erik@perez.org"},
  {fName:"Chris", lName:"Pereira", email:"chris@pereira.org"},
  {fName:"Krishnna", lName:"Shan", email:"krishnna@shan.org"}
];
function fillTable() {
 table= document.getElementById("myTable");
  var i;
  
  for (i=0; i<users.length; i++) {
     var row =table.insertRow(i+1);
     var cell0 = row.insertCell(0);
     var cell1 = row.insertCell(1);
     var cell2 = row.insertCell(2);
     var cell3 = row.insertCell(3);
     var inp = document.createElement("input");
     inp.type="checkbox";
     inp.setAttribute("name","mail");
     inp.setAttribute("value",i);
     
     var edit = document.createElement("a");
     edit.href="editUser.html?"+i;
     edit.setAttribute("role","button");
     edit.setAttribute("class","btn btn-warning");
     edit.innerHTML="Edit User";
     
     cell0.appendChild(inp);
     cell1.innerHTML = users[i].fName+" "+users[i].lName;
     cell2.innerHTML = users[i].email;
     cell3.appendChild(edit);
     
  }
}


    function sortTable() {
        var table, rows, switching, i, x, y, shouldSwitch;
        table = document.getElementById("myTable");
        switching = true;
        /*Make a loop that will continue until
        no switching has been done:*/
        while (switching) {
          //start by saying: no switching is done:
          switching = false;
          rows = table.rows;
          /*Loop through all table rows (except the
          first, which contains table headers):*/
          for (i = 1; i < (rows.length - 1); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /*Get the two elements you want to compare,
            one from current row and one from the next:*/
            x = rows[i].getElementsByTagName("TD")[1];
            y = rows[i + 1].getElementsByTagName("TD")[1];
            //check if the two rows should switch place:
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
              //if so, mark as a switch and break the loop:
              shouldSwitch = true;
              break;
            }
          }
          if (shouldSwitch) {
            /*If a switch has been marked, make the switch
            and mark that a switch has been done:*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
          }
        }
      }
  
      function myFunction() {
          // Declare variables
          var input, filter, table, tr, td, i, txtValue;
          input = document.getElementById("myInput");
          filter = input.value.toUpperCase();
          table = document.getElementById("myTable");
          tr = table.getElementsByTagName("tr");
        
          // Loop through all table rows, and hide those who don't match the search query
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
var meats =[
  {type:"Chicken", price:10.99, inventory:"15", link:"../Aisle.section/Aisle.images/chicken.png"},
  {type:"Pork", price:12.99, inventory:"20", link:"../Aisle.section/Aisle.images/pork.jpg"},
  {type:"Steak", price:15.99, inventory:"25", link:"../Aisle.section/Aisle.images/steak.jpg"},
  {type:"Salmon", price:11.99, inventory:"10", link:"../Aisle.section/Aisle.images/salmon.jpg"},
  {type:"Sausage", price:6.99, inventory:"42", link:"../Aisle.section/Aisle.images/sausage.jpg"}
]
var detArray = [
  "A tender piece of chicken.",
  "Flavourful pork.",
  "A robust steak.",
  "Fresh salmon caught daily.",
  "Sausage made with the finest herbs and spices."]
 var nums;

function getMeat() {
  var q = location.search.substring(1);
  
  var pic = document.getElementById("pic");
  pic.src=meats[q].link;
  //
  var table = document.getElementById("myTable");
  var rows = table.rows;
  rows[1].getElementsByTagName("td")[0].innerHTML=meats[q].type;
  rows[2].getElementsByTagName("td")[0].innerHTML=meats[q].price;
  rows[3].getElementsByTagName("td")[0].innerHTML=meats[q].inventory;
  //
  var det = document.getElementById("detail");
  det.innerHTML = detArray[q];
  //
  var inp = document.getElementById("x");
  x.setAttribute("max",meats[q].inventory);
  //
  //x.value=sessionStorage.q;
  x.value=sessionStorage.getItem("num"+q);
 setPrice();
}

function setPrice() {
  var price = document.getElementById("price");
  var x = document.getElementById("x");
  var q = location.search.substring(1);
  price.innerHTML="Price: $"+x.value*meats[q].price;
  //sessionStorage.q=x.value;
  sessionStorage.setItem("num"+q,x.value);
  
}

function mailList() {
 var i; 
 var names="";
 var checkbox = document.getElementsByName("mail");
  for (i=0; i<users.length; i++){
      if (checkbox[i].checked==true){
        names = names+" "+users[checkbox[i].value].email;
      }
  }
  if (names!="")alert("Sending email to: "+names);
}

function getUser() {
  var q = location.search.substring(1);
  document.getElementById("firstName").value=users[q].fName;
  document.getElementById("lastName").value=users[q].lName;
  document.getElementById("email").value =users[q].email;
}



function moreDet() {
  var x = document.getElementById("detail");
  var b = document.getElementById("more");
  if (x.style.display === "none") {
    x.style.display = "block";
    b.innerHTML="Less Info"
  } else {
    x.style.display = "none";
    b.innerHTML="More Info"
  }
}

function showInfo(a){
    var x = document.getElementsByClassName("infoImg");
    var info = document.getElementsByClassName("info");
    x[a].style.animation="fadeout  .5s ease forwards";
    info[a].style.zIndex = "999";

}
function hideInfo(a){
  var x = document.getElementsByClassName("infoImg");
  var info = document.getElementsByClassName("info");
  x[a].style.animation="fadein  .5s ease forwards";
  info[a].style.zIndex = "-1";


}