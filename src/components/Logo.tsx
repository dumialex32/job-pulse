import Image from "next/image";
import logo from "../../public/jp-logo.png";

const Logo = () => {
  return (
    <div>
      <Image src={logo} alt="logo" width={192} height={192} />
    </div>
  );
};

export default Logo;
