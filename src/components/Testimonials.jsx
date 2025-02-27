import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const testimonialData = [
    {
      id: 1,
      name: "David Calathan - Director of Design Operations, New York",
      text: "The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be.",
      img: "https://picsum.photos/101/101",
    },
    {
      id: 1,
      name: "David Calathan - Director of Design Operations, New York",
      text: "The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be.",
      img: "https://picsum.photos/102/102",
    },
    {
      id: 1,
      name: "Smith - Director of Operations, New York",
      text: "The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be.",
      img: "https://picsum.photos/103/103",
    },
  ];

const Testimonials = () => {

    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
    };

  return (
    <section className="bg-white dark:bg-gray-950 dark:text-white">
        <div className="container mx-auto py-12 ">
            {/* testimonial section */}
            <div className="grid grid-cols-1 max-w-screen-xl mx-auto gap-6 ">
                <Slider {...settings}>
                    {
                        testimonialData.map(({id, name, text, img}) => (
                            <div key={id} className="my-6">
                               <div className="flex flex-col sm:flex-row gap-8 md:gap-14 p-4 mx-4 rounded-xl 
                                dark:bg-gray-800 relative ">
                                    <img 
                                        src={img} 
                                        alt="image" 
                                        className="block mx-auto h-[300px] w-full sm:w-[200px] object-cover"
                                    />
                                    <div className="space-y-6">
                                        <p className="text-gray-500 dark:text-white/80 xl:pr-40">
                                            {text}
                                        </p>
                                        <p className="text-xl font-bold">{name}</p>
                                        <p className="text-gray-400 absolute text-[12rem] font-serif 
                                        bottom-0 right-0">
                                            ,,
                                        </p>
                                    </div>
                               </div>

                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    </section>
  )
}

export default Testimonials