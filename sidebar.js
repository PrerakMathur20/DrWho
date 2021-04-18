var i = 0;
function openNav() {
  if(i == 0){
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "450px";
    document.getElementById("sidbr").style.color="transparent";
    i = 1;
    }
  else{
    document.getElementById("sidbr").click(closeNav());
    i = 0;
    }
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("sidbr").style.color="white";
  }