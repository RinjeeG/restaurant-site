import demoVid from '../assets/video/demo.mp4';

const Home = () => {


    return (
        <div>
            {/* Hero Section with Background Video */}
            <section className="hero">
                <video autoPlay loop muted playsInline className="video-bg">
                    <source src= {demoVid} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="hero-content d-flex align-items-center justify-content-center text-center">
                    <div>
                        <h1 className="display-4 text-white">Limbu Kitchen</h1>
                        <p className="lead text-white">Authentic Nepali Taste</p>
                        <a href="#menu" className="btn btn-primary btn-lg">View Our Menu</a>
                    </div>
                </div>
            </section>
        </div>
            );
};

            export default Home;