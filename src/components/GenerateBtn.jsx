import shine from '../assets/shine.png';
import { useContext } from 'react'; 
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom'; 
import { motion } from 'framer-motion'; 

const Header = () => {
  const { user, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();

  const onClickHandler = () => {
    console.log('Button clicked!');  // Debug log
    if (user) {
      navigate('/Result');
    } else {
      setShowLogin(true);  // This triggers the login modal (or state change)
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
    </motion.div>
  );
};

export default Header;

