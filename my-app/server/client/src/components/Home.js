import demoVid from '../assets/video/demo.mp4';

const Home = () => {
  return (
    <div>
      {/* Video Section */}
      <section className="video-section">
        <video autoPlay loop muted playsInline className="video-bg" onLoadedData={() => console.log("Video loaded!")}>
          <source src={demoVid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-content">
          <h1 className="display-4">Limbu Kitchen</h1>
          <p className="lead">Authentic Nepali Taste</p>
          <a href="#menu" className="btn btn-primary">View Our Menu</a>
        </div>
      </section>

      {/* Other sections like About, Menu Preview, etc. */}
      <section className="about py-5">
        <div className="container text-center">
          <h2>About Limbu Kitchen</h2>
          <p className="mt-4">
            At Limbu Kitchen, we bring the heart of Nepal to your plate. Our chefs craft each dish with traditional recipes,
            using fresh, locally sourced ingredients.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
