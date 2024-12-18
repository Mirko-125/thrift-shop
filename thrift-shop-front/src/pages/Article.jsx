import Navbar from "@/components/my-components/Navbar";
import Scroll from "@/components/my-components/Scroll";
import Footer from "@/components/my-components/Footer";

import { url } from '../links.js';

function Article() 
{
    const tempArticle = 
    {
        "idcode": "BLS0148",
        "name": "Baggy jeans",
        "price": 15.99,
        "available": true,
        "size": ["XS", "S", "M", "L", "XL"],
        "picture": [`${url}/sample6.jpg`, `${url}/sample2.jpg`, `${url}/sample3.jpg`],
        "category": "Pants",
        "description": "perfect for skaters"
    }

    console.table(tempArticle);

    return (
        <>
            <Scroll />
            <Navbar />
            <br />
            <br />
            <br />
            <div className="location">
                <h1>
                    Home / Clothing or Accesories? / {tempArticle.category} / {tempArticle.name}
                </h1>
            </div>
            <br />
            <div className="article-page">
                <div className="a-images">
                    {tempArticle.picture.map((imgSrc, index) => (
                        <div className="a-image" key={index}>
                            <img src={imgSrc} alt={`Article Image ${index + 1}`} />
                        </div>
                    ))}
                </div>
                <div className="a-shopping">
                    <div className="subtitle">{tempArticle.name}</div>
                    <div className="code">{tempArticle.idcode}</div>
                    <div className="price">${tempArticle.price}</div>
                    <br />
                    <div className="underline"/>
                    <div className="sizes-t">Sizes</div>
                    <br />
                        <div className="sizes">
                        {tempArticle.size.map((size, index) => (
                            <div key={index} className="size">
                                {size}
                            </div>
                        ))}
                        </div>
                    <br />
                    <br />
                    <div className="buy-or-favorite">
                        <button className="form-submit">
                            Add to shopping bag
                            <span>Good taste!</span>
                        </button>
                        <button onClick={()=>console.log("PRINTF")}>
                            <div className="tooltip" data-tooltip="Add to favorites">
                                <div className="diamond"></div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <br />
            <Footer />
        </>
    );
}

export default Article;
