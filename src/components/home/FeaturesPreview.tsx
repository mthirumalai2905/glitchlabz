import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Cpu, Code2, Workflow, Lightbulb, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "AI Infrastructure",
    description: "Scalable platforms built for the demands of modern AI workloads.",
  },
  {
    icon: Code2,
    title: "Developer Tooling",
    description: "APIs and SDKs designed for seamless AI integration.",
  },
  {
    icon: Workflow,
    title: "Intelligent Workflows",
    description: "Automation systems that adapt and optimize in real-time.",
  },
  {
    icon: Lightbulb,
    title: "Research-Driven",
    description: "Solutions grounded in cutting-edge AI research.",
  },
];

export function FeaturesPreview() {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            What We Build
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Infrastructure and tools that power the next generation of AI systems.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 rounded-2xl bg-card border border-border card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors group"
          >
            See all our work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
