window.onscroll = ()=>{
  myFunction();
};


var header = document.getElementById("headid");


var sticky = header.offsetTop;


function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
