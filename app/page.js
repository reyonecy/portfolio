import Image from "next/image";
import { Hero } from "./components/hero/page";
import About from "./components/about/page";


export default function Home() {
  return (
    <div className="">
    <Hero/>
    <About/>
    </div>
  );
}
