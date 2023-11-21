




function mainfunction() { 
  
   
    var b1;
    var b2;
    var b3;
    var b4;
    var b5;
    var b6;
    var b7;
    var b8;
    var b9; 
    
    b1 = document.getElementById("b1").value; 
    b2 = document.getElementById("b2").value; 
    b3 = document.getElementById("b3").value; 
    b4 = document.getElementById("b4").value; 
    b5 = document.getElementById("b5").value; 
    b6 = document.getElementById("b6").value; 
    b7 = document.getElementById("b7").value; 
    b8 = document.getElementById("b8").value; 
    b9 = document.getElementById("b9").value; 


  
    var b1btn;
    var b2btn;
    var b3btn;
    var b4btn;
    var b5btn;
    var b6btn;
    var b7btn;
    var b8btn;
    var b9btn; 
          
    b1btn = document.getElementById("b1"); 
    b2btn = document.getElementById("b2"); 
    b3btn = document.getElementById("b3"); 
    b4btn = document.getElementById("b4"); 
    b5btn = document.getElementById("b5"); 
    b6btn = document.getElementById("b6"); 
    b7btn = document.getElementById("b7"); 
    b8btn = document.getElementById("b8"); 
    b9btn = document.getElementById("b9"); 
  
    



    if ((b1 == 'X') && (b2 == 'X') && (b3 == 'X'))
     { 
        document.getElementById('print') .innerHTML = "Winner is : Player X"; 
        
        b4btn.disabled = true; 
        b5btn.disabled = true; 
        b6btn.disabled = true; 
        b7btn.disabled = true; 
        b8btn.disabled = true; 
        b9btn.disabled = true; 
  
        b1btn.style.color = "blue"; 
        b2btn.style.color = "blue"; 
        b3btn.style.color = "blue"; 
    } 
    else if ((b1 == 'X') && (b4 == 'X') && (b7 == 'X')) 
    { 
        document.getElementById('print') .innerHTML = "Winner is : Player X"; 

        b2btn.disabled = true; 
        b3btn.disabled = true; 
        b5btn.disabled = true; 
        b6btn.disabled = true; 
        b8btn.disabled = true; 
        b9btn.disabled = true; 
  
        b1btn.style.color = "blue";
        b4btn.style.color = "blue";
        b7btn.style.color = "blue"; 
    } 
    else if ((b7 == 'X') && (b8 == 'X') && (b9 == 'X')) 
    { 
        document.getElementById('print') .innerHTML = "Winner is : Player X"; 
  
        b1btn.disabled = true; 
        b2btn.disabled = true; 
        b3btn.disabled = true; 
        b4btn.disabled = true; 
        b5btn.disabled = true; 
        b6btn.disabled = true; 
  
        b7btn.style.color = "blue";
        b8btn.style.color = "blue";
        b9btn.style.color = "blue";
    } 
    else if ((b3 == 'X') && (b6 == 'X') && (b9 == 'X'))
     { 
        document.getElementById('print') .innerHTML = "Winner is : Player X"; 
  
        b1btn.disabled = true; 
        b2btn.disabled = true; 
        b4btn.disabled = true; 
        b5btn.disabled = true; 
        b7btn.disabled = true; 
        b8btn.disabled = true; 
  
        b3btn.style.color = "blue";
        b6btn.style.color = "blue";
        b9btn.style.color = "blue";
    } 
    else if ((b1 == 'X') && (b5 == 'X') && (b9 == 'X'))
     { 
        document.getElementById('print') .innerHTML = "Winner is : Player X"; 

        b2btn.disabled = true; 
        b3btn.disabled = true; 
        b4btn.disabled = true; 
        b6btn.disabled = true; 
        b7btn.disabled = true; 
        b8btn.disabled = true; 
  
        b1btn.style.color = "blue";
        b5btn.style.color = "blue";
        b9btn.style.color = "blue";
    } 
    else if ((b3 == 'X') && (b5 == 'X') && (b7 == 'X')) 
    { 
        document.getElementById('print') .innerHTML = "Winner is : Player X"; 

        b1btn.disabled = true; 
        b2btn.disabled = true; 
        b4btn.disabled = true; 
        b6btn.disabled = true; 
        b8btn.disabled = true; 
        b9btn.disabled = true; 
  
        b3btn.style.color = "blue";
        b5btn.style.color = "blue";
        b7btn.style.color = "blue";
    } 
    else if ((b2 == 'X') && (b5 == 'X') && (b8 == 'X')) 
    { 
        document.getElementById('print') .innerHTML = "Winner is : Player X"; 
        
        b1btn.disabled = true; 
        b2btn.disabled = true; 
        b4btn.disabled = true; 
        b6btn.disabled = true; 
        b7btn.disabled = true; 
        b9btn.disabled = true; 
  
        b2btn.style.color = "blue";
        b5btn.style.color = "blue";
        b8btn.style.color = "blue";
    } 
    else if ((b4 == 'X') && (b5 == 'X') && (b6 == 'X')) 
    { 
        document.getElementById('print') .innerHTML = "Winner is : Player X"; 

        b1btn.disabled = true; 
        b2btn.disabled = true; 
        b3btn.disabled = true; 
        b7btn.disabled = true; 
        b8btn.disabled = true; 
        b9btn.disabled = true; 
  
        b4btn.style.color = "blue";
        b5btn.style.color = "blue";
        b6btn.style.color = "blue";
    } 
  
   


    else if ((b1 == '0') && (b2 == '0') && (b3 == '0'))
     { 
        document.getElementById('print') .innerHTML = "Winner is : Player O"; 

        b4btn.disabled = true; 
        b5btn.disabled = true; 
        b6btn.disabled = true; 
        b7btn.disabled = true; 
        b8btn.disabled = true; 
        b9btn.disabled = true; 
  
        b1btn.style.color = "blue";
        b2btn.style.color = "blue";
        b3btn.style.color = "blue";
    } 
    else if ((b1 == '0') && (b4 == '0') && ( b7 == '0')) 
    { 
        document.getElementById('print') .innerHTML = "Winner is : Player O"; 

        b2btn.disabled = true; 
        b3btn.disabled = true; 
        b5btn.disabled = true; 
        b6btn.disabled = true; 
        b8btn.disabled = true; 
        b9btn.disabled = true; 
  
        b1btn.style.color = "blue";
        b4btn.style.color = "blue";
        b7btn.style.color = "blue"; 
    } 
    else if ((b7 == '0') && (b8 == '0') && (b9 == '0'))
     { 
        document.getElementById('print') .innerHTML = "Winner is : Player O"; 

        b1btn.disabled = true; 
        b2btn.disabled = true; 
        b3btn.disabled = true; 
        b4btn.disabled = true; 
        b5btn.disabled = true; 
        b6btn.disabled = true; 
  
        b7btn.style.color = "blue";
        b8btn.style.color = "blue";
        b9btn.style.color = "blue";
    } 
    else if ((b3 == '0') && (b6 == '0') && (b9 == '0'))
     { 
        document.getElementById('print') .innerHTML = "Winner is : Player O"; 

        b1btn.disabled = true; 
        b2btn.disabled = true; 
        b4btn.disabled = true; 
        b5btn.disabled = true; 
        b7btn.disabled = true; 
        b8btn.disabled = true; 
        b3btn.style.color = "blue";
        b6btn.style.color = "blue";
        b9btn.style.color = "blue";
    } 
    else if ((b1 == '0') && (b5 == '0') && (b9 == '0'))
    { 
        document.getElementById('print') .innerHTML = "Winner is : Player O"; 

        b2btn.disabled = true; 
        b3btn.disabled = true; 
        b4btn.disabled = true; 
        b6btn.disabled = true; 
        b7btn.disabled = true; 
        b8btn.disabled = true; 
  
        b1btn.style.color = "blue";
        b5btn.style.color = "blue";
        b9btn.style.color = "blue";
    } 
    else if ((b3 == '0') && (b5 == '0') && (b7 == '0')) 
    { 
        document.getElementById('print') .innerHTML = "Winner is : Player O";  

        b1btn.disabled = true; 
        b2btn.disabled = true; 
        b4btn.disabled = true; 
        b6btn.disabled = true; 
        b8btn.disabled = true; 
        b9btn.disabled = true; 
  
        b3btn.style.color = "blue";
        b5btn.style.color = "blue";
        b7btn.style.color = "blue";
    } 
    else if ((b2 == '0') && (b5 == '0') && (b8 == '0')) 
    { 
        document.getElementById('print') .innerHTML = "Winner is : Player O"; 

        b1btn.disabled = true; 
        b3btn.disabled = true; 
        b4btn.disabled = true; 
        b6btn.disabled = true; 
        b7btn.disabled = true; 
        b9btn.disabled = true; 
  
        b2btn.style.color = "blue";
        b5btn.style.color = "blue";
        b8btn.style.color = "blue";
    } 
    else if ((b4 == '0') && (b5 == '0') && (b6 == '0'))
     { 
        document.getElementById('print') .innerHTML = "Winner is : Player O"; 

        b1btn.disabled = true; 
        b2btn.disabled = true; 
        b3btn.disabled = true; 
        b7btn.disabled = true; 
        b8btn.disabled = true; 
        b9btn.disabled = true; 
  
        b4btn.style.color = "blue";
        b5btn.style.color = "blue";
        b6btn.style.color = "blue";
    } 


  
   
    else if ((b1 == 'X' || b1 == '0') && (b2 == 'X'|| b2 == '0') && (b3 == 'X' || b3 == '0') &&
            (b4 == 'X' || b4 == '0') && (b5 == 'X' || b5 == '0') && (b6 == 'X' || b6 == '0') && 
            (b7 == 'X' || b7 == '0') && (b8 == 'X' || b8 == '0') && (b9 == 'X' || b9 == '0'))  
    { 
        document.getElementById('print') .innerHTML = "Match is a Tie"; 
    } 


    
    else { 
  
        
        if (flag == 1)
        { 
            document.getElementById('print') .innerHTML = "Player X Turn"; 
        }

        else if (flag == 0) 
        { 
            document.getElementById('print') .innerHTML = "Player 0 Turn"; 
        } 
    } 
} 
  

  

