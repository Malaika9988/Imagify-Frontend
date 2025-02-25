import mirror from '../assets/mirror.webp';

const Description = () => {
  return (
    <div className="flex flex-col items-center justify-center my-24 p-6 md:px-28">
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2">Create AI Images</h1>
      <p className="text-gray-500 mb-8">Turn Your Imagination into Visuals</p>

      <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
        <img src={mirror} alt="Mirror" className='w-64 md:w-72 lg:w-80 xl:w- 72 rounded-lg hover:scale-105 transition-all' />
        <div>
 <h2 className='text-3xl font-medium max-w-lg mb-4'>Introducing the AI Powered Text to Image Generator </h2>
<p className='text-gray-600 mb-4 '>Welcome to Imagify – your AI-powered tool to turn words into beautiful images!

Simply type what you’re imagining, and our AI will create the perfect picture for you in seconds. Whether it’s art, scenes, or creative designs, Imagify makes it easy for everyone to bring their ideas to life.

No special skills needed—just your imagination. Start creating with Imagify and see your words transform into amazing visuals! make it more interesting </p>
 <p className='text-gray-600 mb-4'>It’s easy, fast, and fun! No special skills or tools are needed—just your creativity. Whether you’re an artist, content creator, or simply someone who loves exploring new ideas, Imagify is here to bring your vision to life.</p>
        </div>
      </div>
    </div>
  );
}

export default Description;

