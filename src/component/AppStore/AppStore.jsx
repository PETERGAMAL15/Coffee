import AppStoreImg from "../../assets/website/app_store.png";
import PlayStoreImg from "../../assets/website/play_store.png";
import BgPng from "../../assets/website/coffee-beans-bg.png";
const backgroundStyle = {
  backgroundImage: `url(${BgPng})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  height: "100%",
  width: "100%",
};
const AppStore = () => {
  return (
    <section style={backgroundStyle} className="py-12">
      <div data-aos="fade-up" className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
          {/* Start Text-Content */}
          <AppText />
          {/* End Text-Content */}
          {/* Start Logo-Section */}
          <AppLogo />
          {/* End Logo-Section */}
        </div>
      </div>
    </section>
  );
};

function AppText() {
  return (
    <div className=" space-y-6 max-w-xl mx-auto">
      <h1
        className="text-2xl text-center sm:text-left sm:text-4xl font-semibold
  text-white/90 pl-3">
        Coffee Cafe is available for Android and IOS
      </h1>
    </div>
  );
}
function AppLogo() {
  return (
    <div>
      <div
        className="flex flex-wrap 
  justify-center items-center sm:justify-start">
        <a href="#">
          <img
            src={AppStoreImg}
            alt="AppStoreImg"
            className="max-w-[150px] 
      sm:max-w-[120px] md:max-w-[200px]"
          />
        </a>
        <a href="#">
          <img
            src={PlayStoreImg}
            alt="PlayStoreImg"
            className="max-w-[150px] 
      sm:max-w-[120px] md:max-w-[200px]"
          />
        </a>
      </div>
    </div>
  );
}

export default AppStore;
