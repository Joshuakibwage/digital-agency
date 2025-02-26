import Brand1 from "../assets/brands/1.svg"
import Brand2 from "../assets/brands/2.svg"
import Brand3 from "../assets/brands/3.svg"
import Brand4 from "../assets/brands/4.svg"
import Brand5 from "../assets/brands/5.svg"

const BrandLogo = () => {
  return (
    <section className="container mx-auto py-12">
        <h1 className="text-center font-semibold">Powering next-gen companies</h1>

        <div className="flex flex-wrap justify-evenly items-center gap-4 py-6 md:px-32">
            <img src={Brand1} alt="brand1" />
            <img src={Brand2} alt="brand1" />
            <img src={Brand3} alt="brand1" />
            <img src={Brand4} alt="brand1" />
            <img src={Brand5} alt="brand1" />
        </div>
    </section>
  )
}

export default BrandLogo