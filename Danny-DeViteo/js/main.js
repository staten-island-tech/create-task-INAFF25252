import '/style.css'
import { DOMSelectors } from './Dom';
console.log(DOMSelectors);

const url = "https://opentdb.com/api.php?amount=5"

async function getData(URL){
  try{
    const response = await fetch(URL)
    const data = await response.json();
    console.log(data);
    return data 
  } catch(error){
    console.log(error)    
  }
}
getData(url); 


function card(btn){
  btn.addEventListener("click", function(event){
    event.preventDefault();
    //clearButtons()
    async function otherButtons(){
      try{
       const get = await fetch(`${url}`);
       const poke = await get.json();
        console.log(poke);
        poke.results.forEach((item)=>  {
          DOMSelectors.gallery.insertAdjacentHTML("beforeend", `
            <div class="card">
            <h2>${item.question}</h2>
            </card>`
          )
        })  
      }
      catch(error){

      }
    }
    otherButtons()
  })
}
card(DOMSelectors.form)

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