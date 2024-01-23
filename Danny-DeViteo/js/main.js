import '/style.css'
import { DOMSelectors } from './Dom';
console.log(DOMSelectors);



const hist = []
function search(){
    DOMSelectors.search.addEventListener("submit", function(event){
      event.preventDefault();
      const searchInput = DOMSelectors.input.value;
          try{
            
            hist.push(searchInput)
            console.log(hist)
            const what = searchInput.includes(`"${hist}"`)
            console.log(what)
            if(what === true){
              alert("Oops; already have this gift idea");
            }
            if(hist.length > 5){
              alert("Too poor, can't get more gifts");
            }
            clearFields()
         
          }


          catch(error){
           
          }
        })
  
    }
    search()
    //add if statemnt
    function clearFields(){
      DOMSelectors.input.value = ""
      }