import Image from "next/image";
import logo from "../../public/jp-logo.png";
import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link href={"/"}>
        <Image src={logo} alt="logo" width={230} height={230} />
      </Link>
    </div>
  );
};

export default Logo;