flag = 1; 
function function1() { 
    if (flag == 1) { 
        document.getElementById("b1").value = "X"; 
        document.getElementById("b1").disabled = true; 
        flag = 0; 
    } 
    else if (flag == 0) { 
        document.getElementById("b1").value = "0"; 
        document.getElementById("b1").disabled = true; 
        flag = 1; 
    } 
} 
  
function function2() { 
    if (flag == 1) { 
        document.getElementById("b2").value = "X"; 
        document.getElementById("b2").disabled = true; 
        flag = 0; 
    } 
    else if (flag == 0) { 
        document.getElementById("b2").value = "0"; 
        document.getElementById("b2").disabled = true; 
        flag = 1; 
    } 
} 
  
function function3() { 
    if (flag == 1) { 
        document.getElementById("b3").value = "X"; 
        document.getElementById("b3").disabled = true; 
        flag = 0; 
    } 
    else if (flag == 0) { 
        document.getElementById("b3").value = "0"; 
        document.getElementById("b3").disabled = true; 
        flag = 1; 
    } 
} 
  
function function4() { 
    if (flag == 1) { 
        document.getElementById("b4").value = "X"; 
        document.getElementById("b4").disabled = true; 
        flag = 0; 
    } 
    else if (flag == 0) { 
        document.getElementById("b4").value = "0"; 
        document.getElementById("b4").disabled = true; 
        flag = 1; 
    } 
} 
  
