import { Header } from "@/components/Header";
import { Banner } from "@/components/Banner";
import { About } from "@/components/About";
import { Experince } from "@/components/Experince";
import { MyProjects } from "@/components/MyProjects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WppContact } from "@/components/WppContact";
const Page = ()=>{

  return(
    <div>
        <Header/>
        <Banner/>
        <About/>
        <Experince/>
        <MyProjects/>
        <Contact/>
        <Footer/>
        <WppContact/>
    </div>
  )
}
export default Page;