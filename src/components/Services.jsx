import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";
import Button from "./Button";
 

const skillsData = [
    {
      name: "App Development",
      icon: <FaCameraRetro className="text-4xl text-primary" />,
      link: "#",
      description:
        "ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus",
      aosDelay: "0",
    },
    {
      name: "Web Designing",
      icon: <GiNotebook className="text-4xl text-primary" />,
      link: "#",
      description:
        "ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus",
      aosDelay: "300",
    },
    {
      name: "Graphic Designing",
      icon: <SlNote className="text-4xl text-primary" />,
      link: "#",
      description:
        "ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus",
      aosDelay: "500",
    },
    {
      name: "Digital Marketing",
      icon: <SlNote className="text-4xl text-primary" />,
      link: "#",
      description:
        "ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus",
      aosDelay: "700",
    },
  ];

const Services = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-950 text-white" id="services">
        <div className="container mx-auto py-20 grid place-content-center">

            {/* header section */}
            <div className="pb-12 text-center space-y-3">
                <h2 className="text-3xl font-semibold text-violet-950 dark:text-primary">
                    Explore Our Services
                </h2>
                <p className="text-gray-300 px-8 md:px-0 text-sm">
                    We are self-service data analytics software that lets you create visually appealing
                    dashboards in minutes.
                </p>
            </div>

            {/* card section */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                {
                    skillsData.map((skill, index) => (
                        <div key={index} className="card space-y-3 sm:space-y-4 p-4 max-w-sm">
                            <div>
                                {skill.icon}
                            </div>
                            <h2 className="text-xl font-semibold">
                                {skill.name}
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 px-2 md:px-0">
                                {skill.description}
                            </p>
                        </div>
                    ))
                }
            </div>

            {/* button section */}
           <div className="text-center mt-4 sm:mt-8">
            <Button 
                className="bg-primary px-6 py-2 rounded-lg hover:bg-primary/80 duration-300 
                        transition-colors cursor-pointer delay-200 ease-in-out active:ring-1"
                label="Learn More"
              />
           </div>
        </div>
    </section>
  )
}

export default Services