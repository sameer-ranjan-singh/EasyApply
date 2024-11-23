import Moto from "@/components/Moto";
import Name from "@/components/Name";

export default function Home() {
  return (
    <div className="bg-gradient-to-t from-slate-300 h-screen">
    <div className="flex flex-col justify-center items-center h-2/3 mx-2 md:gap-16 gap-8">
      <Name/>
      <Moto/>
    </div>
    </div>
  );
}

{/* <span className="mb-1 md:my-0  text-4xl md:text-6xl font-extrabold">Welcome</span> */}