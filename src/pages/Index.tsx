import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { FeaturesPreview } from "@/components/home/FeaturesPreview";
import { LabPreview } from "@/components/home/LabPreview";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <FeaturesPreview />
      <LabPreview />
    </Layout>
  );
};

export default Index;
