import React from 'react';
import {Card} from '../card/card.component';

import './card-list.styales.css';

export const CardList = props=>{
    return <div className='card-list'>
    {props.superheroes.map((hero) => (
        <Card key={hero.id} hero={hero}/>
      ))}
    </div>;
}