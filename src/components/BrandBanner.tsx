import bannerImg from "@/assets/dc-banner.jpg";

export function BrandBanner() {
  return (
    <div className="w-full bg-background">
      <img
        src={bannerImg}
        alt="Dropper's Club — An Institute for NEET Preparation. NEET / AIIMS / Foundation (9th–12th). Home Tuition Available 6th to 12th."
        className="block w-full h-auto"
        width={1920}
        height={512}
      />
    </div>
  );
}
