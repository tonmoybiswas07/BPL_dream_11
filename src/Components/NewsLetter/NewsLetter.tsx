

const NewsLetter = () => {
    return (
      
<div className="bg-newsletter min-h-[320px] w-[90%] md:w-full max-w-6xl mx-auto rounded-3xl absolute -top-40 left-1/2 -translate-x-1/2 px-6 md:px-12 flex flex-col items-center justify-center shadow-2xl">

  <h2 className="text-center text-black font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
    Subscribe to our Newsletter
  </h2>

  <p className="text-center text-black/70 text-base md:text-lg lg:text-xl max-w-2xl mb-8">
    Get the latest updates, exclusive offers, and news delivered straight to your inbox!
  </p>

  <div className="flex flex-col sm:flex-row w-full max-w-xl gap-3">
    
    <input
      className="flex-1 h-14 px-5 rounded-xl border-2 border-black/20 bg-white/80 backdrop-blur-sm outline-none focus:border-black focus:ring-2 focus:ring-black/10 transition-all placeholder:text-gray-500"
      type="email"
      placeholder="Enter your email address"
    />

    <button className="h-14 px-8 bg-black text-white font-semibold rounded-xl hover:bg-gray-800 active:scale-95 transition-all duration-200 shadow-lg">
      Subscribe
    </button>

  </div>

  <p className="text-sm text-black/50 mt-5">
    No spam. Unsubscribe anytime.
  </p>

</div>


    );
};

export default NewsLetter;