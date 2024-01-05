import { FaMobileAlt, FaTabletAlt, FaDesktop } from "react-icons/fa";
import Socials from "./socials";
import Float from "./float";

export default function ATF() {
  return (
    <main className="bckImage h-[100svh] w-full flex flex-col justify-center items-center text-center text-slate-600 relative">
      <section className="flex flex-row gap-5 p-4 mb-2">
        <FaDesktop size={32} title="Desktop" />
        <FaTabletAlt size={30} title="Tablet" />
        <FaMobileAlt size={30} title="Mobile" className="-ml-1" />
      </section>
      <h1 className="text-5xl font-semibold">Bradley Ashton</h1>A software
      developer from Sheffield
      <section className="flex flex-row gap-2 my-5 text-gray-600">
        <Socials iconSize="45" />
      </section>
      <a
        href="mailto:brad.j.ashton@gmail.com"
        target="_new"
        className="border-2 border-red-500 hover:border-gray-600 cursor-pointer border-dashed flex py-2 px-3"
      >
        <p>
          I'm available, click here to{" "}
          <span className="alkatra text-lg">HIRE ME</span>
        </p>
      </a>
      <Float />
    </main>
  );
}
