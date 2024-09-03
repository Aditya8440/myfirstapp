function handlelogin(){
    const uidRef = document.querySelector("body > p:nth-child(2) > input");
    const pwdRef = document.querySelector("body > p:nth-child(3) > input");
    const uid = uidRef.value;
    const pwd = pwdRef.value;
    if(uid === "adi"&& pwd==="adi123"){
        alert("your uid and pass are correct..");
        
    }else{
        document.querySelector("body > h3").innerText="Plz Enter correct uid and password..";
        setTimeout(()=>{
            document.querySelector("body > h3").innerText="";
        },5000)
    }
}