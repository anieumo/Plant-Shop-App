import React from 'react';
import Product from './Product';



console.log(this.props.productList)

function Inventory(props) {
    const { product } = props;
        //<div key={item.id}>
            //{item.value}
            //</div>
    return (
        <inventory className="column2 block">
            <h2>Houseplants</h2>
            <div className="card">
                <Product product={product}></Product>
            </div>
        </inventory>
    );
}


export default Inventory;