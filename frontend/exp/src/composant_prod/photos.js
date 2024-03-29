import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';


function Photo(props) {
  return (
    <Card ClassName='col-md-3' style={{ width: '18rem' ,margin:'10px'}}>
      <Card.Img variant='top' src={props.pic} style={{ height: '12rem',padding:'10px',borderRadius:'20px' }}/>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          <p>{props.description}</p> 
          
        </Card.Text>
        <Button variant="primary">Detail</Button>
      </Card.Body>
    </Card> 
  );
}

export default Photo;