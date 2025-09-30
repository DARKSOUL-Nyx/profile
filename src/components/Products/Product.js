import React from "react";
import {products as productData} from '../../data/productData';
import ProductCard from '../ProductCard/ProductCard';
import './Product.css';

const Product = () => {
    return (
        <section id="products" className="products-section">
            <h2 className="section-title">My Projects</h2>
            <div className="products-grid">
                {productData.map((product) => (
                    <ProductCard 
                        key={product.id} 
                        product={product} 
                        description={product.description}
                        imageUrl={product.immageUrl}
                        link={product.link}
                    />
                ))}
            </div>
        </section>
    )
}