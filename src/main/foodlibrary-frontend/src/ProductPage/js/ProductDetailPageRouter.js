import React, {useEffect, useState} from 'react';

import TopBar from "../../defaultDiv/js/TopBar";
import ProductDetailPage from "./ProductDetailPage";


const ProductDetailPageRouter = ({match}) => {
    const [productInfo, setProductInfo] = useState(match.params.productInfo);
    return (
        <div>
            <TopBar/>
            <ProductDetailPage productInfo={productInfo}/>
        </div>
    );

}

export default ProductDetailPageRouter;