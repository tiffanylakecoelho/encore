import FeatureCard from "./FeatureCard";

// ----- Features Section Component -----
function Features() {
  return (
    <section id="features" className="py-20 px-8 bg-black">
      <h2 className="text-4xl font-bold text-center mb-12">
        Why Use Encore?
      </h2>
      <div className="grid gap-12 md:grid-cols-3 max-w-6xl mx-auto">
        <FeatureCard
          title="Log Every Show"
          description="Quickly add concerts you’ve attended with date, location, and setlist details."
        />
        <FeatureCard
          title="Write Reviews"
          description="Share your experiences with other fans and rate your favorite performances."
        />
        <FeatureCard
          title="Get Recommendations"
          description="Discover upcoming shows based on your listening habits and past attendance."
        />
      </div>
    </section>
  );
}

export default Features;