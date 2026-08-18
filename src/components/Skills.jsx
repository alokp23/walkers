import { motion } from 'framer-motion';

export default function Skills() {
  const bentoItems = [
    {
      title: "Upper Mesh",
      desc: "Breathable, tear-resistant dynamic knit. Engineered to expand with your foot's natural motion while maintaining strict structural integrity and heel lockdown.",
      colSpan: "md:col-span-2",
      rowSpan: "md:row-span-1",
      delay: 0
    },
    {
      title: "Carbon Plate",
      desc: "Full-length propulsion. Embedded carbon-fiber plate acts as a lever, physically snapping your foot forward to reduce calf fatigue.",
      colSpan: "md:col-span-1",
      rowSpan: "md:row-span-2",
      delay: 0.1
    },
    {
      title: "Outsole Grip",
      desc: "Multi-directional traction. Laser-cut rubber nodes channel water away, guaranteeing maximum surface grip on urban pavement.",
      colSpan: "md:col-span-1",
      rowSpan: "md:row-span-1",
      delay: 0.2
    },
    {
      title: "Lacing System",
      desc: "Lockdown fly-wires. Asymmetric lacing distributes tension evenly across the midfoot to prevent pinching.",
      colSpan: "md:col-span-1",
      rowSpan: "md:row-span-1",
      delay: 0.3
    }
  ];

  return (
    <section className="py-24 px-4 w-full flex justify-center">
      <div className="max-w-6xl w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Material Science</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px]">
          {bentoItems.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: item.delay }}
              className={`glass-panel p-8 flex flex-col justify-end relative overflow-hidden group cursor-crosshair ${item.colSpan} ${item.rowSpan}`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h3 className="text-2xl font-bold mb-2 relative z-10">{item.title}</h3>
              <p className="text-secondary font-medium relative z-10">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
