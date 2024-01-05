import { stackArray } from "../data/data_arrays";

export default function Skills() {
  return (
    <main className="w-full flex flex-col gap-5 justify-center text-slate-600 text-base px-3 py-5">
      <section className="bg-slate-50 rounded shadow mx-2 px-3">
        <section className="flex flex-col gap-[1px] mx-1 bg-gray-200">
          {stackArray.map((stack, index) => (
            <section
              className="flex flex-col py-3 px-2 sm:pb-4 sm:flex-row items-center bg-gray-50"
              key={index}
            >
              <img
                className="w-16 h-16 px-3 py-2 rounded-full"
                src={stack.icon}
                title={stack.title}
              ></img>
              <article className="flex flex-col sm:text-left sm:pl-3">
                <p>{stack.content}</p>
              </article>
            </section>
          ))}
        </section>
      </section>
    </main>
  );
}
