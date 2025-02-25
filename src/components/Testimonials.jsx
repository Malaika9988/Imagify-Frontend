import { motion } from 'framer-motion';
import Profile1 from '../assets/Profile 1.webp';
import Profile2 from '../assets/Profile 2.jpg';
import Profile3 from '../assets/Profile 3.jpg';

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center justify-center my-20 py-12">
      <motion.h1
        className="text-3xl sm:text-4xl font-semibold mb-2"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Customer Testimonials
      </motion.h1>
      <motion.p
        className="text-gray-500 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        What our Users are Saying
      </motion.p>

      <div className="flex flex-wrap gap-6 justify-center">
        {/* User 1 */}
        <motion.div
          className="flex flex-col items-center p-6 rounded-lg shadow-lg w-64 hover:scale-105 transition-all duration-300"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={Profile1}
            alt="Sarah L."
            className="w-20 h-20 rounded-full mb-4"
          />
          <h2 className="font-medium text-lg">Sarah L.</h2>
          <p className="text-sm text-gray-500">Graphic Designer</p>
          <div className="flex mt-2">
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
          </div>
          <motion.p
            className="text-gray-600 text-center mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            "Imagify is amazing! It turned my ideas into stunning visuals effortlessly."
          </motion.p>
        </motion.div>

        {/* User 2 */}
        <motion.div
          className="flex flex-col items-center p-6 rounded-lg shadow-lg w-64 hover:scale-105 transition-all duration-300"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={Profile2}
            alt="James P."
            className="w-20 h-20 rounded-full mb-4"
          />
          <h2 className="font-medium text-lg">James P.</h2>
          <p className="text-sm text-gray-500">Content Creator</p>
          <div className="flex mt-2">
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
          </div>
          <motion.p
            className="text-gray-600 text-center mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            "I love using Imagify! It's so easy and produces incredible results."
          </motion.p>
        </motion.div>

        {/* User 3 */}
        <motion.div
          className="flex flex-col items-center p-6 rounded-lg shadow-lg w-64 hover:scale-105 transition-all duration-300"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={Profile3}
            alt="Emily R."
            className="w-20 h-20 rounded-full mb-4"
          />
          <h2 className="font-medium text-lg">Emily R.</h2>
          <p className="text-sm text-gray-500">Social Media Manager</p>
          <div className="flex mt-2">
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
          </div>
          <motion.p
            className="text-gray-600 text-center mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
          >
            "This tool has transformed how I create content."
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
