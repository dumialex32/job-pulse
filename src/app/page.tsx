import Image from "next/image";

import landingImg from "../../public/landingImg.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Logo from "@/components/Logo";

export default function Home() {
  return (
    <main>
      <header className="max-w-6xl max-auto px-4 sm:px-8 py-6">
        <Logo />
      </header>

      <section className="max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-20 lg:grid grid-cols-[1fr_500px] items-center">
        <div>
          <h1 className="text-4xl capitalize md:text-7xl font-bold">
            job <span className="text-primary">tracking</span>
          </h1>

          <p className="leading-loose max-w-md mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
            veniam neque eum, enim tempore, itaque voluptate dolor quia aliquam
            nisi placeat! Dignissimos odit, deleniti inventore ipsam commodi id!
            Reiciendis, eum.
          </p>

          <Button asChild className="mt-4">
            <Link href="/add-job">Get started</Link>
          </Button>
        </div>

        <Image src={landingImg} alt="landing image" className="rounded-md" />
      </section>
    </main>
  );
}
