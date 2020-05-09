import React from 'react';
import './Product.css'

class Product extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<div className="Product">
            <h1>{this.props.title}</h1>
            <p>{this.props.children}</p>
            <div>${this.props.price}</div>
        </div>)
    }
}

export default Product;

// export function Product(props) {
//     return (<div className='Product'>
//         <h1>{props.title}</h1>
//         <p>{props.children}</p>
//         <div>${props.price}</div>
//     </div>);
// }