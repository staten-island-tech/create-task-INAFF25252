import '/style.css'
import { DOMSelectors } from './Dom';
console.log(DOMSelectors);
const hist = []
const final=[]
const Questions = [
  {
    id: 1,
    question: 'What is 2 + 3?',
    answer: 5
  },
  {
    id: 2,
    question: 'What is 8 + 4?',
    answer: 12
  },
  {
    id: 3,
    question: 'What is 5 + 7?',
    answer: 12
  },
  {
    id: 4,
    question: 'What is 10 + 6?',
    answer: 16
  },
  {
    id: 5,
    question: 'What is 3 + 9?',
    answer: 12
  },
  {
    id: 6,
    question: 'What is 15 + 8?',
    answer: 23
  },
  {
    id: 7,
    question: 'What is 6 + 11?',
    answer: 17
  },
  {
    id: 8,
    question: 'What is 4 + 7?',
    answer: 11
  },
  {
    id: 9,
    question: 'What is 9 + 5?',
    answer: 14
  },
  {
    id: 10,
    question: 'What is 12 + 10?',
    answer: 22
  }

];

    function check(answer, correct, w,s,a){
      for(let i=1; i<=10; i++){
        if(Number(answer) === correct){
          console.log("Correct!")
        }}
        if(Number(answer) !=correct){
          console.log("Incorrect try again")
          hist.push({id:w,question:s,answer:a})
          console.log(hist)
      }
    }

    for(const question of Questions){ //loops through an iterable object
      console.log(`${question.question}`);
      const answer = prompt("Enter your Answer:")
      check(answer, question.answer, question.id, question.question, question.answer);
    }
    redo()

    function redo(){
      for(const question of hist){
        console.log(`${hist}`)
        const answer = prompt("Enter your Answer:")
        if(Number(answer) === correct){
          console.log("Correct!")
        }else{
          console.log("Incorrect try again")
          final.push(question.question)
          console.log(final)
      }
      }
      if(final.length >= 3){
      console.log("You are Dumber than an Infant")
      }
    }