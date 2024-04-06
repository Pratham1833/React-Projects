const Hero = () =>{
    return <main className="hero container">

    <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
        

        <div className="hero-button">
        <button>Shop Now</button>
        <button className="secondray-btn">Category</button>
        </div>

        <div className="shopping">
            <p>Also Available On</p>

            <div className="brand-icon">
            <img src = "/Images/flipkart.png" alt="flipkart Logo"></img>
            <img src = "/Images/amazon.png" alt="amazon Logo"></img>        
            </div>

        </div>


    </div>


    <div className="hero-image">
    <img src = "/Images/shoe_image.png" alt="Shoe Image"></img>  
    </div>


    </main>
};

export default Hero;