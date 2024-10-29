export default function Home() {
  return (
    <div className=" h-screen bg-[rgb(33,30,30)] text-white">
      <div className=" px-14 pt-10">
        <div className="flex flex-wrap">
          <div className=" w-full md:w-1/2 p-4">
            <p className=" text-2xl font-thin">WIX HEADLESS</p>

            <p className=" text-6xl font-medium mt-10">
              Bring Wix business solutions to any tech stack
            </p>
            <p className=" text-lg mt-8">Power your projects with Wix’s industry-leading server-side APIs to build exactly what you want, anywhere.</p>
           <div className=" pt-5"> <button className=" px-6 py-2 rounded-sm bg-white text-black  ">Get Started</button> <span> Read Document </span> </div>
          </div>
          <div className=" w-full md:w-1/2 p-4">Right</div>
        </div>
      </div>
    </div>
  );
}
