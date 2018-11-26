import React from 'react'

const ProductSummary = ({product}) => {
    return(
        <div className="card z-depth-0 product-summary">
            <div className="card-content  blue-grey-text text-darken-4">
                <span className="card-title">{product.title}</span>
                <p>{product.content}</p>
                <p className="blue-grey-text">10th September, 10am</p>
            </div>
        </div>
    )
}

export default ProductSummary