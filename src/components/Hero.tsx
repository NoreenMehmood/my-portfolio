import { useEffect } from 'react';
import Navbar from './Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with custom duration
  }, []);

  return (
    <div
      id="hero"
      className="min-h-screen bg-no-repeat bg-left lg:bg-[15%] bg-cover"
      style={{ backgroundImage: "url('/images.png')", backgroundSize: "35%" }}
    >
      <Navbar />
      <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)]">
        <div className="hidden lg:block"></div>
        <div className="text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items-center">
          <div>
            <p data-aos="zoom-in-up">I am</p>
            <p data-aos="zoom-in-up">Noreen</p>
            <p data-aos="zoom-in-up">Mehmood</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

  
