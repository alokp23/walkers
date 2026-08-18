import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Phantom Black",
      description: "Sleek, stealthy, and built for the urban environment. The Phantom Black colorway features a matte upper with gloss accents.",
      tech: ["Matte Finish", "Reflective Hits", "Carbon Plate"],
      gradient: "from-gray-700/20 to-black/5",
      delay: 0,
      image: "/phantom.jpg"
    },
    {
      title: "Glacier White",
      description: "Pure and minimalist. The Glacier White edition highlights the exact geometry of the Levitate Foam.",
      tech: ["Breathable Mesh", "Ice Outsole", "TPU Cage"],
      gradient: "from-blue-200/20 to-white/5",
      delay: 0.2,
      image: "/white.jpg"
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 w-full flex justify-center">
      <div className="max-w-6xl w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Core Models</h2>
          <p className="text-secondary text-lg">Engineered aesthetics tailored to your environment.</p>
        </motion.div>

        <div className="flex flex-col gap-12">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: project.delay }}
              className={`glass-panel overflow-hidden group cursor-pointer relative flex flex-col md:flex-row min-h-[400px]`}
            >
              {/* Project Visual Area */}
              <div className={`w-full md:w-3/5 bg-gradient-to-br ${project.gradient} relative overflow-hidden flex items-center justify-center border-b md:border-b-0 md:border-r border-[var(--glass-border)]`}>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20" />
                <motion.img 
                  src={project.image}
                  className="w-48 h-48 rounded-2xl object-cover glass-panel shadow-2xl rotate-12 group-hover:rotate-0 group-hover:scale-110 transition-all duration-700 ease-out"
                />
              </div>

              {/* Project Info */}
              <div className="w-full md:w-2/5 p-10 sm:p-16 flex flex-col justify-center">
                <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                <p className="text-secondary text-lg leading-relaxed mb-8">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="px-3 py-1 bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-full text-xs font-medium text-[var(--color-primary)]">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-auto">
                  <button className="flex items-center gap-2 text-sm font-bold text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                    View Model <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
