let x = false
function myFunction() {
  if (x==false){

    document.getElementById("demo").innerHTML = "Paragraph changed.";
    x=true
  }else{
    document.getElementById("demo").innerHTML = "Paragraph changed again";
    x=false
  }
}