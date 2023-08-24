
let modalButton=document.getElementById("OpenModal")
let PhoneOpenModal=document.getElementById("OpenModalPhn")

let alertParent=document.getElementById("parentAlert")

// mobile Device Show Modal
document.getElementById("OpenModal").addEventListener("click",()=>{

  alertParent.classList.add("showAlertJs", true)

})
document.getElementById("closeBtnAlert").addEventListener("click" , ()=>{

  alertParent.classList.remove("showAlertJs", true)

})

// phn device show modal
document.getElementById("OpenModalPhn").addEventListener("click",()=>{

  alertParent.classList.add("showAlertJs", true)

})












const loginPopup=document.querySelector('.alertContainer')

window.addEventListener("load",function(){
  shopPopup();
})


function shopPopup(){
  const timeLimit=5
  let i=0
  const timer=setInterval(function(){
    i++;
    if (i == timeLimit) {
      clearInterval(timer)
    }
    loginPopup.classList.add("showAlertJs",true)




  },1000)
}



