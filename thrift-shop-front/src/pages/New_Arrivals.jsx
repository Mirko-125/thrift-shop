import Navbar from "@/components/my-components/Navbar"
import Resizable_Gallery from "@/components/my-components/Resizable_Gallery";
import Footer from "@/components/my-components/Footer"

function New_Arrivals() 
{
    return (
        <>
            <Navbar/>
            <br/>
            <br/>
            <br/>
            <div className="location">
                <h1>
                    Home / New Arrivals
                </h1>
            </div>
            <Resizable_Gallery/>
            <br/>
            <br/>
            <br/>
            <Footer/>
        </>
    )
}

export default New_Arrivals;
