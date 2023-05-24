import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import Tweet from "../components/Tweet";
import './Status.css';
import { PaperPlaneRight } from "phosphor-react";

export function Status(){

  const [newAnwers, setNewAnwers] = useState('')

  const [answers, setAnwers] = useState([
    'Concordo...',
    'Faz sentido',
    'Parabens pelo progresso'
  ]);

  function createNewAnwers(event: FormEvent){
    event.preventDefault();
    setAnwers([newAnwers, ...answers])
    setNewAnwers('');
  }

  function handleHotkeySubmit(event: KeyboardEvent){
    if(event.key === "Enter" && (event.ctrlKey || event.metaKey)){
      setAnwers([newAnwers, ...answers])
      setNewAnwers('');
    }
  }

  return (
        <main className='status'>
          <Header title='Tweet' />
          <Tweet content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos excepturi alias, minus dolore non dicta quo quidem a voluptate itaque nostrum velit id! Eos eum quae voluptate cum eaque iure!" />
          <Separator />

          <form onSubmit={createNewAnwers} className='answer-tweet-form'>
            <label htmlFor='tweet'>
              <img src="https://github.com/Eu-Pedro0ficial.png" alt="imagem do usuario" />
              <textarea onKeyDown={handleHotkeySubmit} onChange={(e) => setNewAnwers(e.target.value)} value={newAnwers} name="" id="tweet" placeholder="Tweet your answer"></textarea>
            </label>
            <button type='submit'>
              <PaperPlaneRight />
              <span>Answer</span>
            </button>
          </form>

          {
            answers.map((answer)=>(
              <Tweet key={answer} content={answer} />
            ))
          }
        </main>
  )
}
