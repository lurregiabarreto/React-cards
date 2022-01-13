import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import Primeiro from './Components/Primeiro'
import ComParametro from'./Components.ComParametro'
import ComFilhos from './Components/ComFilhos'



ReactDOM.render(
    <div>
        <ComFilhos>
            <ul>
                <li> Ana </li>
                <li> Bia </li>
                <li> Carlos </li>
                <li> Daniel  </li>
            </ul>
        </ComFilhos>
        <Primeiro></Primeiro>
   <ComParametro titulo = "Esse é o titulo" subtitulo = "Esse é o subtitulo"></ComParametro>
    </div>
   
   ,document.getElementById('root') 
)