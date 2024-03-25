import Image from "next/image";
import React from "react";
import AspenLogo from "../../public/images/follett-aspen-logo.png";

function Header() {
  return (
    <div className='bg-aspen-blue opacity-95 border-b-2 border-white'>
      <Image
        className='p-6'
        src={AspenLogo}
        width={375}
        height={400}
        alt='Test'
      ></Image>
    </div>
  );
}

export default Header;
