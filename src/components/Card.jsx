import React from 'react'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateCard } from '../CardSlice';



const Card1 = (props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const clickHandler = (idx)=>{
    dispatch(updateCard(idx))
    navigate('/form')
  }
  return (
    <div style={{cursor:"pointer"}} onClick={()=>clickHandler(props.mainKey)}>
      <Card
          bg={'dark'}
          text={'light'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header>{props.name}</Card.Header>
          <Card.Body>
            <Card.Title>{props.address}</Card.Title>
            <Card.Text>
              Email :{props.email}
            </Card.Text>
            <Card.Text>
              Age :{props.age}
            </Card.Text>
          </Card.Body>
        </Card>
    </div>
  )
}

export default Card1