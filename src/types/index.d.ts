// src/types/images.d.ts
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.png" {
  const value: any;
  export = value;
}
declare module "*.svg";

interface IPicture {
  id: string;
  img_src: string;
  earth_date: string;
}

declare module "react-time-format";
