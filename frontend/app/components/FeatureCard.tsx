import { motion } from "framer-motion";

type FeatureCardProps = {
  title: string;
  description: string;
};

// ----- Feature Card Component -----
function FeatureCard({ title, description } : FeatureCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }} // amount is how much of the element must be visible
      transition={{ duration: 0.5 }}
      className="bg-gray-900 rounded-lg p-6 shadow-md shadow border-3 border-gray-500"
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}

export default FeatureCard;