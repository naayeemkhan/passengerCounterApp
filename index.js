let count =0
countEl=document.getElementById("count-el")


function increment(){
  count=count+1
  countEl.innerText=count
  
  }
  saveEl=document.getElementById("save-el")

  function save(){
    //here we replaced .innerText with .textContent
    saveEl.textContent=saveEl.innerText+count+" - "
    countEl.innerText=0
    count=0
  }

 
