import { motion } from 'framer-motion';
import vision from '../assets/vision.png';
import magic from '../assets/magic.png';
import downloads from '../assets/downloads.png';

const Steps = () => {
  const steps = [
    { title: "Describe your Vision", description: "Turn your ideas into words and set the foundation for creativity.", image: vision },
    { title: "Watch the Magic", description: "See your words come alive as stunning visuals in seconds.", image: magic },
    { title: "Download & Share", description: "Save and share your masterpiece with the world effortlessly.", image: downloads },
  ];

  return (
    <div className="flex flex-col items-center justify-center my-32">
      <motion.h1
        className="text-3xl sm:text-4xl font-semibold mb-2"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        How it Works
      </motion.h1>
      <motion.p
        className="text-lg text-gray-600 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Transforms Words into Stunning Images
      </motion.p>

      <div className="space-y-8">
        {steps.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-4 p-5 px-8 bg-white/20 border cursor-pointer shadow-md transition-all duration-300 ease-in-out hover:bg-gray-100 hover:shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + index * 0.3, duration: 0.8 }}
            whileHover={{ scale: 1.05, rotate: -2 }}  // Add slight rotation on hover
            whileTap={{ scale: 0.95 }}  // Tap effect
          >
            <motion.img
              src={item.image}
              alt={item.title}
              className="w-8 h-8"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.7 + index * 0.3, duration: 0.5 }}
            />
            <div>
              <motion.h2
                className="text-sm font-bold text-blue-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.3, duration: 0.6 }}
              >
                {item.title}
              </motion.h2>
              <motion.p
                className="text-sm text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.3, duration: 0.6 }}
              >
                {item.description}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Steps;




