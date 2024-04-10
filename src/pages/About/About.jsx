import React from "react";
import "./About.css";
import aboutImg from "../../images/about-img.jpg";
import Navbar from "../../components/Navbar/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <section className="about">
        <div className="container">
          <div className="section-title">
            <h2>About</h2>
          </div>

          <div className="about-content grid">
            <div className="about-img">
              <img src={aboutImg} alt="" />
            </div>
            <div className="about-text">
              <h2 className="about-title fs-26 ls-1">About BOOKPEDIA</h2>
              <p className="fs-17 justify">
                At Bookpedia, we believe in the power of books to inspire,
                educate, and entertain. Whether you're an avid reader, a casual
                book lover, or someone just diving into the world of literature,
                our app is designed to cater to your needs and enhance your
                reading experience. Discover a World of Books With our extensive
                collection spanning various genres, authors, and themes, you'll
                find something for every taste and interest. From timeless
                classics to contemporary bestsellers, from gripping mysteries to
                heartwarming romances, our curated selection ensures there's
                always a new adventure waiting for you to explore.
              </p>
              <p className="fs-17 justify">
                Join a vibrant community of book enthusiasts to discuss your
                favorite reads, share recommendations, and connect with
                like-minded readers from around the world. Engage in meaningful
                conversations, participate in book clubs, and broaden your
                literary horizons together.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
