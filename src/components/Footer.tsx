import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div className='bg-aspen-blue opacity-95 fixed bottom-0 w-full text-sm'>
      <div className='flex flex-wrap justify-between p-2'>
        <p>
          {/* Copy symbol in html */}
          &copy; 2023 Follett School Solutions, Inc. All Rights Reserved.
        </p>
        <p>
          <a href='https://www.follett.com/'>Follet School Solutions</a> |{" "}
          <a href='https://www.follettlearning.com/'>Aspen</a> |{" "}
          <a href='https://www.follett.com/about-us/privacy-policy'>
            Terms of Use
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
