
import PropTypes from 'prop-types'
import Card from "react-bootstrap/Card";


function ItemsPT(props) {
  ItemsPT.propTypes = {
    Name: PropTypes.string.isRequired,
    Price: PropTypes.number.isRequired,
    Quantity: PropTypes.number.isRequired

  }
  return (
    <Card className="col-sm-6 col-md-4 col-lg-3 m-4">
      <div className="flex">
        <div className="card-body card-text">
          <h4 className="card-title">
            <p>{props.Name}</p>

          </h4>
          <p><b>Price :</b> £{props.Price}</p>
          <p><b>Number of items: </b>{props.Quantity}</p>
          <img src={props.uploadImages}
            className='item-images'
            alt="itemImages" />

        </div>
        <div>
        </div>
      </div>
    </Card>
  );
}

export default ItemsPT;