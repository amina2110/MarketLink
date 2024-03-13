import React, {useEffect, useState} from 'react';
import './ListProduct.css'
import cross_icon from '../../assets/cross_icon.png'

const ListProduct = () => {

    const [allProducts, setAllProducts] = useState([])

    const fetchInfo = async () => {
        await fetch(`http://localhost:4000/allproducts`)
            .then((res) => res.json())
            .then((data) => {
                setAllProducts(data)
            })
    }

    useEffect(() => {
        fetchInfo()
    }, [])

    const removeProduct = async (id) => {
        await fetch('http://localhost:4000/removeproduct', {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({id: id})
        })

        await fetchInfo()
    }

    return (
        <div className='list-product'>
            <h1 className={'title'}>
                All Products List
                <hr/>
            </h1>



            {/*<div className="listproduct-format-main">*/}
            {/*    <p>Products</p>*/}
            {/*    <p>Title</p>*/}
            {/*    <p>Old Price</p>*/}
            {/*    <p>New Price</p>*/}
            {/*    <p>Category</p>*/}
            {/*    <p>Remove</p>*/}
            {/*</div>*/}

            {/*<div className="listproduct-allproducts">*/}
            {/*    <hr/>*/}
            {/*    {allProducts.map((product, index) => {*/}
            {/*        return <>*/}
            {/*            <div key={index} className="listproduct-format-main listproduct-format">*/}
            {/*            <img src={product.image} className='listproduct-product-icon' alt=""/>*/}
            {/*            <p>{product.name}</p>*/}
            {/*            <p>${product.old_price}</p>*/}
            {/*            <p>${product.new_price}</p>*/}
            {/*            <p>{product.category}</p>*/}
            {/*            <img onClick={() => removeProduct(product.id)} src={cross_icon} alt="" className="listproduct-remove-icon"/>*/}
            {/*        </div>*/}
            {/*            <hr/>*/}
            {/*        </>*/}


            {/*    })}*/}
            {/*</div>*/}

            <table className='listproduct-format-main'>

                <thead>
                <tr>
                    <th>Products</th>
                    <th>Title</th>
                    <th>Old Price</th>
                    <th>New Price</th>
                    <th>Category</th>
                    <th>Remove</th>
                </tr>
                </thead>

                <tbody>
                {allProducts.map((product, index) => (
                    <tr className={'listproduct-allproduct-items'} key={index}>
                        <td><img src={product.image} className='listproduct-product-icon' alt=""/></td>
                        <td><p>{product.name}</p></td>
                        <td><p>${product.old_price}</p></td>
                        <td>${product.new_price}</td>
                        <td><p>{product.category}</p></td>
                        <td><img onClick={() => removeProduct(product.id)} src={cross_icon} alt="" className="listproduct-remove-icon"/></td>
                    </tr>
                ))}
                </tbody>
            </table>


        </div>
    );
};

export default ListProduct;
