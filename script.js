
function game(){
   let confirm1=confirm("are you ready to play this game 😊");
   
    let num;
    let i=0;
    let msg=document.querySelector("#msg");
    let randomNum=Math.floor(Math.random()*10)
 if(confirm1){ 
   let playerName=prompt("enter the your name:");
    while(num!=randomNum){
        num=prompt("guess number 1 to 9:");
        if(num==randomNum){
           alert(`${playerName} the number you have guessed is correct 😊 and your attempts are ${i}`);
           msg.innerText=`${playerName} the number you have guessed is correct 😊 and your attempts are ${i}`;
           msg.style.backgroundColor="#3eff61";
           msg.style.color="white";
           msg.style.padding="10px";
           msg.style.margin="2px";
           msg.style.textAlign="center";
           msg.style.display="inline";
           msg.style.borderRadius="20px";
           break;
        } 
        i++;     
     }
   }
   else{
      alert("you are not ready to play this game ");
   }
setTimeout(function() {
      window.location.reload();
    }, 2000);
}
