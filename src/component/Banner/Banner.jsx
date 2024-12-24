import BannerImg from "../../assets/coffee-white.png";
import BgTexture from "../../assets/website/coffee-texture.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFoodSharp } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
const BgImage = {
  backgroundImage: `url(${BgTexture})`,
  backgroundColor: "#270c03",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  height: "100%",
  width: "100%",
};
const Banner = () => {
  return (
    <section style={BgImage}>
      <span id="about"></span>
      <div
        className="container min-h-[550px]
      flex justify-center items-center py-12 sm:py-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* start Image section */}
          <BannerImag />
          {/* End Image section */}
          {/* Start Text content section */}
          <BannerContent />
          {/* End content section */}
        </div>
      </div>
    </section>
  );
};

function BannerImag() {
  return (
    <div data-aos="zoom-in">
      <img
        src={BannerImg}
        alt="coffee"
        className="
  max-w-[430px] w-full mx-auto spin drop-shadow-xl"
      />
    </div>
  );
}

function BannerContent() {
  return (
    <div className="flex flex-col justify-center gap-6 sm:pt-0">
      <ContentHeader />
      <div className="grid grid-cols-2 gap-6">
        <ContentIcons />
        <ContentTea />
      </div>
    </div>
  );
}
function ContentHeader() {
  return (
    <>
      {" "}
      <h1
        data-aos="fade-up"
        className="text-3xl sm:text-4xl font-bold font-cursive  ">
        Premium Blen Coffee
      </h1>
      <p
        data-aos="fade-up"
        className="text-sm text-gray-500 tracking-wide leading-5">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
        reiciendis inventore iste ratione ex alias quis magni at optio
      </p>
    </>
  );
}

function ContentIcons() {
  return (
    <div className=" space-y-5">
      <div data-aos="fade-up" className="flex items-center gap-3">
        <GrSecure
          className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full
bg-yellow-100"
        />
        <span>Premium Coffee</span>
      </div>
      <div
        data-aos="fade-up"
        data-aos-daley="300"
        className="flex items-center gap-3">
        <IoFastFoodSharp
          className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full
bg-yellow-100"
        />
        <span>Hot Coffee</span>
      </div>
      <div
        data-aos="fade-up"
        data-aos-daley="500"
        className="flex items-center gap-3">
        <GiFoodTruck
          className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full
bg-yellow-100"
        />
        <span>Cold Coffee</span>
      </div>
    </div>
  );
}

function ContentTea() {
  return (
    <div
      data-aos="slide-left"
      className="border-l-4 border-primary/50
pl-6 space-y-3">
      <h1 className="text-2xl font-semibold font-cursive">Tea Lover</h1>
      <p className="text-gray-500 text-sm">
        Much like writing code, brewing the perfect cup of tea requires
        patience, precision, and a dash of passion to create a comforting blend
        of flavors.
      </p>
    </div>
  );
}
export default Banner;
