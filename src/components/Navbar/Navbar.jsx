import Logo from "../../assets/website/logoDark.svg";
import Button from "../Button";
import DarkMode from "./DarkMode";


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
  return (
    <nav className="bg-white dark:bg-slate-950 dark:text-white duration-300 transition-all ease-in-out
    delay-200">
        <div className="container mx-auto">
            <div className="flex py-3 justify-between">
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
                <div className="hidden md:block">
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
                        <DarkMode 
                        
                        />
                    </ul>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar