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

          }catch(error){
           
          }
        })
    }
    search()
    //add if statemnt