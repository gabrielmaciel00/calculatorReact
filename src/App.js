import { useState, useEffect, useDebugValue } from 'react';
import './App.css';
import Dragabble from './Draggable';

function App() {

  let [view, setView] = useState(0)
  let [oldValue, setOldValue] = useState(0)
  let [operator, setOperator] = useState('')

  function handlerNumers(value) {

    if(view.length == 9){
      return
    }

    if(value === '.'){
     const verifyDot = view.includes('.') 

     if(verifyDot){
      return
     }
    }
    view === 0 ? setView(value) : setView((view + value.toString()))
  }
  function calcPercentagem(value) {
    setView(view / 100)
  }
  function operations(type) {
    setOldValue(Number(view))
    setOperator(type)
    setView('')
  }
  function result(){
    if(operator === 'sum'){
      setView(oldValue + Number(view))
    }
    if(operator === 'subtraction'){
      setView(oldValue - Number(view))
    }
    if(operator === 'multiplication'){
      setView(oldValue * Number(view))
    }
    if(operator === 'division'){
      setView(oldValue / Number(view))
    }

  
    setOldValue('')
  }

  useEffect(()=>{
    //move calculator
     Dragabble()
  }, [])

  return (

    <div id='calculator'>


    <div className="container" id='click'>

    
      <div className='view'>

        <input readOnly value={view.toLocaleString('pt-BR')}></input>
      </div>

      <div className='handler'>

        <div>
          <button className='btn gray-ligth' onClick={() => setView(0)}>AC</button>
          <button className='btn gray-ligth'></button>
          <button className='btn gray-ligth' onClick={calcPercentagem}>%</button>
        </div>

        <div className='actions'>
          {[{type:'division', symbol:"/"}, {type:'multiplication', symbol:'x'},{type:'subtraction', symbol:'-'}, {type:'sum', symbol:'+'}]
          .map((item)=> <button key={item.type} className='btn orange' onClick={() => operations(item.type)}>{item.symbol}</button>)}
          <button className='btn orange'onClick={result} >=</button>
        </div>
        <div className='numbers'>
          {[7,8,9,4,5,6,1,2,3].map((item)=><button key={item}className='btn gray' onClick={() => handlerNumers(item)}>{item}</button>)}
        </div>
        <div className='footer-numbers'>
          <button className='btn gray zero' onClick={() => handlerNumers('0')}>0</button>
          <button className='btn gray' onClick={() => handlerNumers('.')}>.</button>
        </div>

      </div>

    </div>
    </div>
  );
}

export default App;
