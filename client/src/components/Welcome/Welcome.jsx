import React from 'react'

import './Welcome.css'

const Welcome = () => {
  return (
    <div className='welcome-content'>
      <p className='welcome-text'>
        Hay mujeres<br />
        que aparecen como los aciertos:<br />
        a tiempo y sin esperarlas.<br />
        Que se atreven y se quedan y tienen<br />
        el pelo del color de tu almohada,<br />
        que se agitan y temes y dan la vuelta<br />
        a tus excusas convirtiéndolas en motivos.<br />
        Que te aman sin evitarlo<br />
        y amas sobre todo por supuesto.<br />
        <br />
        Y estoy yo.<br />
        Que soy una en todas esas mujeres.<br />
        <br />
        Y estás tú.<br />
        Que eres todas esas mujeres en una.<br />
        <br />
        -Elvira Sastre-
      </p>
      <img className='welcome-img' src='https://i.imgur.com/o1noxYb.jpg' alt='default' />
    </div>
  )
}

export default Welcome
