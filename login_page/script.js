const login = document.getElementById("login");
const signUpText = document.getElementById("signUp-text");


// login.addEventListener("mouseover",(event)=>{
//     login.style.height= "82%";
//     login.style.transition = "height 1s ease-in-out";
// })

login.addEventListener("click", () => {
    login.style.cursor="pointer"
    login.style.height = "82%";
    login.style.transition = "height 1s ease-in-out";
  });
  
  // Event Listener for Sign Up click
  signUpText.addEventListener("click", () => {
    login.style.height = "85px";
    login.style.transition = "height 1s ease-in-out";
  });
