import { motion } from "framer-motion";
import shine from '../assets/shine.png';
import Dress from '../assets/Dress.webp';
import Girl from '../assets/Girl.webp';
import Rabbit from '../assets/Rabbit.webp';
import Fox from '../assets/Fox.webp';
import Cat from '../assets/Cat.webp';
import boy from '../assets/boy.webp';
import cartoon from '../assets/cartoon.webp';
import crown from '../assets/crown.webp';
import rich from '../assets/rich.webp';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';


const Header = () => {
  const { user, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();
  const images = [Dress, boy, Girl, Rabbit, Fox, cartoon, crown, Cat, rich];

  const onClickHandler = () => {
    if (user) {
      navigate('/Result');
    } else {
      setShowLogin(true); 
    }
  };

  return (
    <motion.div
      className="flex flex-col justify-center items-center text-center my-20"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="text-stone-500 inline-flex text-center gap-2 bg-white px-5 py-1 rounded-full border border-neutral-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <p>Best Text to Image generator ˚.🎀⋆</p>
      </motion.div>
      <motion.h1
        className="text-3xl max-w-[280px] sm:text-6xl sm:max-w-[560px] mx-auto mt-5 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 2 }}
      >
        Turn Text to <span className="inline-block whitespace-nowrap text-blue-600">Image, in Seconds.</span>
      </motion.h1>
      <motion.p
        className="text-center max-w-lg mx-auto mt-3 text-sm sm:text-base"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 2 }}
      >
        Unleash Your Creativity with AI, turn your imagination into visual art in seconds - just type, and watch the magic happen.
      </motion.p>
      <motion.button
        onClick={onClickHandler}
        className="sm:text-base text-white bg-black w-auto mt-6 px-10 py-2 flex items-center gap-2 rounded-full"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, opacity: { delay: 0.8, duration: 1 } }}
      >
        Generate Images
        <img src={shine} alt="" className="w-4 h-4" />
      </motion.button>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="flex flex-wrap justify-center gap-4 mt-6"
      >
        {images.map((src, index) => (
          <motion.img
            whileHover={{ scale: 1.05, duration: 0.1 }}
            key={index}
            src={src}
            alt={`Image ${index}`}
            width={60}
            className="rounded-lg hover:scale-105 transition-all"
          />
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-2 text-sm text-center"
      >
        <p>Generated images from imagify</p>
      </motion.div>
    </motion.div>
  );
};

export default Header;

    
