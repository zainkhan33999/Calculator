const displayBtn = document.querySelectorAll('.printbtn')
const screen = document.querySelector('#screentext')
const allclear=document.querySelector(".clearbtn")
const equalbtn = document.querySelector('.equal-sign')

displayBtn.forEach(button => {
    button.addEventListener('click', () => {
      screen.innerHTML+=button.innerHTML
        
})

})
allclear.addEventListener("click",()=>{
    screen.innerHTML=null
})

equalbtn.addEventListener('click', () => {
const expression = screen.innerHTML
const result = eval(expression)
screen.innerHTML = result
})
