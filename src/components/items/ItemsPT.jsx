
// import PropTypes from 'prop-types'
// import Card from "react-bootstrap/Card";


// function ItemsPT(props) {
//   ItemsPT.propTypes = {
//     Name: PropTypes.string.isRequired,
//     Price: PropTypes.number.isRequired,
//     Quantity: PropTypes.number.isRequired

//   }
//   return (
//     <Card className="col-sm-6 col-md-4 col-lg-3 m-4">
//       <div className="flex">
//         <div className="card-body card-text">
//           <h4 className="card-title">
//             <p>{props.Name}</p>

//           </h4>
//           <p><b>Price :</b> £{props.Price}</p>
//           <p><b>Number of items: </b>{props.Quantity}</p>
//           <img src={props.uploadImages}
//             className='item-images'
//             alt="itemImages" />

//         </div>
//         <div>
//         </div>
//       </div>
//     </Card>
//   );
// }

// export default ItemsPT;









import PropTypes from 'prop-types'
import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';

function ItemsPT(props) {
  ItemsPT.propTypes = {
    Name: PropTypes.string.isRequired,
    Price: PropTypes.number.isRequired,
    Quantity: PropTypes.number.isRequired

  }
  return (
    <Card style={{ width: '15rem' }} className="col-sm-6 col-md-2 col-lg-3 m-4">
      <Card.Img variant="top" src={props.uploadImages}
            className='item-images'
            alt="itemImages" />
       <Card.Body>
        <Card.Title><p>{props.Name}</p></Card.Title>
              </Card.Body>
            
              <ListGroup className="list-group-flush">
        <ListGroup.Item> <p><b>Price :</b> £{props.Price}</p></ListGroup.Item>
        <ListGroup.Item><p><b>Number of items: </b>{props.Quantity}</p></ListGroup.Item>
      </ListGroup>
      

        
    </Card>
  );
}

export default ItemsPT;