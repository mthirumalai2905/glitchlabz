import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";

const principles = [
  {
    number: "01",
    title: "Foundation First",
    description:
      "We prioritize building robust foundations over quick demonstrations. Every system we create is designed to support decades of evolution and growth.",
  },
  {
    number: "02",
    title: "Research-Led Engineering",
    description:
      "Our engineering decisions are grounded in rigorous research. We bridge the gap between academic insights and production-grade systems.",
  },
  {
    number: "03",
    title: "Scale by Design",
    description:
      "Scalability isn't an afterthought—it's embedded in our architecture from day one. From single queries to billions, our systems perform.",
  },
  {
    number: "04",
    title: "Developer Experience",
    description:
      "The best infrastructure is invisible. We obsess over APIs, documentation, and tooling that make complex AI accessible to every developer.",
  },
  {
    number: "05",
    title: "Responsible AI",
    description:
      "Every system includes safety considerations. We build guardrails, monitoring, and alignment features as core capabilities, not add-ons.",
  },
];

const timeline = [
  {
    year: "2024",
    title: "The Beginning",
    description: "GlitchLabz founded with a mission to build serious AI infrastructure.",
  },
  {
    year: "2025",
    title: "Infrastructure Phase",
    description: "Launched core compute and storage platforms for AI workloads.",
  },
  {
    year: "2026",
    title: "Developer Tools",
    description: "Released SDK and tooling suite for AI-native development.",
  },
  {
    year: "Beyond",
    title: "The Future",
    description: "Continuing to push boundaries of what's possible in AI infrastructure.",
  },
];

const Lab = () => {
  return (
    <Layout>
      {/* Hero section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="text-sm text-primary font-medium uppercase tracking-wider mb-4 block">
              The Lab
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-tight">
              We think in
              <br />
              <span className="gradient-text">decades, not demos.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              GlitchLabz is an AI infrastructure lab focused on building the foundational 
              systems that will power intelligent technology for generations to come.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Principles section */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Our Principles
            </h2>
          </motion.div>

          <div className="space-y-0">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group py-10 border-b border-border hover:bg-card/50 transition-colors duration-300 -mx-6 px-6"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <span className="font-display text-4xl font-bold text-primary/30 group-hover:text-primary/50 transition-colors">
                    {principle.number}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                      {principle.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed max-w-2xl">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Our Journey
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  <div
                    className={`md:w-5/12 pl-8 md:pl-0 ${
                      index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                    }`}
                  >
                    {/* Dot */}
                    <div className="absolute left-0 md:left-1/2 top-2 w-3 h-3 rounded-full bg-primary md:-translate-x-1/2 ring-4 ring-background" />
                    
                    <span className="font-display text-2xl font-bold gradient-text">
                      {item.year}
                    </span>
                    <h3 className="font-display text-lg font-semibold text-foreground mt-2 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Lab;
