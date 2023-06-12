import './App.css'
import { useState } from 'react'
import Card from './components/Card'
import Cards from './components/Cards'
import cardsArray from './assets/cardsArray'
import ICardsList from './assets/types'


function App() {
  const [cardList, _setCardsList] = useState<ICardsList[]>(cardsArray)
  return (
    <Cards>
      {cardList.map((cardItem,index) => {
        return <Card {...cardItem} key={index}/>})}
    </Cards>


)}

export default App
