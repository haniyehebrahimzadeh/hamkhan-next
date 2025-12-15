
import localFont from 'next/font/local';

export const iranYekan = localFont({
  src: [
    { path: "./IRANYekanX-Black.woff2", weight: "100" },
    { path: "./IRANYekanX-Bold.woff2", weight: "700" },
    { path: "./IRANYekanX-DemiBold.woff2", weight: "600" },
    { path: "./IRANYekanX-ExtraBlack.woff2"},
    { path: "./IRANYekanX-ExtraBold.woff2", weight: "800"},
    { path: "./IRANYekanX-Heavy.woff2" },
    { path: "./IRANYekanX-Light.woff2", weight: "300" },
    { path: "./IRANYekanX-Medium.woff2", weight: "500" },
    { path: "./IRANYekanX-Regular.woff2", weight: "400" },
    { path: "./IRANYekanX-Thin.woff2", weight: "900" },
    { path: "./IRANYekanX-UltraLight.woff2", weight: "200" },
  ],
  variable: "--font-iranYekan",
  display: "swap",
});
