import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react'
import { Link } from 'react-router-dom'
import './Tweet.css'

interface ITweetProps {
  content: string
}

export default function Tweet(props:ITweetProps){

  return (
    <Link to='/status' className="tweet">
      <img src="https://github.com/Eu-Pedro0ficial.png" alt="imagem do usuario" />

      <div className='tweet-content'>
        <div className="tweet-content-header">
          <strong>Pedro Cardoso</strong>
          <span>@Pedro</span>
        </div>
        <p>
          {props.content}
        </p>

        <div className='tweet-content-footer'>
          <button type='button'><ChatCircle /> 20</button>
          <button type='button'><ArrowsClockwise /> 20</button>
          <button type='button'><Heart /> 20</button>
        </div>
      </div>
    </Link>
  )

}
