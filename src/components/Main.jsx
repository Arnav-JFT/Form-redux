import React from 'react'
import Card1 from './Card'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const Main = () => {
    const navigate = useNavigate()
    // const cardData = useSelector(selectCard)
    const cardData = useSelector(state => state.card.list)

  return (
    <div style={{padding:"1rem 1rem"}}>
      {console.log(cardData)}
        <div style={{marginBottom:"1rem"}}>
        <Button onClick={()=>navigate('/form')} variant="primary" size="lg">
          Form
        </Button>
        </div>
        <div style={{display:"flex" , gap:"1rem" , flexWrap:"wrap"}}>
            {
              cardData && cardData.map((ele,index)=>{
                return <Card1 key={uuidv4()} mainKey={index} name={ele.name} address={ele.address} age={ele.age} email={ele.email}/>
              })
            }
        </div>
    </div>
  )
}

export default Main