function function5() { 
    if (flag == 1) { 
        document.getElementById("b5").value = "X"; 
        document.getElementById("b5").disabled = true; 
        flag = 0; 
    } 
    else if (flag == 0) { 
        document.getElementById("b5").value = "0"; 
        document.getElementById("b5").disabled = true; 
        flag = 1; 
    } 
} 
  
function function6() { 
    if (flag == 1) { 
        document.getElementById("b6").value = "X"; 
        document.getElementById("b6").disabled = true; 
        flag = 0; 
    } 
    else if (flag == 0) { 
        document.getElementById("b6").value = "0"; 
        document.getElementById("b6").disabled = true; 
        flag = 1; 
    } 
} 
  
function function7() { 
    if (flag == 1) { 
        document.getElementById("b7").value = "X"; 
        document.getElementById("b7").disabled = true; 
        flag = 0; 
    } 
    else if (flag == 0) { 
        document.getElementById("b7").value = "0"; 
        document.getElementById("b7").disabled = true; 
        flag = 1; 
    } 
} 
  
function function8() { 
    if (flag == 1) { 
        document.getElementById("b8").value = "X"; 
        document.getElementById("b8").disabled = true; 
        flag = 0; 
    } 
    else if (flag == 0) { 
        document.getElementById("b8").value = "0"; 
        document.getElementById("b8").disabled = true; 
        flag = 1; 
    } 
} 
  
function function9() { 
    if (flag == 1) { 
        document.getElementById("b9").value = "X"; 
        document.getElementById("b9").disabled = true; 
        flag = 0; 
    } 
    else if (flag == 0) { 
        document.getElementById("b9").value = "0"; 
        document.getElementById("b9").disabled = true; 
        flag = 1; 
    } 
} 



 
function resetbutton()
 { 
    location.reload(); 
    b1 = b2 = b3 = b4 = b5 = b6 = b7 = b8 = b9 = ''; 
} 