const list = document.querySelector(".list")
const submit = document.querySelector(".submit")
const input = document.querySelector(".input");

submit.addEventListener('click', () => {
if(input.value == ''){
    return
}
addItem()
    
})

input.addEventListener('keypress', (e) => {
    if(input.value == ''){
        return
    }
    else if (e.keyCode == 13){
        addItem()

    }
       
        
    })

    function addItem(){
        // div1 is larger input div with text, img, and btn
        div1 = document.createElement('div');
        div1.className = "div-con";
        // div2 only contains text and image
        div2 = document.createElement('div');
        div2.className = "div2"

        

       
        text = document.createElement('li');
        
        text.className = 'text';
        
        text.appendChild(document.createTextNode(input.value));

        check = document.createElement('img');
        check.src = "./images/check.svg";
        check.className = 'check';
        // 
        
// 

        xBtn = document.createElement("button");
        xBtn.appendChild(document.createTextNode('X'));
       
       
        div2.appendChild(check);
        div2.appendChild(text);

        div1.appendChild(div2)
        div1.appendChild(xBtn);

        list.appendChild(div1);
        list.addEventListener("click", function(e) {
            const tgt = e.target.closest("li");
            if (tgt) tgt.classList.toggle("line-through");
          })
        input.value = '';
       
      
       
    }


   
   