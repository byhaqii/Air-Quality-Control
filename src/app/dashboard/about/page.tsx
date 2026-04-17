import { Topbar } from "@/components/layout/topbar";
import { AboutOverview } from "@/components/sections/about-overview";

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <Topbar
        title="Understanding the Ethereal Observer"
        description="Learn how this cloud-based air monitoring system processes and presents data."
      />
      <AboutOverview />
    </div>
  );
}
