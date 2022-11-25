function AddData(e)
{
e.preventDefault();
var rows="";
var name=document.getElementById("Name").value;
var job=document.getElementById("job").value;
var salary=document.getElementById("salary").value;
rows+="<tr><td>"+name+"</td><td>"+job+"</td><td>"+salary+"</td></tr>";
$(rows).appendTo("#list tbody");
}
 