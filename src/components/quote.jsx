export default function Quote(data) {
  return (
    <main className="w-full bg-gray-700 text-slate-300 px-3 py-8 leading-7 italic lg:rounded">
      <p>{data.data}</p>
    </main>
  );
}
