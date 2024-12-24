import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Dilshad",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Sabir ali",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Dipankar kumar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Satya Narayan",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/103/103",
  },
];
const Testimonials = () => {
  return (
    <section className="py-14 mb-10">
      <div className="container">
        {/* Header section */}
        <HeaderSec />
        {/* Testimonials Cards section  */}
        <TestimonialCard />
      </div>
    </section>
  );
};
function HeaderSec() {
  return (
    <div data-aos="fade-up" className="text-center mb-20">
      <h1 className="text-4xl font-bold text-gray-800 font-cursive">
        Testimonials
      </h1>
    </div>
  );
}

function TestimonialCard() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div data-aos="zoom-in">
      <Slider {...settings}>
        {TestimonialData.map((item) => {
          return (
            <div className="my-4" key={item.id}>
              <div
                className="flex flex-col gap-4 shadow-lg py-8 px-6
          mx-4 rounded-xl bg-primary/10 relative">
                {/* Image sec */}

                <CardImage item={item} />
                {/* Content sec */}
                <CardContent item={item} />
                {/* Quotation mark */}
                <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                  ,,
                </p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

function CardImage({ item }) {
  return (
    <div className="mb-4">
      <img src={item.img} alt="" className="w-20 h-20 rounded-full " />
    </div>
  );
}
function CardContent({ item }) {
  return (
    <div
      className="flex flex-col 
item-center gap-4">
      <div className="space-y-3">
        <p className="text-xs text-gray-500">{item.text}</p>
        <h1
          className="text-xl font-bold text-black/60
font-cursive">
          {item.name}
        </h1>
      </div>
    </div>
  );
}
export default Testimonials;
