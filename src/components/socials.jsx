import { FaFacebookSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";

export default function Socials({ iconSize }) {
  return (
    <main className="flex flex-row gap-2">
      <a
        href="https://www.linkedin.com/in/decafdevio/"
        target="_new"
        title="LinkedIn social link"
        alt="LinkedIn social link"
        className="urlIcon"
      >
        <FaLinkedin size={iconSize} />
      </a>
      <a
        href="https://github.com/decafdevio/"
        target="_new"
        title="GitHub social link"
        alt="GitHub social link"
        className="urlIcon"
      >
        <FaGithubSquare size={iconSize} />
      </a>
      <a
        href="https://www.facebook.com/decafdevio/"
        target="_new"
        title="Facebook social link"
        alt="Facebook social link"
        className="urlIcon"
      >
        <FaFacebookSquare size={iconSize} />
      </a>
    </main>
  );
}
