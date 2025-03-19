import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function ProductCards({item}) {

  return (
    <>
         <Card className='cards' >
      <Card.Img variant="top" src={item.image}className='proImage' />
      <Card.Body className=''>
        <Card.Title className=''>{item.title}</Card.Title>
        <Card.Text>
        {item.description.slice(0,100)}
        </Card.Text>
        <div className="proContens">
        <Card.Text className='fw-bold m-0'>{item.price}</Card.Text>
        <Button variant="primary" className='proBtn p-0'>View details</Button>
 <Button variant="success" className='proBtn p-0' >add to cart</Button>





        
        </div>
      </Card.Body>
    </Card>
      
   </>
  )
}

export default ProductCards
