import Image from "next/image";
import {Navbar} from "./Components/Navbar/navbar"
import {Main} from "./Components/Main/main"
import {Maintwo} from "./Components/Maintwo/maintwo"
import {Mainthree} from "./Components/Mainthree/mainthree"
import {Mainfour} from "./Components/Mainfour/mainfour"
import {Mainfive} from "./Components/Mainfive/mainfive"
import {Footer} from "./Components/Footer/footer"
import {Finalfooter} from "./Components/Finalfooter/finalfooter"
import 'bootstrap/dist/css/bootstrap.css';
export default function Home() {
  return (
    <main className="">
       <Navbar/>
       <Main/>
       <Maintwo/>
       <Mainthree/>
       <Mainfour/>
       <Mainfive/>
       <Footer/>
       <Finalfooter/>
    </main>
  );
}
