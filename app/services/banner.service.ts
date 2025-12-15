import { Banner, BannerPosition } from '../types/landing';

const BASE_URL = 'https://dev.iranpl.ir/backoffice/api';


export async function getBanners(position:BannerPosition): Promise<Banner[]> {
const res = await fetch(
    `${BASE_URL}/Banners/get-hamkhan-banners?BannerPosition=${position}`
)
 if (!res.ok) {
    throw new Error('Failed to fetch banners');
  }
    return res.json()
}