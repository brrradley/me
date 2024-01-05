import { projectsArray } from "../data/data_arrays";
import Action from "../assets/buttons/btn-action";

export default function Projects() {
  return (
    <main className="w-full flex flex-col gap-5 justify-center text-slate-600 text-base px-3 py-5">
      {projectsArray.map((project, index) => (
        <main
          className="flex flex-col md:flex-row md:gap-7 gap-4 items-center rounded p-5 mx-2 bg-gray-50 md:text-left shadow"
          key={index}
        >
          <section className="relative md:pb-0 flex flex-col items-center md:w-1/3">
            <img
              src={project.image}
              className="h-[13rem] md:h-[8rem] pb-2 drop-shadow"
            />

            <aside className="flex px-2 gap-0.5">
              {project.stack.map((stack, index) => (
                <img
                  src={stack}
                  className="w-9 p-1.5"
                  // title={stack
                  //   .split("/icons/")[1]
                  //   .split(".svg")[0]
                  //   .toUpperCase()}
                  // alt={
                  //   stack.split("/icons/")[1].split(".svg")[0].toUpperCase() +
                  //   " icon image"
                  // }
                  key={index}
                />
              ))}
            </aside>
          </section>
          <div className="h-[1px] w-full bg-slate-200 md:hidden"></div>

          <section className="md:w-2/3 flex flex-col items-center md:items-start">
            <h2>{project.title}</h2>
            <span className="py-3">{project.description}</span>
            <Action url={project.github} />
          </section>
        </main>
      ))}
    </main>
  );
}
