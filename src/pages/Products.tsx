import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { 
  Server, 
  Code2, 
  Workflow, 
  Brain,
  Database,
  Shield,
  Zap,
  Cloud
} from "lucide-react";

const products = [
  {
    category: "AI Infrastructure Platforms",
    items: [
      {
        icon: Server,
        title: "Neural Compute Engine",
        description: "High-performance inference infrastructure optimized for transformer models. Supports distributed workloads with automatic scaling.",
      },
      {
        icon: Database,
        title: "Vector Intelligence Hub",
        description: "Semantic search and retrieval system built for AI-native applications. Sub-millisecond query latency at scale.",
      },
    ],
  },
  {
    category: "AI Developer Tooling",
    items: [
      {
        icon: Code2,
        title: "Model Pipeline SDK",
        description: "Unified API for training, fine-tuning, and deploying models. Framework-agnostic with first-class TypeScript support.",
      },
      {
        icon: Zap,
        title: "Inference Gateway",
        description: "Intelligent routing layer for multi-model architectures. Built-in caching, rate limiting, and observability.",
      },
    ],
  },
  {
    category: "Intelligent Workflow Systems",
    items: [
      {
        icon: Workflow,
        title: "Agentic Orchestrator",
        description: "Autonomous agent coordination platform. Design, deploy, and monitor complex multi-agent workflows.",
      },
      {
        icon: Cloud,
        title: "Event Processing Core",
        description: "Real-time event streaming with AI-powered routing. Process millions of events with intelligent prioritization.",
      },
    ],
  },
  {
    category: "Research-Driven Solutions",
    items: [
      {
        icon: Brain,
        title: "Reasoning Framework",
        description: "Advanced chain-of-thought and planning capabilities. Built on our latest research in structured reasoning.",
      },
      {
        icon: Shield,
        title: "Safety Layer",
        description: "Comprehensive guardrails for AI systems. Content filtering, output validation, and alignment monitoring.",
      },
    ],
  },
];

const Products = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-20"
          >
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
              What We Build
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Infrastructure, tooling, and systems designed for the AI-native era. 
              Each product is built to scale from prototype to production.
            </p>
          </motion.div>

          {/* Products by category */}
          <div className="space-y-20">
            {products.map((section, sectionIndex) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-sm font-semibold text-primary uppercase tracking-wider mb-8">
                  {section.category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {section.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="group p-8 rounded-2xl bg-card border border-border card-hover"
                    >
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                        <item.icon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
