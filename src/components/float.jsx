import imgLiteRecords from "../assets/images/product_lr.png";
import imgWarmAndSafe from "../assets/images/product_was.jpg";

export default function Float() {
  return (
    <section className="w-[95%] bg-slate-300 flex py-3 px-3 justify-around absolute bottom-5 rounded shadow">
      <div className="flex items-center sm:text-base">
        <img
          src={imgLiteRecords}
          className="rounded-2xl max-h-[3.5rem] mr-3 shadow border-white border-2"
        />
        <aside className="text-left flex flex-col">
          <h1 className="alkatra md:text-2xl">LiteRECORDS</h1>
          <p className="text-xs md:text-sm font-light">
            Founder, Lead Developer
          </p>
        </aside>
      </div>
      <div className="flex items-center">
        <img
          src={imgWarmAndSafe}
          className="rounded-2xl max-h-[3.5rem] mr-3 shadow border-white border-2"
        />
        <aside className="text-left flex flex-col">
          <h1 className="alkatra md:text-2xl">Warm & Safe</h1>
          <p className="text-xs md:text-sm font-light">Front End Developer</p>
        </aside>
      </div>
    </section>
  );
}
