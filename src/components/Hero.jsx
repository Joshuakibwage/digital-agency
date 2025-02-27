import Button from "../components/Button"

const Hero = () => {
  return (
    <section className=" dark:text-white duration-300">
        <div className="container mx-auto min-h-[620px] flex">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center px-6 md:px-0">
                {/* image section */}
                <div className="order-1 sm:order-2 relative">
                    <img 
                        src="src/assets/website/team.png" 
                        alt="hero image" 
                        className=""
                    />
                    <div className="bg-white dark:bg-gray-950 px-4 py-2 shadow-md rounded-xl absolute 
                    -bottom-5 -right-8 shadow-gray-700">
                        <p>
                        ⭐ Projects
                        </p>
                        <h1 className="font-bold">
                            600+ <span className="font-normal">Done</span>
                        </h1>
                    </div>
                </div>

                {/* Text content section */}
                <div className=" space-y-5 order-2 sm:order-1">
                    <h1 className="text-4xl md:5xl font-semibold">
                        Building brands in the <span className="text-primary">Digital Agency</span>
                    </h1>
                    <p className="text-sm text-gray-300 leading-normal ">
                        Your partner in navigating the ever-evolving landscape of digital marketing.
                        From conceptualization to execution, we create strategies that are not just
                        impactful but also sustainable. We are a team of passionate individuals who
                        believe in the power of digital marketing, and we are here to help you grow your
                        business.
                        
                    </p>

                    <Button 
                        label="Get Started" 
                        className="bg-primary text-white hover:bg-primary/80 duration-300  rounded-lg
                        transition-colors cursor-pointer delay-200 ease-in-out px-4 py-2  active:ring-1"   
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero