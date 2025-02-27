import { HiMenuAlt3 } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";
import Logo from "../../assets/website/logoDark.svg";
import Button from "../Button";
// import DarkMode from "./DarkMode";
import { useState } from "react";
import ResponsiveMenu from "./ResponsiveMenu";


const menuLinks = [
    {
        id: 1,
        name: "About",
        link: "/#about",
    },
    {
        id: 2,
        name: "Services",
        link: "/#services",
    },
    {
        id: 3,
        name: "Projects",
        link: "/#projects",
    },
   
]

const Navbar = () => {

    const [nav, setNav] = useState(false);
    
    const toggleNav = () => {
        setNav(!nav);
    }
    

  return (
    <nav className="bg-white dark:bg-slate-950 dark:text-white duration-300 transition-all ease-in-out
    delay-200">
        <div className="px-5 md:container mx-auto">
            <div className="flex justify-between py-3 ">
                {/* logo section */}
                <div className="flex items-center gap-2">

                    <img 
                        src={Logo} 
                        alt="logo" 
                        className="w-5 "
                    />
                    <a href="/" className="text-xl md:text-2xl font-semibold">
                        Digital Agency
                    </a>

                </div>

                {/*Desktop  navigation links section */}
                <div className="hidden md:flex md:ml-auto">
                    <ul className="flex items-center gap-8">
                        {
                            menuLinks.map((link, idx) => (
                                <li key={idx}>
                                    <a 
                                        href={link.link}
                                        className="text-lg font-medium hover:text-primary hover:border-b-2
                                        hover:border-primary transition-all delay-200 ease-in-out duration-300"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))
                        }
                        <Button 
                            label="Get In Touch"
                            className="bg-primary text-white hover:bg-primary/80 duration-300 
                            transition-colors cursor-pointer delay-200 ease-in-out px-4 py-2 rounded-lg
                            active:ring-1"
                        />
                        
                    </ul>
                </div>
                <div className="flex items-center ml-4">
                    {/* <DarkMode /> */}
                    <button onClick={toggleNav} className="block md:hidden cursor-pointer ">
                        {
                            nav ? (
                                    <IoIosClose 
                                    size={30}
                                        className="dark:text-white"
                                    /> 
                                ) : (
                                    <HiMenuAlt3 
                                        className="text-3xl dark:text-white"
                                    />
                                )
                        }
                    </button>
                </div>
            </div>
        </div>
        {/* mobile nav links */}
        <ResponsiveMenu 
            nav={nav}
        />
    </nav>
  )
}

export default Navbar