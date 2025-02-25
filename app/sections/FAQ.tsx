import { faqs } from "../lib/utils";
const FAQ = () => {
  return (
    <section className="font-inter p-16">
      <div className="flex lg:flex-row flex-col justify-between gap-16 items-center container">
        <div className="flex flex-col space-y-8 lg:w-full lg:justify-start justify-center lg:items-start lg:text-left text-center items-center">
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
          {faqs.map((faq, index) => {
            const {question, response} = faq
            return (
              <div
                key={index}
                className="collapse collapse-plus bg-white border"
              >
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-base font-medium text-black">
                  {question}
                </div>
                <div className="collapse-content">
                  <p className="text-slate-800 font-light">{response}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default FAQ;
