
//navigation

function openNav() {
    var nav = document.getElementById("navbar");
    
   
    if (nav.classList.contains("open")) {
        nav.classList.remove("open");
    } else {
        nav.classList.add("open");
    }
}



//calc
function appendNumber(num){
    document.getElementById("display").value += num;
  }
  function clearDisplay() {
      document.getElementById("display").value = "";
  }
  
  function deleteLast() {
      var current = document.getElementById("display").value;
      document.getElementById("display").value = current.slice(0, -1);
  }
  
  function calculate() {
      try {
          var result = eval(document.getElementById("display").value);
          document.getElementById("display").value = result;
      } catch (error) {
          document.getElementById("display").value = "Error";
      }
  }