
import PropTypes from 'prop-types'


function ItemsPT(props) {
    ItemsPT.propTypes = {
        Name:PropTypes.string.isRequired,
        Price:PropTypes.number.isRequired,
        Quantity:PropTypes.number.isRequired
    
    }
    return (  
        <div>
        <p>{props.Name}</p>
        <p>{props.Price}</p>
        <p>{props.Quantity}</p>
        </div>
           
        );
}

export default ItemsPT;