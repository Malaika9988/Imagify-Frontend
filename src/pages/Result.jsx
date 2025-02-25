import { useState, useContext } from 'react';
import { motion } from 'framer-motion'; // Import framer-motion
import { AppContext } from '../context/AppContext'; // Adjust the path as needed
import Child from '../assets/Child.jpg'; // Ensure this path is correct

const Result = () => {
  const [image, setImage] = useState(Child); // Default to the imported Child image
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('');
  const [submitted, setSubmitted] = useState(false); // Added missing state

  const { generateImage } = useContext(AppContext);
  const onSubmitHandler = async (e) =>{
    event.preventDefault()
    setLoading(true)

    if(input){
      const image = await generateImage(input)
      if(image){
        setIsImageLoaded(true)
        setImage(image)
      }
    }
    setLoading(false)
  }


  const downloadImage = () => {
    const link = document.createElement('a');
    link.href = image;
    link.download = 'downloaded-image.jpg';
    link.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const generatedImage = await generateImage(input);
      setImage(generatedImage);
      setSubmitted(true);
    } catch (error) {
      console.error('Error generating image:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveText = (e) => {
    setInput(e.target.value); // Update input state on change
    setSubmitted(false);
  };

  return (
    <motion.form
      className="flex flex-col min-h-[90vh] justify-center items-center"
      onSubmit={handleSubmit}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="relative"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <img src={image} alt="Child" className="max-w-sm rounded" />
        <motion.span
          className="absolute bottom-0 left-0 h-1 bg-blue-500 w-full transition-all duration-[10s]"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 10 }}
        />
      </motion.div>
      {loading ? (
        <motion.p
          className="text-white mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Loading...
        </motion.p>
      ) : null}

      <motion.div
        className="flex w-full max-w-xl bg-neutral-500 text-white text-sm p-0.5 mt-10 rounded-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <input
          type="text"
          placeholder="Describe what you want to generate"
          className="flex-1 bg-transparent outline-none ml-8 max-sm:w-20 placeholder-color"
          value={input}
          onChange={handleRemoveText}
        />
        <motion.button
          type="submit"
          className="bg-zinc-900 px-8 sm:px-12 py-2.5 rounded-full text-white text-lg font-semibold"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          Generate Text
        </motion.button>
      </motion.div>

      {submitted && (
        <motion.div
          className="flex gap-2 flex-wrap justify-center text-center text-white text-sm p-0.5 mt-10 rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <motion.p
            className="bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Generate another image
          </motion.p>

          <motion.button
            type="button"
            className="bg-transparent border border-zinc-900 text-white bg-zinc-900 px-8 py-3 rounded-full cursor-pointer"
            onClick={downloadImage}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
          >
            Download Image
          </motion.button>
        </motion.div>
      )}
    </motion.form>
  );
};

export default Result;




