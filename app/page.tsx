"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);

  const success = (pos: GeolocationPosition) => {
    const crd = pos.coords;
    setLatitude(crd.latitude);
    setLongitude(crd.longitude);
  };

  const error = (err: any) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-center mt-20">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <div className=" mt-12 text-center">
        <button
          className="px-4 py-2 text-white bg-blue-700 rounded hover:bg-blue-900 cursor-pointer"
          onClick={() =>
            navigator.geolocation.getCurrentPosition(success, error)
          }
        >
          位置情報取得
        </button>
      </div>
      <div className=" mt-10 text-center">
        <div className=" mb-2">緯度：{latitude}</div>
        <div>経度：{longitude}</div>
      </div>
    </div>
  );
}
