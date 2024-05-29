import Image from "next/image";
import Hero from "../app/component/hero"  
import Contact from "../app/component/contact"
import Project from '../app/component/Project'
import About from '../app//component/about'
import Skill from '../app/component/Skill'
export default function Home() {
  return (
   // <main className="flex min-h-screen flex-col items-center justify-between p-24"> </main>
<div>
   <Hero/>  
<About/>
<Project/>
<Skill/>
 <Contact/>
<div></div>
    </div>
  );
}
