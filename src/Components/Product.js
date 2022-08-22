import React, { Component } from 'react';

class List extends Component {
    product = [
        {
            id: '1',
            name: 'Monstera',
            price: 1400,
            image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW9uc3RlcmF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
        },
        {
            id: '2',
            name: 'Philohedron',
            price: 1400,
            image: 'https://images.unsplash.com/photo-1574676130659-a1d0dd4791fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fHBsYW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
        },
        {
            id: '3',
            name: 'Eucalyptus',
            price: 1400,
            image: 'https://images.unsplash.com/photo-1506543277633-99deabfcd722?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzV8fHBsYW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60', 
        },
        {
            id: '4',
            name: 'Succulent',
            price: 1400,
            image: 'https://images.unsplash.com/photo-1563917774416-9f516a3b2fad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjUwfHxwbGFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
        },
        {
            id: '5',
            name: 'Ficus',
            price: 1400,
            image: 'https://images.unsplash.com/photo-1597055181300-e3633a917c9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTEyfHxwbGFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
                
        },
        {
            id: '6',
            name: 'Succulent 2',
            price: 1400,
            image: 'https://images.unsplash.com/photo-1597055181187-1f9b726e2d66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjA5fHxwbGFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
        }
    ];


        productList = this.product.map(product => (
            <Product name={product.name} price={product.price} image={product.image} />
        ));


        render() {
            return <div>{this.productList}</div>
        }
    }

function Product(props) {
    const { product } = props;
    return (
        <div>
            <div>
                <h3>{product.name}</h3>
                <h3>${product.price}</h3>
            </div>
            <div>Add to Cart</div>
        </div>
    );
}

export default Product;