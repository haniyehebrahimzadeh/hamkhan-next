// گر بعداً خواستی Swiper / Carousel اضافه کنی، فقط همین فایل Client Component میشه.
import { getBanners } from "@/app/services/banner.service";
import { Banner } from "@/app/types/landing";
import Image from "next/image";

export default async function BannerSlider() {
  const banners: Banner[] = await getBanners("slider");
  return (
    <section className="min-w-full">
      <div className="flex overflow-x-auto gap-4">
        {banners.map((banner, index) => (
          <a key={index} href={banner.url} className="min-w-full relative">
            <Image
              src={banner.desktopImageAddress}
              alt={banner.imageAltText}
              width={1200}
              height={400}
              className="w-full h-auto rounded-xl"
              priority={index === 0}
            />
          </a>
        ))}
      </div>
    </section>
  );
}
