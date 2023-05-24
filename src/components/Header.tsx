import { Sparkle } from "phosphor-react";
import './Header.css'

interface IHeaderProps {
  title: string
}

export function Header(props:IHeaderProps){

  return (
    <div className='timeline-header'>
            {props.title} <Sparkle/>
    </div>
  )
}