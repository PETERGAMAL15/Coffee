import HeroImg from "../../assets/coffee2.png";
const Home = () => {
  return (
    <section
      className="min-h-[550px] sm:min-h-[600px]
    bg-brandDark flex justify-center items-center
    text-white">
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* Text content section */}
          <TextContent />
          {/* Image section */}
          <ImageSec />
        </div>
      </div>
    </section>
  );
};

const TextContent = () => {
  return (
    <div className="order-2 sm:oder-1 flex flex-col justify-center gap-6">
      <h1
        data-aos="fade-up"
        data-aos-once="true"
        className="text-5xl sm:text-6xl lg:text-7xl
    font-bold">
        We serve the richest{" "}
        <span
          data-aos="zoom-out"
          data-aos-daley="300"
          className="text-primary font-cursive">
          Coffee
        </span>{" "}
        in the city
      </h1>
      <div data-aos="fade-up" data-aos-daley="400">
        <button
          className="bg-gradient-to-t from-primary
      to-secondary px-4 py-2 rounded-full text-white hover:scale-105
      border-2 border-primary duration-200">
          Coffee And Code
        </button>
      </div>
    </div>
  );
};

const ImageSec = () => {
  return (
    <div
      data-aos="zoom-in"
      className="min-h-[450px] flex justify-center items-center
  order-1 sm:order-2 relative">
      <img
        src={HeroImg}
        alt="cup of coffee"
        className="w-[300px] sm:w-[450px] sm:scale-110
    mx-auto spin"
      />
      <div
        data-aos="fade-left"
        className="bg-gradient-to-r from-primary
    to-secondary absolute top-10 left-10 p-3
    rounded-xl">
        <h1>Hey Coder</h1>
      </div>
      <div
        data-aos="fade-right"
        className="bg-gradient-to-r from-primary
    to-secondary absolute bottom-10 right-10 p-3
    rounded-xl">
        <h1>Best Coffee</h1>
      </div>
    </div>
  );
};
export default Home;
