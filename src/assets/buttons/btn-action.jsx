import { AiFillGithub } from "react-icons/ai";

export default function Action({ url }) {
  const trimmedURL = url.split("decafdevio/");
  if (url) {
    return (
      <a
        href={url}
        target="_new"
        alt={trimmedURL[1] + "image"}
        title={trimmedURL[1] + "GitHub project"}
        className="button"
      >
        <div className="flex mt-4 gap-2 items-center shadow rounded-lg capitalize px-2 py-1 pr-3 text-sm w-max text-slate-600 font-bold border-gray-700 border-[1px]">
          <AiFillGithub size={25} />
          {trimmedURL[1].replaceAll("-", " ")}
        </div>
      </a>
    );
  }
}
