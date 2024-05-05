let form = document.querySelector("form");
let t=5;

form.addEventListener("submit", e=>{
    e.preventDefault();
    let username= document.querySelector("#username").value;
    let password= document.querySelector("#password").value;

    console.log(localStorage.getItem(username));
    if(username===""||password===""){
        alert("Enter all field");
    }else if(localStorage.getItem(username)===password){
        alert("I found your account");
        window.open("../home/home.html");
    }else{
        console.log("Your username or password is not exist");
    }
    


})

let count=0;
let emojiChange;
let show=document.querySelector("#show");

show.addEventListener("click",e=>{
    
    e.preventDefault();
    console.log(e); 
    let password= document.querySelector("#password");
    // console.log(password);
    if(password.value !==""){
            let emoji= document.querySelector("#emoji");
            if(password.type=="password"){
                    console.log("Enter");
                    password.type="text";
                    e.target.innerHTML="Hide";
                    // emoji.innerHTML="😎"
                   
                   emojiChange= setInterval(()=>{
                        
                    let emojiArr=['😣','🥱','😣','😯','😮','🤨','😏','🙄','😲','🧐','🤫','🤔','😊','😉','😀','😁','😃','😆','🤠','😵','😯','🙃','🥳','😇','🥺','😧','😞','😩','😟']
                    if(count==emojiArr.length-1){
                        count=0;                       

                    }else{
                        ++count;
                    }
                   
                    emoji.innerHTML=emojiArr[count];
                },1000);
        }else{
            console.log("Exit");
            password.type="password";
            
            e.target.innerHTML="Show"
            console.log( emojiChange);
            clearInterval(emojiChange)
            emoji.innerHTML='😴';
        
        }

    }else{
        console.log("Enter some value");
    }
    
})