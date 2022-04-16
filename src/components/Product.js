import React from "react";
import { Card } from "react-bootstrap";
export default function Product(props){
    const {product, onAdd, currentCountry} = props;
    return(
        <div className="products">
            <Card >
                <Card.Header>
                    <h3>{product.title}</h3>
                </Card.Header>
                <Card.Img variant="top" width="200px" hight="200px"  src={product.image} alt={product.title} />
                <Card.Body >
                    <Card.Subtitle variant="bottom" style={{paddingBottom:10 }}>
                        <span> {currentCountry.currency} {(product.price * currentCountry.rate).toFixed(2)}</span>
                        <div><button onClick={()=>onAdd(product)}>Add To Cart</button></div>
                    </Card.Subtitle>
                </Card.Body>
                <Card.Footer variant="bottom">
                    <p>
                    {product.description}
                    </p>
                </Card.Footer>
            </Card>
        </div>
    );
}