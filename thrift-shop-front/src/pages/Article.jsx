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
        "colour": "LightBlue",
        "available": true,
        "size": ["XS", "S", "M", "L", "XL"],
        "picture": [`${url}/sample6.jpg`, `${url}/sample6_2.jpg`, `${url}/sample6_3.jpg`],
        "category": "Pants",
        "description": "perfect for skaters"
    }

    console.table(tempArticle);

    return (
        <>
            <Scroll />
            <Navbar />
            <div className="article-page">
                <div className="images">
                    {tempArticle.picture.map((imgSrc, index) => (
                        <img key={index} src={imgSrc} alt={`Article Image ${index + 1}`} />
                    ))}
                </div>
                <div className="article-shopping">
                    WORK IN PROGRESS
                    <div className="article-name">{tempArticle.name}</div>
                    <div className="article-idcode">{tempArticle.idcode}</div>
                    <div className="article-price">${tempArticle.price}</div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Article;
