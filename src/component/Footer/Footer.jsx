import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import FooterBg from "../../assets/website/coffee-footer.jpg";
const FooterLinks = [
  { title: "Home", link: "/#" },
  { title: "Blog", link: "/#Blog" },
  { title: "About", link: "/#about" },
  { title: "Contact", link: "/#contact" },
];
const BgImage = {
  backgroundImage: `url(${FooterBg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  minHeight: "400px",
  with: "100%",
};
const Footer = () => {
  return (
    <footer style={BgImage} className="text-white">
      <div className="bg-black/40 min-h-[400px]">
        <div
          className="container grid md:grid-cols-3 
      pb-20 pt-5">
          {/* Company Details  */}
          <CompanyDetails />
          {/* Footer Links  */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            {/* First col Links */}
            <FirstCol />
            {/* second col Links */}
            <SecondCol />
            {/* Company Address section */}
            <CompanyAddress />
          </div>
        </div>
      </div>
    </footer>
  );
};

function CompanyDetails() {
  return (
    <div className="py-8 px-4">
      <a
        href="#"
        className="font-semibold text-2xl sm:text-3xl 
  tracking-widest font-cursive">
        Coffee Cafe
      </a>
      <p className="pt-4">
        Crafted Coffee, Cozy Vibes, Unforgettable Moments – Your Perfect
        Espresso Escape
      </p>
    </div>
  );
}
function FirstCol() {
  return (
    <div className="py-8 px-4">
      <h1 className="text-xl font-semibold sm:text-left mb-3">Footer Links</h1>
      <ul className="space-y-3">
        {FooterLinks.map((link, index) => (
          <li key={index}>
            <a
              href={link.link}
              className=" inline-block 
        hover:scale-105 duration-200">
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
function SecondCol() {
  return (
    <div className="py-8 px-4">
      <h1 className="text-xl font-semibold sm:text-left mb-3">Quick Links</h1>
      <ul className="space-y-3">
        {FooterLinks.map((link, index) => (
          <li key={index}>
            <a
              href={link.link}
              className=" inline-block 
        hover:scale-105 duration-200">
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
function CompanyAddress() {
  return (
    <div className="py-8 px-4 col-span-2 sm:col-auto">
      <h1 className="text-left mb-3">Address</h1>
      <div>
        <p>123 Main Street,Cairo, NY 10030</p>
        <p>+20 1234567890</p>
        {/* Social links  */}
        <div className="space-x-3 mt-6 flex ">
          <a href="#">
            <FaFacebook className="text-3xl  hover:scale-110 duration-200 hover:text-secondary/60" />
          </a>
          <a href="#">
            <FaInstagram className="text-3xl  hover:scale-110 duration-200 hover:text-secondary/60" />
          </a>
          <a href="#">
            <FaLinkedin className="text-3xl  hover:scale-110 duration-200 hover:text-secondary/60" />
          </a>
        </div>
      </div>
    </div>
  );
}
export default Footer;
