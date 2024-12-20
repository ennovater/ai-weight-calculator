"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";
import { useTheme } from "next-themes";
import logoWhite from "@/assets/images/logo-white.png";
import logoBlack from "@/assets/images/logo-black.png";
import Link from "next/link";

function LogoComponent() {
  const { resolvedTheme } = useTheme();
  const [logoSrc, setLogoSrc] = React.useState<StaticImageData>(logoWhite);
  React.useEffect(() => {
    setLogoSrc(resolvedTheme == "dark" ? logoWhite : logoBlack);
  }, [resolvedTheme]);
  return (
    <Link href='/'>
      <Image
        className="w-28 h-20 object-contain"
        src={logoSrc}
        alt="Metal Zone General Trading LLC Logo"
      />
    </Link>
  );
}

export default LogoComponent;
