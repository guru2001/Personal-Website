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
function f1()
{
	console.log(2)
  if (typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount)+1;
    } else {
      localStorage.clickcount = 1;
    }
   }
  f3();
}
function f2()
{
  console.log(1)
  if (typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) 
    {
      localStorage.clickcount = Number(localStorage.clickcount)-1;
    } 
    else 
    {
      localStorage.clickcount = -1;
    }
}
  f3();
}
function f3()
{
	document.getElementById("result").innerHTML = "Thanks for " + localStorage.clickcount + " vote(s) 🙏";
}
 