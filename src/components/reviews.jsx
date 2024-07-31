import { reviewsArray } from "../data/data_arrays";

export default function Reviews() {
  return (
    <main className="w-full text-slate-600 text-left flex flex-col py-2">
      {reviewsArray.map((review, index) => (
        <section className="flex flex-col  p-2 py-3" key={index}>
          <article className="flex flex-col mx-3 gap-3 bg-gray-50 p-5 rounded-tl-2xl rounded-br-2xl rounded-tr rounded-bl shadow">
            <aside className="flex gap-3 items-center sm:justify-start">
              <figure>
                <img
                  src={review.avatar}
                  className="rounded-full h-14 shadow border-white border-2"
                />
              </figure>
              <hgroup className="flex flex-col text-left">
                <span>{review.author}</span>
                <span className=" text-sm font-light">{review.title}</span>
              </hgroup>
            </aside>
            <div className="h-[1px] w-full bg-slate-200"></div>
            <p>"{review.content}"</p>
          </article>
        </section>
      ))}
    </main>
  );
}
