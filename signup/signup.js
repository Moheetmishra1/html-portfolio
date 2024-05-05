let form=document.querySelector("form");

// function account(name,pass,email,tel){
//     this.name=name;
//     this.password=pass;
//     this.email=email;
//     this.tel=tel
// }

form.addEventListener("submit",e=>{
    
    e.preventDefault();
    let username= document.querySelector("#username").value;
    let password= document.querySelector("#password").value;
    let email= document.querySelector("#email").value;
    let tel=document.querySelector("#tel").value;
    // let obj = new account(username,password,email,tel);
    // console.log(obj.name);
    if(username===""|| password==="" || email===""|| tel===""){
        alert("Fill all the field  ")
    }else{
        // if(tel>)
        // console.log(obj);
        alert("Account created successfully");
        window.open("../home/home.html");
        localStorage.setItem(username,password);
    }


})