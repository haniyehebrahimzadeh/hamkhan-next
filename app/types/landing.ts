export type BannerPosition = 'slider' | 'main_middle' | 'main_bottom';
export interface Banner {
  title: string;
  url: string;
  desktopImageAddress: string;
  mobileImageAddress: string;
  tabletImageAddress: string;
  imageAltText: string;
  position: BannerPosition;
  priority: number;
}