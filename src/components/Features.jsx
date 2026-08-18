import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Layers, Feather, Activity, ShieldCheck } from 'lucide-react';

function FeatureCard({ icon: Icon, title, description, delay }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="glass-panel p-8 cursor-crosshair group perspective-1000 relative h-full"
    >
      <div 
        className="absolute inset-0 bg-gradient-to-br from-[var(--glass-bg)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
      />
      <div 
        className="w-14 h-14 rounded-xl glass-panel flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 text-[var(--color-accent)]"
        style={{ transform: "translateZ(30px)" }}
      >
        <Icon className="w-7 h-7" />
      </div>
      <h4 
        className="text-xl font-bold mb-3 text-primary"
        style={{ transform: "translateZ(40px)" }}
      >
        {title}
      </h4>
      <p 
        className="text-secondary leading-relaxed"
        style={{ transform: "translateZ(20px)" }}
      >
        {description}
      </p>
    </motion.div>
  );
}

export default function Features() {
  const features = [
    {
      icon: Layers,
      title: "Cell-Structure",
      description: "Higher rebound rate than standard EVA foam, ensuring zero compression packing over time."
    },
    {
      icon: Feather,
      title: "Material Weight",
      description: "Ultralight construction maintains structural durability without adding unnecessary mass."
    },
    {
      icon: Activity,
      title: "Energy Return",
      description: "Proprietary geometric grid design physically propels the foot forward on strike."
    },
    {
      icon: ShieldCheck,
      title: "Impact Diffusion",
      description: "Disperses kinetic energy evenly across the sole, protecting joints during high-impact movement."
    }
  ];

  return (
    <section id="features" className="py-24 w-full flex justify-center px-4">
      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, i) => (
            <FeatureCard key={i} {...feature} delay={i * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
}
