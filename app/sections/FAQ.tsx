const FAQ = () => {
  return (
    <section className="font-inter p-16">
      <div className="flex lg:flex-row flex-col justify-between gap-16 items-center container">
        <div className="flex flex-col space-y-8 lg:w-full">
          <span className="font-semibold px-3 py-1 bg-secondary w-fit bg-opacity-15 rounded-lg text-secondary">
            Frequently Asked Questions 🙋‍♀️
          </span>
          <h1 className="font-extrabold text-black md:text-5xl xl:text-6xl text-4xl">
            Got questions? We got answers!
          </h1>
          <p className="text-slate-500 text-xl md:text-3xl ">
            Feel free to reach out to us if you have more questions for us.
          </p>
          <button className="w-fit rounded-xl px-6 py-3 bg-[#2e3539] text-white font-inter font-medium shadow-md ring-1 ring-secondary shadow-secondary">
            Contact us <span className="text-slate-400">&rarr;</span>
          </button>
        </div>
        <div className="space-y-4 w-full">
          <div className="collapse collapse-plus bg-white border">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-white border">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-white">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FAQ;
