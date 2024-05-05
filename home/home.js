
let arr=["< WEB DEVELOPER />","< SOFTWARE DEVELOPER />","< FRONTEND DEVELOPER />"];
let count=0;
setInterval(() => {

    let profession=document.getElementById("profession");
    if(count===arr.length){
        count=0;
    }
    profession.innerText=arr[count++];
    

    
},4000);


function fun(){
    console.log("dhjkehfkjewgj");
}

let body=document.getElementsByTagName("body")[0];
console.log(body);
body.addEventListener("load",(e)=>{
    e.preventDefault()
    // body.style.cssText="background-color:black";
    console.log(body);
    body.innerHTML=""
})




// const Mohit_Mishra={
// 	name:"Mohit Mishra",
// 	email:"moheetmishra.gaya@gmail.com",
// 	linkedin:"https://www.linkedin.com/in/mohit-mishra-85b22816b",
// 	workExperience(){
// 		return {
// 		type:"MERN Internship",
// 		Company:"LTIMindtree",
// 		duration:"Three Month",
// 		Time:"March-June",
// 		Remote: true,
// 		}
	
//     }
// }

// console.log(Mohit_Mishra);
// console.log(Mohit_Mishra.workExperience);
// console.log(Mohit_Mishra.workExperience());

