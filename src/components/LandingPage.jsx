import logo from "../assets/logo/logo.png";
import logo1 from "../assets/logo/logo1.png";
import partner1 from "../assets/partners/partner1.svg";
import partner2 from "../assets/partners/partner2.png";
import drugs from "../assets/imgs/drugs.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicroscope,
  faLeaf,
  faIndustry,
} from "@fortawesome/free-solid-svg-icons";

const products = [
  {
    id: 1,
    title: "Omega+ Pure Fish Oil",
    subtitle: "High-potency EPA & DHA",
    price: "$29.00",
    img: "https://scitechdaily.com/images/Omega-3-Fish-Oil-Supplement.jpg",
  },
  {
    id: 2,
    title: "Vitamin D3 2000 IU",
    subtitle: "Supports bone & immune health",
    price: "$14.50",
    img: "https://www.vitabiotics.com/cdn/shop/files/Ultra_Vitaimin_D_2000IU_Gallery_Image.jpg?crop=center&height=1024&v=1729783097&width=1024",
  },
  {
    id: 3,
    title: "Probiotic 30 Billion",
    subtitle: "Daily gut health formula",
    price: "$34.00",
    img: "https://www.vitacost.com/Images/Products/500/Renew-Life/Renew-Life-Probiotic-Adult-50-631257121127.jpg",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg  flex items-center justify-center">
              <img src={logo1} />
            </div>
            <div>
              <h1 className="text-lg font-semibold">
                Sama Al-Taif —{" "}
                <span className="font-normal">
                  Global pharmaceutical expertise
                </span>
              </h1>
              <p className="text-xs text-gray-500">
                Scientafic Burea • Third-party tested
              </p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a className="hover:text-teal-600" href="#benefits">
              Why Sama Al-Taif
            </a>
            <a
              className="px-4 py-2 border rounded-md text-sm bg-gradient-to-r from-teal-500 to-blue-500 text-white hover:opacity-95"
              href="#contact"
            >
              Contact Us
            </a>
          </nav>
        </div>
      </header>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm text-teal-600 font-semibold">
              Global pharmaceutical expertise
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold leading-tight">
              Your Trusted Partner in Advancing Healthcare in Iraq
            </h2>
            <p className="mt-4 text-gray-600">
              At Sama’a Al Teif, we are more than a scientific bureau — we are a
              trusted bridge between global pharmaceutical innovation and the
              Iraqi healthcare market. We deliver world-class medicines and
              medical supplies that empower healthcare professionals and improve
              patient outcomes.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="#partners"
                className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-teal-600 text-white font-medium"
              >
                Our Partners
              </a>
              <a
                href="#benefits"
                className="inline-flex items-center justify-center px-5 py-3 rounded-md border text-gray-700"
              >
                Why Sama Al-Taif
              </a>
            </div>

            <div className="mt-8 flex items-center gap-6">
              <div className="flex items-center gap-3">
                <FontAwesomeIcon
                  icon={faMicroscope}
                  className="text-2xl text-teal-600"
                />
                <div className="flex items-center gap-3">
                  <div>
                    <div className="text-sm font-semibold">
                      Third-party tested
                    </div>
                    <div className="text-xs text-gray-500">
                      Certificate available on request
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FontAwesomeIcon
                  icon={faIndustry}
                  className="text-2xl text-teal-600"
                />
                <div>
                  <div className="text-sm font-semibold">GMP Certified</div>
                  <div className="text-xs text-gray-500">
                    Manufactured in regulated facilities
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                alt="featured product"
                src={drugs}
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-6 bg-white p-4 rounded-xl shadow-lg w-64">
              <div className="flex items-center gap-4">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2913/2913465.png"
                  alt="trust"
                  className="w-16 h-16 rounded-md object-contain"
                />
                <div>
                  <div className="text-sm font-semibold">
                    Trusted by Healthcare Providers
                  </div>
                  <div className="text-xs text-gray-500">Since 2010</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST ROW */}
      <section id="partners" className="py-12 mt-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Partners</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
              <a href="https://topivac.com/en/">
                <img
                  src={partner1}
                  alt="Topivac"
                  className="h-24 w-auto mb-4 object-contain"
                />
              </a>
              {/* <h3 className="text-xl font-semibold mb-2">Topivac</h3>
              <p className="text-gray-600">
                A short description about Topivac, what they do, why partnership
                matters…
              </p> */}
            </div>
            <div className="flex-1 bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
              <a href="https://cosmoactive.com/">
                <img
                  src={partner2}
                  alt="Cosmoactive"
                  className="h-24 w-auto mb-4 object-contain"
                />
              </a>
              {/* <h3 className="text-xl font-semibold mb-2">Cosmoactive</h3>
              <p className="text-gray-600">
                A short description about Cosmoactive, what they bring, etc.
              </p> */}
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold">About us</h3>
            <ul className="mt-6 space-y-4 text-gray-600">
              <li className="flex gap-4 items-start">
                <div>
                  <div className="font-medium">
                    Sama’a Al Teif Scientific Bureau is a fully licensed
                    scientific office based in Baghdad, Iraq, specializing in
                    the registration, promotion, and distribution of
                    pharmaceutical products and medical supplies. Founded with a
                    vision to raise the standard of healthcare services, we
                    partner with international pharmaceutical and medical device
                    companies to ensure safe, effective, and innovative products
                    reach the right hands. Our dedicated team of professionals,
                    including pharmacists, medical representatives, and
                    regulatory experts, works closely with healthcare providers
                    across Iraq to support clinical excellence and patient
                    safety.
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="flex justify-center text-center items-center">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img src={logo} alt="lab" className="w-64 h-64 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* services */}
      <section id="faq" className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold">Our Services</h3>
            <div className="mt-6 space-y-3">
              <details className="bg-white rounded-md p-4 shadow-sm">
                <summary className="font-semibold cursor-pointer">
                  Pharmaceutical Promotion
                </summary>
                <div className="mt-2 text-sm text-gray-600">
                  Ethical, evidence-based promotion of medicines to physicians,
                  pharmacists, and healthcare institutions.
                </div>
              </details>
              <details className="bg-white rounded-md p-4 shadow-sm">
                <summary className="font-semibold cursor-pointer">
                  Medical Supplies Distribution
                </summary>
                <div className="mt-2 text-sm text-gray-600">
                  Delivering high-quality, certified medical devices and
                  consumables to hospitals and clinics.
                </div>
              </details>

              <details className="bg-white rounded-md p-4 shadow-sm">
                <summary className="font-semibold cursor-pointer">
                  Regulatory Affairs & Product Registration
                </summary>
                <div className="mt-2 text-sm text-gray-600">
                  Expertise in navigating Iraqi Ministry of Health requirements
                  to ensure smooth and timely product registration.
                </div>
              </details>
              <details className="bg-white rounded-md p-4 shadow-sm">
                <summary className="font-semibold cursor-pointer">
                  Market Research & Access Strategy
                </summary>
                <div className="mt-2 text-sm text-gray-600">
                  Providing data-driven insights and market strategies to
                  international partners seeking to expand in Iraq.
                </div>
              </details>
              <details className="bg-white rounded-md p-4 shadow-sm">
                <summary className="font-semibold cursor-pointer">
                  Scientific Support & Training
                </summary>
                <div className="mt-2 text-sm text-gray-600">
                  Organizing medical education programs, workshops, and
                  conferences to keep healthcare professionals updated.
                </div>
              </details>
            </div>
          </div>

          <div
            id="contact"
            className="bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-xl p-8 flex flex-col justify-center"
          >
            <h4 className="text-2xl font-bold">Contact Us</h4>
            <form className="mt-4 flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="border-2 border-amber-50 rounded-md p-3 text-white"
              />
              <input
                type="text"
                placeholder="Your Message"
                className="border-2 border-amber-50 rounded-md p-3 text-white"
              />
              <button className="px-4 py-3 rounded-md bg-white text-teal-700 font-semibold">
                Send
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col space-y-4">
            <img src={logo} className="h-20 w-20 rounded-lg" />
            <div className="font-bold text-lg">Sama Al-Taif</div>
            <p className="text-sm text-gray-600 mt-1">
              Location: Palestine Street, Baghdad, Iraq,
            </p>
            <p className="text-sm text-gray-600 mt-1">
              Phone: +964 780 513 7650 - +971 50 153 4077
            </p>
            <p className="text-sm text-gray-600 mt-1">
              Email: info@samaalteif.com
            </p>
            <div className="flex gap-4 mt-2">
              <a
                href="https://www.facebook.com"
                target="_blank"
                className="text-gray-600 hover:text-blue-600"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                className="text-gray-600 hover:text-pink-500"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                className="text-gray-600 hover:text-blue-700"
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>

          {/* Map Section */}
          <div className="col-span-1 md:col-span-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3332.065143828244!2d44.4010664756468!3d33.36936527342173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15578252c1952caf%3A0x718f9e2e2ec6a0ba!2sFalastin%20St%2C%20Baghdad%2C%20Baghdad%20Governorate%2C%20Iraq!5e0!3m2!1sen!2sus!4v1759270201067!5m2!1sen!2sus"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-sm"
            ></iframe>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-4 text-xs text-gray-500">
          © {new Date().getFullYear()} Sama Al-Taif. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
