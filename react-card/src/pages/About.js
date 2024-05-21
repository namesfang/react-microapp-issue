import React, { useEffect, useState } from 'react'

export default function About() {

  const [ info , setInfo ] = useState({})

  const getData = ()=> {
    console.log('?$', info)
  }
  
  useEffect(()=> {
    const dataListener = (data)=> {
      if(data.type === 'init') {
        setInfo({
          ...data
        })
        sessionStorage.setItem('info', JSON.stringify(data))
      }
      if(data.type === 'save') {
        console.log('?r', info)
      }
    }
    
    window.microApp.addDataListener(dataListener, true)
    
    return ()=> {
      window.microApp.removeDataListener(dataListener)
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <div >
        <button onClick={ getData } type="button">子应用获取数据</button>
      </div>
    </div>
  )
}
