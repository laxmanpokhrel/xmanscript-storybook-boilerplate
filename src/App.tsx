export default function App() {
  return (
    <>
      <div className="home-page-template flex gap-4 tracking-wider flex-col w-screen h-screen bg-black text-white select-none">
        <div className="cover w-[70%] m-auto flex flex-col gap-1">
          <h1 className="first-letter:text-8xl text-2xl">
            Hi developer, this is a storybook app -
            <p className="bg-[#FFDC1C] text-center px-1 inline text-black font-bold">version-2.1</p>
          </h1>
          <p className="text-2xl font-thin">Ready to dive deeper into my features?</p>
          <div className="text-[#FFDC1C] font-light text-xl flex justify-start items-start gap-4">
            Checkout my readme.md file
          </div>
          <a
            href="/sandbox"
            className="text-blue-400 font-light text-sm underline flex justify-start items-start gap-4"
          >
            sandbox page &rarr;
          </a>
        </div>
      </div>
    </>
  );
}
