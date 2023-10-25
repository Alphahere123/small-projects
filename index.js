const Isstatus=document.querySelector('h5')
const btn=document.querySelector("#btn")
const check=0
btn.addEventListener('click',function(params) {
    if(check == 0){
        Isstatus.innerHTML="Friends"
        Isstatus.style.color="green"
        btn.innerHTML="Remove Freind"
        check=1
    }
     else if(check==0){
        Isstatus.innerHTML="Stranger"
        Isstatus.style.color="Red"
        check = 0


    }
})