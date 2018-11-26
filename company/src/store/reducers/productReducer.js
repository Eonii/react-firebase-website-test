const initState = {
    products: [
        {id: '1', title: 'Product Title', content: 'Content'},
        {id: '2', title: 'Product Title', content: 'Content'},
        {id: '3', title: 'Product Title', content: 'Content'}
    ]
}

const productReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PRODUCT':
            console.log('created product', action.product)
    }
    return state
}

export default productReducer