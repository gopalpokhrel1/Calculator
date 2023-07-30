const button = document.querySelectorAll("button");

const screen = document.querySelector("#screen");

let arr  = Array.from(button);

let x ='';

arr.forEach((button)=>{
  button.addEventListener('click', (e)=>{

    if(e.target.innerHTML=='='){
      x = eval(x);
      screen.innerHTML= x;
    }
   else if(e.target.innerHTML=='AC')
   {
    x='';
      screen.innerHTML= x;
    }

    else if(e.target.value=='Del'){
      x= x.substring(0, x.length-1);
      screen.innerHTML= x;
    }

    else{
      
    x+=e.target.innerHTML;
    screen.innerHTML= x;
    }

    
  })
})