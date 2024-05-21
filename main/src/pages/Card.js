/** @jsxRuntime classic */
/** @jsx jsxCustomEvent */
import jsxCustomEvent from '@micro-zoe/micro-app/polyfill/jsx-custom-event'

import React, { useState } from 'react'

import microApp from '@micro-zoe/micro-app'

export default function Card() {

  const [ cards ] = useState([
    {
      name: 'card1',
      url: 'http://localhost:4441'
    },
    // {
    //   name: 'card2',
    //   url: 'http://localhost:4441'
    // },
    // {
    //   name: 'card3',
    //   url: 'http://localhost:4441'
    // },
  ])


  const send2child = ()=> {
    microApp.forceSetData('card1', {
      type: 'save',
    })
  }

  return (
    <>
      {
        cards.map(({ name, url })=>
          <div key={name}>
            <micro-app
              name={name}
              url={url}
              data={ { type: 'init', id: 123, name: 'Namo' } }
              ></micro-app>
              <button onClick={ send2child } type="button">主应用发送数据</button>
          </div>
        )
      }
    </>
  )
}
