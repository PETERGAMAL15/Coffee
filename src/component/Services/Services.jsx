import Img2 from "../../assets/coffee2.png";
const ServicesData = [
  {
    id: 1,
    img: Img2,
    name: "Espresso",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis",
    aosDelay: "100",
  },
  {
    id: 2,
    img: Img2,
    name: "Americano",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis",
    aosDelay: "300",
  },
  {
    id: 3,
    img: Img2,
    name: "Cappuccino",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis",
    aosDelay: "500",
  },
];
const Services = () => {
  return (
    <>
      <span id="services"></span>
      <section className="py-10">
        <div className="container">
          {/* Herder text */}
          <TextHeader />
          {/* Services Card section */}
          <Card />
        </div>
      </section>
    </>
  );
};

function TextHeader() {
  return (
    <div className="text-center mb-20">
      <h1 className="text-4xl font-bold text-gray-800 font-cursive">
        Best Coffee For You
      </h1>
    </div>
  );
}
function Card() {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 
md:gap-5 place-items-center ">
      <CardList />
    </div>
  );
}
function CardList() {
  return (
    <>
      {ServicesData.map((data, index) => (
        <div
          data-aos="fade-up"
          data-aos-delay={data.aosDelay}
          key={index}
          className="bg-white hover:bg-primary rounded-2xl hover:text-white
        shadow-xl duration-200 max-w-[300px] group relative">
          {/* img section */}
          <CardImg data={data} />
          {/* text content */}
          <CardText data={data} />
        </div>
      ))}
    </>
  );
}
function CardImg({ data }) {
  return (
    <div className="h-[122px]">
      <img
        src={data.img}
        alt="cup of coffee"
        className="max-w-[200px] block mx-auto 
          transform -translate-y-14 group-hover:scale-110
          group-hover:rotate-45 duration-300"
      />
    </div>
  );
}
function CardText({ data }) {
  return (
    <div className="p-4 text-center">
      <h1 className="text-xl font-bold">{data.name}</h1>
      <p
        className="text-gray-500 group-hover:text-white 
          duration-300 text-sm line-clamp-2">
        {data.description}
      </p>
    </div>
  );
}

export default Services;
