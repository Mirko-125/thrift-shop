import Navbar from "@/components/my-components/Navbar";
import Scroll from "@/components/my-components/Scroll";
import Footer from "@/components/my-components/Footer";

function Article() 
{
    return (
        <>
            <Scroll />
            <Navbar />
            <div className="article-page">
                <div className="images">
                    VERY HOT IMAGE
                </div>
                <div className="article-shopping">
                    <div className="article-name">Name</div>
                    <div className="article-idcode">Id</div>
                    <div className="article-price">Price</div>
                    
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Article;
