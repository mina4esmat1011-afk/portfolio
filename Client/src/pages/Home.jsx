import { useEffect, useRef } from "react";
import { Progress } from "flowbite-react";
import profilePic from '../assets/Profile.jpeg'
import { FaLinkedin, FaTelegram, FaWhatsapp } from 'react-icons/fa' 
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);


export default function Home() {

    const paragraphRef = useRef(null);

    useEffect(() => {
    const split = new SplitText(paragraphRef.current, { type: "chars" });

    gsap.from(split.chars, {
      opacity: 0,
      duration: 0.01,
      stagger: 0.01,
      ease: "none",
      scrollTrigger: {
        trigger: paragraphRef.current,
        start: "top 80%",
      },
    });

    return () => {
      split.revert();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section className="px-8 py-16">
      <div className="text-center">
        <h1 className="text-5xl font-serif font-bold inline-flex items-center gap-3">
          <span className="w-1 h-10 bg-red-600"></span>
          My portfolio
        </h1>
        <div className="w-40 mx-auto mt-2 flex flex-col gap-1">
          <div className="h-0.5 bg-red-600"></div>
          <div className="h-0.5 bg-black"></div>
        </div>
        <br></br>
        <div className="flex flex-col gap-2">
          <Progress color="red" progress={45} size="sm" />
          
        </div>
        <p className="text-gray-500 mt-8 tracking-widest text-sm uppercase p-2">
          Full-stack applications built with MongoDB, Express, React and Node.js
        </p>
      </div>

      <div className="flex gap-12 items-start mt-16 max-w-5xl mx-auto">
        
        <div className="relative flex-shrink-0">
          <div className="absolute -left-6 -top-4 w-56 h-72 border border-gray-300"></div>

          <div className="relative w-56 h-72 group overflow-hidden shadow-lg">
            
            <img 
              src={profilePic} 
              alt="Mina Esmat pic" 
              className="w-full h-full object-cover grayscale transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-x-0 bottom-0 h-16 bg-black/75 backdrop-blur-sm flex items-center justify-center gap-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
              
              <a 
                href="https://www.linkedin.com/in/mina-esmat-7a16371a7" 
                target="_blank" 
                rel="noreferrer" 
                className="text-white hover:text-red-500 transition-colors text-xl"
              >
                <FaLinkedin />
              </a>

              <a 
                href="https://t.me/@MinaEsmat" 
                target="_blank" 
                rel="noreferrer" 
                className="text-white hover:text-red-500 transition-colors text-xl"
              >
                <FaTelegram />
              </a>

              <a 
                href="https://wa.me/201016678163" 
                target="_blank" 
                rel="noreferrer" 
                className="text-white hover:text-red-500 transition-colors text-xl"
              >
                <FaWhatsapp />
              </a>

            </div>

          </div>
        </div>

        <div className="flex-1">
          <h2 className="text-4xl font-serif font-bold inline-flex items-center gap-3 mb-6">
            <span className="w-1 h-9 bg-red-600"></span>
            HELLO,
          </h2>

          <p ref={paragraphRef} className="text-gray-700 leading-relaxed mb-6">
            "I am a Junior MERN Stack Developer with a strong foundation in
            HTML, CSS, and JavaScript. I specialize in building responsive,
            user-friendly web applications using ReactJS, NodeJS, and MongoDB. I have
            experience working with both SQL (MySQL) and NoSQL databases, and I am
            passionate about writing clean code and continuously learning modern web
            technologies."
          </p>

          <hr className="border-gray-300 mb-6" />

          <div className="grid grid-cols-2 gap-y-2 mb-8">
            <p><span className="font-bold">NAME :</span> <span className="text-gray-600">MINA ESMAT</span></p>
            <p><span className="font-bold">Job Title :</span> <span className="text-gray-600">MERN stack Developer</span></p>
            <p><span className="font-bold">Location :</span> <span className="text-gray-600">Cairo</span></p>
            <p><span className="font-bold">Freelancer :</span> <span className="text-gray-600">available for hire</span></p>
            <p><span className="font-bold">Age :</span> <span className="text-gray-600">23 years</span></p>
            <p><span className="font-bold">Email :</span> <span className="text-gray-600">mina4esmat1011@gmail.com</span></p>
          </div>

          <div className="flex gap-4">
            <button className="bg-red-600 text-white px-6 py-2 hover:bg-red-700 transition-colors duration-200">
              <a href=""></a>download CV
            </button>
            <button className="bg-red-600 text-white px-6 py-2 hover:bg-red-700 transition-colors duration-200">
              Hire Me
            </button>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 py-16 px-8 mt-16">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-serif font-bold inline-flex items-center gap-3">
            <span className="w-1 h-9 bg-red-600"></span>
            our service
          </h2>
          <div className="w-40 mx-auto mt-2 flex flex-col gap-1">
            <div className="h-0.5 bg-red-600"></div>
            <div className="h-0.5 bg-black"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto text-center">
          <div>
            <h3 className="font-bold text-lg mb-2">
              <span className="text-red-600">◆</span> Frontend developer
            </h3>
            <p className="text-gray-600 text-sm">
              Building responsive and interactive user interfaces.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">
              <span className="text-red-600">◆</span> Backend Developer
            </h3>
            <p className="text-gray-600 text-sm">
              Creating secure APIs and managing databases.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">
              <span className="text-red-600">◆</span> MERN STACK DEVELOPER
            </h3>
            <p className="text-gray-600 text-sm">
              Developing complete web applications from A to Z.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-amber-50 py-14 px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto text-center">
          <div>
            <div className="text-red-600 text-2xl mb-1">◆</div>
            <p className="text-2xl font-bold text-gray-700">5</p>
            <p className="text-gray-500 text-sm">projects</p>
          </div>

          <div>
            <div className="text-red-600 text-2xl mb-1">◆</div>
            <p className="text-2xl font-bold text-gray-700">4</p>
            <p className="text-gray-500 text-sm">complete projects</p>
          </div>

          <div>
            <div className="text-red-600 text-2xl mb-1">◆</div>
            <p className="text-2xl font-bold text-gray-700">8</p>
            <p className="text-gray-500 text-sm">Technologies Mastered</p>
          </div>
        </div>
      </div>
    </section>
  );
}