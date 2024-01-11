import '/style.css'
import { DOMSelectors } from './Dom';
console.log(DOMSelectors);

function search(){
    DOMSelectors.search.addEventListener("submit", function(event){
      event.preventDefault();
      const searchInput = DOMSelectors.input.value;
          try{
            console.log(searchInput)
          }catch(error){
           
          }
        })
    }
    search()