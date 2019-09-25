var i=0;
showSlides();

function showSlides()
{

  var slide=document.getElementsByClassName("pic");
  slide[0].style.display="none"
  slide[1].style.display="none";
  slide[2].style.display="none";
  slide[3].style.display="none";
  i++;
  if(i > 4)
  {
    i=1;
  }
  console.log(i);
    slide[i-1].style.display = "block";
setTimeout(showSlides,2000);
}
window.onscroll = function()
{
  myFunction()
};
function myFunction() 
{
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
