import { motion } from 'framer-motion';
import { Layers, Feather, Activity } from 'lucide-react';

export default function ProductInAction() {
  const specs = [
    {
      icon: <Layers className="w-6 h-6 text-primary" />,
      title: "Cell-Structure",
      value: "82%",
      description: "Higher rebound rate than standard EVA foam, ensuring zero compression packing over time."
    },
    {
      icon: <Feather className="w-6 h-6 text-primary" />,
      title: "Material Weight",
      value: "14.2oz",
      description: "Ultralight construction maintains structural durability without adding unnecessary mass."
    },
    {
      icon: <Activity className="w-6 h-6 text-primary" />,
      title: "Energy Return",
      value: "Max",
      description: "Proprietary geometric grid design physically propels the foot forward on strike."
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Anatomy of the Levitate Foam
          </h2>
          <p className="text-secondary text-lg">
            We stripped away the fabric to show you exactly what you're stepping on. 
            No air bubbles, no gimmicks. Just pure, engineered physics.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specs.map((spec, index) => (
            <motion.div 
              key={index}
              className="bg-background border border-border p-8 hover:border-primary transition-colors group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="mb-6 bg-surface w-12 h-12 flex items-center justify-center border border-border">
                {spec.icon}
              </div>
              <div className="mb-2 flex items-end gap-3">
                <h3 className="text-xl font-bold text-primary">{spec.title}</h3>
              </div>
              <div className={`text-4xl font-black mb-4 tracking-tighter ${spec.title === 'Energy Return' ? 'text-accent' : 'text-primary'}`}>
                {spec.value}
              </div>
              <p className="text-secondary leading-relaxed">
                {spec.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
