import { FaFacebookSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaFilePdf } from "react-icons/fa6";
import { CiCoffeeBean } from "react-icons/ci";
import resume from "../assets/bradleyashton.pdf";

export default function Footer() {
  return (
    <main className="w-full flex flex-col text-center sm:text-left bg-gray-700 text-slate-300 px-3 py-4">
      <section className="flex flex-col py-3 pb-7 pl-2 gap-1">
        <a
          href="https://dev.to/decafdevio/decafdev-how-it-all-began-20gk"
          target="_new"
        >
          <strong>Blog: </strong>"How it all started"
        </a>
        <a
          href="https://github.com/decafdevio/template-vite_react_tailwind"
          target="_new"
        >
          <strong>Repo: </strong>Vite, Tailwind, Flowbite template
        </a>
        <a href={resume} target="_new">
          <strong>Download my resume</strong>
        </a>
      </section>
      <aside className="flex flex-col sm:flex-row items-center">
        <section className="flex flex-row gap-2">
          <a
            href="https://www.linkedin.com/in/decafdevio/"
            target="_new"
            title="LinkedIn social link"
            alt="LinkedIn social link"
            className="urlIcon"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://github.com/decafdevio/"
            target="_new"
            title="GitHub social link"
            alt="GitHub social link"
            className="urlIcon"
          >
            <FaGithubSquare size={30} />
          </a>
          <a
            href="https://www.facebook.com/decafdevio/"
            target="_new"
            title="Facebook social link"
            alt="Facebook social link"
            className="urlIcon"
          >
            <FaFacebookSquare size={30} />
          </a>
          {/* <a
            href="mailto:brad.j.ashton@gmail.com?subject=ref: portfolio&body=Please include your name, company and enquiry."
            target="_new"
            title="Email link"
            alt="Email link"
          >
            <IoMdMail size={32} />
          </a>
          <a
            href="https://www.facebook.com/decafdevio/"
            target="_new"
            title="CV link"
            alt="CV link"
          >
            <FaFilePdf size={27} />
          </a> */}
        </section>
        <section className="h-[.1rem] rounded-xl w-7/12 sm:w-full bg-slate-500 mx-5 mt-3 mb-2 sm:mt-1"></section>
        <section className="flex items-center gap-3 text-slate-500">
          <span className="sm:hidden">2003</span>
          <CiCoffeeBean size={30} />
          <span className="sm:hidden">2024</span>
        </section>
      </aside>
    </main>
  );
}
