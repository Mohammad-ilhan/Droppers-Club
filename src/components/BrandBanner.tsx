import bannerImg from "@/assets/dc-banner.jpg";

export function BrandBanner() {
  return (
    <div className="w-full bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 py-2 sm:py-3">
        <img
          src={bannerImg}
          alt="Dropper's Club — An Institute for NEET Preparation. NEET / AIIMS / Foundation (9th–12th). Home Tuition Available 6th to 12th."
          className="w-full h-auto rounded-lg shadow-card"
          width={1920}
          height={512}
        />
      </div>
    </div>
  );
}
