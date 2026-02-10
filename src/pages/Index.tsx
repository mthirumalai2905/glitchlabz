import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles, ArrowRight, CheckCircle2, Cpu, Code2, Workflow, Zap } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const features = [
  { icon: Cpu, title: "AI Infrastructure", desc: "Scalable platforms for modern AI workloads" },
  { icon: Code2, title: "Developer Tooling", desc: "APIs & SDKs for seamless integration" },
  { icon: Workflow, title: "Smart Workflows", desc: "Systems that adapt in real-time" },
  { icon: Zap, title: "Research-Driven", desc: "Built on cutting-edge AI research" },
];

const Index = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("waitlist").insert({ email: email.trim().toLowerCase() });
      if (error) {
        if (error.code === "23505") {
          toast({ title: "You're already on the list!", description: "We'll reach out soon." });
        } else {
          throw error;
        }
      }
      setIsSubmitted(true);
      setEmail("");
    } catch {
      toast({ title: "Something went wrong", description: "Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#06080d] relative overflow-hidden flex flex-col">
      {/* Animated gradient blobs */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 60, -40, 0], y: [0, -50, 30, 0], scale: [1, 1.2, 0.9, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, hsl(220 90% 56% / 0.15) 0%, transparent 70%)" }}
        />
        <motion.div
          animate={{ x: [0, -50, 40, 0], y: [0, 40, -30, 0], scale: [1, 0.85, 1.15, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, hsl(185 80% 50% / 0.1) 0%, transparent 70%)" }}
        />
        <motion.div
          animate={{ x: [0, 30, -30, 0], y: [0, -30, 50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[700px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(ellipse, hsl(270 80% 60% / 0.07) 0%, transparent 70%)" }}
        />
        {/* Noise overlay */}
        <div className="absolute inset-0 noise-overlay" />
      </div>

      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-20 flex items-center justify-center py-6 px-6"
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[hsl(220_90%_56%/0.2)] flex items-center justify-center border border-[hsl(220_90%_56%/0.3)]">
            <div className="w-3 h-3 rounded-sm bg-[hsl(220_90%_56%)]" />
          </div>
          <span className="font-display font-bold text-lg text-[hsl(220_10%_85%)]">GlitchLabz</span>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center relative z-10 px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-2xl"
        >
          {/* Main Card */}
          <div className="relative rounded-3xl p-[1px] overflow-hidden">
            {/* Animated gradient border */}
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-50%] z-0"
              style={{
                background: "conic-gradient(from 0deg, transparent, hsl(220 90% 56% / 0.5), hsl(185 80% 50% / 0.3), transparent, hsl(270 80% 60% / 0.3), hsl(220 90% 56% / 0.5), transparent)",
              }}
            />

            {/* Card inner */}
            <div className="relative z-10 rounded-3xl bg-[#0a0d14]/90 backdrop-blur-2xl p-8 md:p-12">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="flex justify-center mb-8"
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[hsl(220_90%_56%/0.1)] border border-[hsl(220_90%_56%/0.25)] relative overflow-hidden">
                  <motion.div
                    animate={{ x: ["-100%", "400%"] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                    className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-transparent via-[hsl(220_90%_56%/0.3)] to-transparent pointer-events-none"
                  />
                  <Sparkles className="w-3.5 h-3.5 text-[hsl(220_90%_56%)] relative z-10" />
                  <span className="text-xs font-medium text-[hsl(220_90%_56%)] relative z-10 uppercase tracking-wider">Coming Soon</span>
                </div>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 leading-[1.1] tracking-tight"
              >
                <span className="text-[hsl(220_10%_90%)]">Building the </span>
                <span className="gradient-text-animated">AI Infrastructure</span>
                <br />
                <span className="text-[hsl(220_10%_90%)]">of Tomorrow</span>
              </motion.h1>

              {/* Subtext */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-center text-[hsl(220_10%_55%)] text-base md:text-lg max-w-md mx-auto mb-10 leading-relaxed"
              >
                We craft AI-powered platforms and developer tools that scale from zero to millions. Be the first to know when we launch.
              </motion.p>

              {/* Email form */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="max-w-sm mx-auto mb-10"
              >
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center justify-center gap-3 p-4 rounded-xl bg-[hsl(220_90%_56%/0.1)] border border-[hsl(220_90%_56%/0.3)]"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[hsl(220_90%_56%)]" />
                    <span className="text-[hsl(220_10%_85%)] text-sm font-medium">You're on the list. We'll be in touch.</span>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex gap-2">
                    <Input
                      type="email"
                      placeholder="you@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="flex-1 h-11 bg-[hsl(220_20%_8%)] border-[hsl(220_15%_18%)] focus:border-[hsl(220_90%_56%/0.5)] rounded-xl text-sm text-[hsl(220_10%_85%)] placeholder:text-[hsl(220_10%_40%)]"
                    />
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="h-11 px-5 rounded-xl bg-[hsl(220_90%_56%)] hover:bg-[hsl(220_90%_50%)] text-white font-medium text-sm shadow-[0_0_20px_-5px_hsl(220_90%_56%/0.5)] hover:shadow-[0_0_30px_-5px_hsl(220_90%_56%/0.7)] transition-all duration-300 shrink-0"
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        />
                      ) : (
                        <>
                          Get Access
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </motion.div>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-[hsl(220_15%_20%)] to-transparent mb-8" />

              {/* Feature grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {features.map((f, i) => (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.08, duration: 0.4 }}
                    className="group p-4 rounded-xl bg-[hsl(220_20%_8%/0.6)] border border-[hsl(220_15%_15%)] hover:border-[hsl(220_90%_56%/0.3)] hover:bg-[hsl(220_20%_10%)] transition-all duration-300 text-center"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[hsl(220_90%_56%/0.1)] flex items-center justify-center mx-auto mb-3 group-hover:bg-[hsl(220_90%_56%/0.15)] transition-colors">
                      <f.icon className="w-4 h-4 text-[hsl(220_90%_56%)]" />
                    </div>
                    <h3 className="text-xs font-semibold text-[hsl(220_10%_80%)] mb-1 font-display">{f.title}</h3>
                    <p className="text-[10px] text-[hsl(220_10%_45%)] leading-relaxed">{f.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="relative z-10 py-6 text-center">
        <p className="text-xs text-[hsl(220_10%_35%)]">
          © {new Date().getFullYear()} GlitchLabz. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Index;
