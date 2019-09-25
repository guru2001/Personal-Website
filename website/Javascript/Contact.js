function add()
{
        var name=document.getElementById("name").value;
        var skill=document.getElementById("skill").value;
        var level=document.getElementById("Level").value;
        var row=document.getElementById("tbody").insertRow(0);
        var c1=row.insertCell(0);
        var c2=row.insertCell(1);
        var c3=row.insertCell(2);
        c1.innerHTML=name;
        c2.innerHTML=skill;
        c3.innerHTML=level;
}
 window.onscroll = function()
{
  myFunction()
};
function myFunction() 
{
 console.log(9);
 var navbar = document.getElementById("navbar");
 var sticky = navbar.offsetTop;
  if (window.pageYOffset >= sticky)
   {
    navbar.classList.add("sticky")
  } 
  else 
  {
    navbar.classList.remove("sticky");
  }
}
