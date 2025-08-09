// setup socket
const socket=io();
socket.on("blinked" ,(data) => {
   notify();
   console.log('b;a bla bla');
})


function notify() {

   // invoke when blinked
   // flash card notifying that a blink was detected
   
   let card = document.createElement('div');
   card.textContent = "A \"Blink\" was detected";

   let style=card.style;

   style.background="white";
   style.borderRadius="7px";
   style.boxShadow="5px 5px 2px #fff2";
   style.padding="10px";
   style.fontSize="10px";

   style.width="max-content";
   style.padding="20px 50px";

   style.position="fixed";
   style.top="50px";
   style.left="40%";

   document.body.appendChild(card);

   setTimeout(() => {
      card.remove();
   }, 3000);
}

// var textarea=document.getElementsByName('textarea')[0];
var textarea=document.getElementById('container');

// include initial words too
words=textarea.value.split(' ');

// initiate the event listener
textarea.addEventListener("keydown",(event)=>{

   if (event.code==="Space" || event.key ===" ") {
      
      // extract the last word
      let text=textarea.value;
      let lastWord=text.split(' ').pop();
      
      // add the last word
      words.push(lastWord);
      shuffle();
   }

});

function shuffle() {

   // function to shuffle words
   fromIndex=Math.floor(Math.random()*words.length);
   word=words.splice(fromIndex,1)[0];

   toIndex=Math.floor(Math.random()*(words.length+1));
   words.splice(toIndex,0,word);

   textarea.value=words.join(' ');
}