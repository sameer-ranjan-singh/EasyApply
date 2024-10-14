import ServerSideRendered from "../components/ssr";
import ButtonSignup from "../components/SignupBtn";
import { SignInAuth } from "../components/AuthSignup";

export default function Home() {
  return (
    <div className="bg-gradient-to-t from-orange-400 h-screen">
    <ServerSideRendered/>
    <div className="flex flex-col md:flex-none md:flex-row justify-center text-center items-center p-[10%] gap-4">
      <h1 className="text-3xl md:text-6xl font-extrabold">Welcome to EasyPly</h1>
      <ButtonSignup/>
      {/* <SignInAuth/> */}
    </div>
    </div>
  );
}
