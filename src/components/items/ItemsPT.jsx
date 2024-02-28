
import PropTypes from 'prop-types'


function ItemsPT(props) {
    ItemsPT.PropTypes = {
        Name:PropTypes.string.isRequired,
        Price:PropTypes.number.isRequired,
        Quantity:PropTypes.number.isRequired
    
    }
    return (  
        <Card>
        <p>{props.Name}</p>
        <p>{props.Price.toFixed(2)}</p>
        <p>{props.Quantity}</p>
        </Card>
           
        );
}

export default ItemsPT;