import React from 'react'

const ProductDetails = (props) => {
    const  id = props.match.params.id;
    return (
        <div className="container section product-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Product Title - {id}</span>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni corrupti odio beatae quas iusto, nobis quia molestias tenetur doloremque ad consectetur quos quasi voluptatibus est voluptate libero sed quaerat laboriosam?</p>
                </div>
                <div className="card-action lighten-4 grey-text">
                    <div>Posted by the Hemul von Hemuli</div>
                    <div>2nd September, 2am</div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
