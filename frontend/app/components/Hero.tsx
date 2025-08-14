
// ----- Hero Section Component -----
function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-20 px-6 min-h-[80vh] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/concert-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Overlay to darken video */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>

      {/* Text Content */}
      <div className="relative z-20">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          Your Concert Memories, Logged.
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Track the concerts you’ve attended, review your experiences, and
          discover new shows based on your music taste.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#get-started"
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors"
          >
            Get Started
          </a>
          <a
            href="#learn-more"
            className="px-6 py-3 border border-gray-500 hover:bg-gray-800 rounded-lg font-semibold transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;