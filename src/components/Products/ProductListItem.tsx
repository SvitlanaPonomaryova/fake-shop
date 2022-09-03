import { Button, Card, CardActions, CardContent } from '@mui/material'
import React from 'react'
//import classes from './ProductListItem.module.scss'//
import './ProductListItem.scss'

type ProductProps = {
    name: string
    description: string
    type: string
    capacity: number
    price: number
}

const ProductListItem = ({
    name,
    description,
    type,
    capacity,
    price,
}: ProductProps) => {
    return (
        <Card>
            <CardContent>
                <h4 className="product-title">{name}</h4>
                <div className="product-description">{description}</div>
                <div className={'product-features red'}>Type: {type}</div>
                <div className="product-featured">Capacity: {capacity}Gb</div>
                <div className="product-price">$ {price}</div>
            </CardContent>
            <CardActions>
                <Button variant="contained">Add to cart</Button>
            </CardActions>
        </Card>
    )
}

export default ProductListItem
