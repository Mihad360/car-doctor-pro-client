/* eslint-disable react/no-unescaped-entities */
import { products } from "@/app/lib/products";
import Image from "next/image";

const Products = () => {
    return (
        <div className="max-w-7xl mx-auto pb-12">
            <div>
            <h1 className="text-lg text-[#FF3811] font-semibold pb-3 text-center">Popular Products</h1>
                <p className="text-4xl font-bold text-black pb-3 text-center">Browse Our Products</p>
                <p className="pb-5 text-base text-center">the majority have suffered alteration in some form <br /> by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {
                        products.map(product => <div key={product.id}><div className="card bg-base-100 w-96 border">
                            <figure className="px-6 pt-6">
                            <Image className="h-60 w-full border rounded-lg" width={150} height={150} src={product.image} alt="image"/>
                            </figure>
                            <div className="card-body items-center text-center">
                              <h2 className="card-title">{product.title}</h2>
                              <p className="text-amber-600 font-medium">{product.rating}</p>
                              <div className="card-actions">
                                <p className="text-[#FF3811] text-lg font-semibold">${product.price}</p>
                              </div>
                            </div>
                          </div></div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;