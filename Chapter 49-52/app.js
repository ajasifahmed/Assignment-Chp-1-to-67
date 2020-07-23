//   1
// function getData(){
//     var name=document.getElementById('name').value;
//     var fname=document.getElementById('fname').value;
//     var email=document.getElementById('email').value;
//     var genderid=document.getElementById('form'); 
//     var gender=genderid.elements["Gender"].value;
//     alert("Name="+name+"\n"+
//     "Father Name="+fname+"\n"+
//     "Email="+email+"\n"+
//     "Gender="+gender+"\n"
//     )
// }

//2

// function readMore(){
//     var p=document.getElementById('para');
//     var p2=document.getElementById('newPara').innerText;
//     p.innerHTML=p2+'<a href="javascript:void(0)" onclick="hide()">HIDE</a>';
// }

//3
function deleteBtn() {
    // event.target will be the input element.
    var td = event.target.parentNode; 
    var tr = td.parentNode; // the row to be removed
    tr.parentNode.removeChild(tr);
}

document.getElementById('container').hidden=true;
var rIndex,
table = document.getElementById("myTable");
// function edit() {
//     document.getElementById('container').hidden=false;
//      var sno=document.getElementById('myTable').rows[0].cells.items(0).innerHTML;
//     var name=document.getElementById('myTable').rows[0].cells.items(1).innerHTML;
//     var rank=document.getElementById('myTable').rows[0].cells.items(2).innerHTML;
    
//     var namebox=document.getElementById('name');
//     namebox.value=name;
    
//     var fnamebox=document.getElementById('fname');
//     fnamebox.value=rank;
    
//     var emailbox=document.getElementById('email');
//     emailbox.value=sno;

// }

  // display selected row data into input text
  function edit()
  {
    document.getElementById('container').hidden=false;
      for(var i = 1; i < table.rows.length; i++)
      {
          table.rows[i].onclick = function()
          {
            document.getElementById("index").value = this.cells[0].innerHTML;
            document.getElementById("name").value = this.cells[1].innerHTML;
            document.getElementById("standard").value = this.cells[2].innerHTML;
          };
      }
  }
