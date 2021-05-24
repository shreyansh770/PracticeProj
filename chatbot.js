
  
const voice = document.querySelector(".voice");
const voice2text = document.querySelector(".voice2text");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recorder = new SpeechRecognition();



function addHumanText(text) {
    const chatContainer = document.createElement("div");
    chatContainer.classList.add("chat-container");

    const chatBox = document.createElement("p");
    chatBox.classList.add("voice2text");

    const chatText = document.createTextNode(text);
    chatBox.appendChild(chatText);
    chatContainer.appendChild(chatBox);
   
    return chatContainer;

  }

  function botText(text){

    const botchatContainer = document.createElement("div");
    botchatContainer.classList.add("chat-container");
    botchatContainer.classList.add("darker");

    const botchatBox = document.createElement("p");
    botchatBox.classList.add("voice2text");

    const botchatText = document.createTextNode(text);
    botchatBox.appendChild(botchatText);
    botchatContainer.appendChild(botchatBox);
   
    return botchatContainer;

  }

 function chatBotVoice(myMessage){

     const botSpeech = new SpeechSynthesisUtterance();
  
     //Use MDN to undertand the code below
     botSpeech.text="Sorry ! I did not understand";

     if(myMessage.includes("how are you")){
        botSpeech.text="I am fine how are you"
     }

     if(myMessage.includes("time")){
        var d = new Date();
         
        botSpeech.text="The time is:"+""+  d.getHours()+"hours"+d.getMinutes()+"minutes"+d.getSeconds()+"seconds";

     }

     botSpeech.volume=1;
     botSpeech.rate=1
     botSpeech.pitch=1;

     window.speechSynthesis.speak(botSpeech)

     var botElement = document.getElementById("container")
      botElement.appendChild(botText(botSpeech.text))


 }


recorder.onstart=()=>{
    console.log("Voice Activated")
};

recorder.onresult=(event)=>{
    // console.log(event)

    const resultIndex = event.resultIndex;//READ MDN 
    const transcript = event.results[resultIndex][0].transcript;
    // voice2text.textContent=transcript;

    var Element = document.getElementById("container")
      Element.appendChild(addHumanText(transcript))

      chatBotVoice(transcript)

};

voice.addEventListener("click",()=>{

 recorder.start();

})