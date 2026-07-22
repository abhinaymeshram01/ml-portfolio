import FloatingParticles from "@/components/animations/FloatingParticles";

export default function HeroBackground() {
  return (
    <>
      {/* Floating Particles */}
      <FloatingParticles />

      {/* Animated Background Blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-cyan-500/15 blur-[140px] animate-pulse" />

        <div className="absolute right-[-120px] top-1/3 h-[450px] w-[450px] rounded-full bg-blue-600/15 blur-[140px] animate-pulse" />

        <div className="absolute bottom-0 left-1/3 h-[350px] w-[350px] rounded-full bg-indigo-500/10 blur-[120px] animate-pulse" />
      </div>

      {/* Blue Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-20 top-20 h-[450px] w-[450px] rounded-full bg-blue-600/20 blur-[140px]" />

        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      {/* Grid */}
      <div
        className="absolute inset-0 -z-20 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
    </>
  );
}