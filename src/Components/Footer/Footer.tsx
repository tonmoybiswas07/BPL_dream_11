import footerImg from "../../assets/logo-footer.png"

const Footer = () => {
  return (
    <div className="bg-[#131313] text-white mt-50 pt-50">
      <div className="footer-image flex justify-center items-center">
        <img src={footerImg} alt="" />
      </div>
      <div className="footer-content flex justify-between items-center p-20">
        <div>
          <h3 className="font-bold text-2xl">About Us</h3>
          <p>
            We are a passionate team <br /> dedicated to providing the best{" "}
            <br /> services to our customers.
          </p>
        </div>
        <div>
          <ul>
            <h2 className="font-bold text-2xl">Quick Links</h2>
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h2 className="font-bold text-2xl">Subscribe</h2>
          <p>
            Subscribe to our newsletter for the <br /> latest updates.
          </p>
          <div className="input-field">
            <input type="email" name="" id="" className="bg-white rounded-md py-2" />

            <button className="bg-white text-black rounded-md px-2 py-2">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <p className="text-center p-5">@2026 Tonmoy Tech All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
