import footerImg from "../../assets/logo-footer.png"
import NewsLetter from "../NewsLetter/NewsLetter";


const Footer = () => {
  return (

  <div className="bg-[#131313] text-white mt-50 pt-50 relative">
<NewsLetter/>
  {/* Footer Image */}
  <div className="flex justify-center items-center px-5">
    <img
      src={footerImg}
      alt="Footer illustration"
      className="w-[220px] md:w-[300px] lg:w-[380px] object-contain"
    />
  </div>

  {/* Footer Content */}
  <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

    {/* About Us */}
    <div>
      <h3 className="font-bold text-2xl mb-5">
        About Us
      </h3>

      <p className="text-gray-400 leading-7">
        We are a passionate team
        <br />
        dedicated to providing the best
        <br />
        services to our customers.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h2 className="font-bold text-2xl mb-5">
        Quick Links
      </h2>

      <ul className="space-y-3 text-gray-400">
        <li>
          <a href="#" className="hover:text-white transition">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-white transition">
            Services
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-white transition">
            About
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-white transition">
            Contact
          </a>
        </li>
      </ul>
    </div>

    {/* Subscribe */}
    <div>
      <h2 className="font-bold text-2xl mb-5">
        Subscribe
      </h2>

      <p className="text-gray-400 leading-7 mb-5">
        Subscribe to our newsletter for the
        <br />
        latest updates.
      </p>

      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          placeholder="Your email"
          className="w-full bg-white text-black px-4 py-3 rounded-lg outline-none"
        />

        <button className="bg-white text-black font-semibold px-5 py-3 rounded-lg hover:bg-gray-200 active:scale-95 transition">
          Subscribe
        </button>
      </div>
    </div>

  </div>

  {/* Divider */}
  <div className="max-w-7xl mx-auto px-6">
    <div className="h-px bg-gray-700"></div>
  </div>

  {/* Copyright */}
  <p className="text-center text-gray-500 text-sm py-6">
    © 2026 Tonmoy Tech. All Rights Reserved.
  </p>

</div>
  );
};

export default Footer;
