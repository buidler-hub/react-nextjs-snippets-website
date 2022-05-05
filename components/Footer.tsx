import Image from "next/image";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <div className="mx-auto mb-10 flex w-screen justify-center">
      <a href="https://vercel.com/avneesh0612?utm_source=buidlers-hub&utm_campaign=oss">
        <Image
          src="/powered-by-vercel.svg"
          height="50"
          width="250"
          alt=""
          objectFit="contain"
        />
      </a>
    </div>
  );
};
export default Footer;
