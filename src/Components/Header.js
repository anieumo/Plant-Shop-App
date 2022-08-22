import Recat from 'react';

function Header(props) {
    return(
        <header className="center navmargins">
            <div>
                <a hyref>
                    <h1>Plant Shop</h1>  
                </a>
            </div>
            <div>
                <a hyref>Home</a>    <a hyref>Cart</a>    <a hyref>Favorites</a>
            </div>
        </header>
    );
}

export default Header;