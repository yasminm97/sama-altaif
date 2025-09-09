import logo from "../assets/logo/logo.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

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
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-600 to-teal-400 flex items-center justify-center text-white font-bold">
              <img src={logo} />
            </div>
            <div>
              <h1 className="text-lg font-semibold">
                Sama Al-Taif —{" "}
                <span className="font-normal">
                  Laboratory-grade supplements
                </span>
              </h1>
              <p className="text-xs text-gray-500">
                Clinically supported • Third-party tested
              </p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a className="hover:text-teal-600" href="#products">
              Products
            </a>
            <a className="hover:text-teal-600" href="#benefits">
              Why Sama Al-Taif
            </a>
            <a className="hover:text-teal-600" href="#faq">
              FAQ
            </a>
            <a
              className="px-4 py-2 border rounded-md text-sm bg-gradient-to-r from-teal-500 to-blue-500 text-white hover:opacity-95"
              href="#buy"
            >
              Shop Now
            </a>
          </nav>
        </div>
      </header>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm text-teal-600 font-semibold">
              Laboratory-grade supplements
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold leading-tight">
              Clinically-formulated vitamins & supplements you can trust
            </h2>
            <p className="mt-4 text-gray-600">
              Transparent sourcing. Third-party testing. Potent, pure
              ingredients with evidence-backed dosages — made in GMP facilities.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="#buy"
                className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-teal-600 text-white font-medium"
              >
                Shop Bestsellers
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
                <img
                  alt="lab badge"
                  src={logo}
                  className="w-14 h-14 rounded-md"
                />
                <div>
                  <div className="text-sm font-semibold">
                    Third‑party tested
                  </div>
                  <div className="text-xs text-gray-500">
                    Certificate available on request
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <img
                  alt="non-gmo"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9FvuzJ1qO3GHurt0jULVZFHj3Ky37x3ET7w&s"
                  className="w-14 h-14 rounded-md"
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
                src="https://scitechdaily.com/images/Omega-3-Fish-Oil-Supplement.jpg"
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-6 bg-white p-4 rounded-xl shadow-lg w-64">
              <div className="flex items-center gap-4">
                <img
                  src="https://scitechdaily.com/images/Omega-3-Fish-Oil-Supplement.jpg"
                  alt="prod"
                  className="w-16 h-16 rounded-md object-cover"
                />
                <div>
                  <div className="text-sm font-semibold">
                    Omega+ Pure Fish Oil
                  </div>
                  <div className="text-xs text-gray-500">
                    EPA & DHA — 1000mg
                  </div>
                  <div className="mt-2 font-bold">$29.00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST ROW */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-center gap-6">
            <img
              src="https://static.vecteezy.com/system/resources/previews/023/654/784/non_2x/golden-logo-template-free-png.png"
              alt="partner1"
              className="h-20 w-auto object-contain"
            />
            <img
              src="https://static.vecteezy.com/system/resources/previews/023/654/784/non_2x/golden-logo-template-free-png.png"
              alt="partner2"
              className="h-20 w-auto object-contain"
            />
            <img
              src="https://static.vecteezy.com/system/resources/previews/023/654/784/non_2x/golden-logo-template-free-png.png"
              alt="partner1"
              className="h-20 w-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold">Best Sellers</h3>
          <a className="text-sm text-teal-600" href="#">
            View all products
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <article
              key={p.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-44 object-cover"
              />
              <div className="p-4">
                <h4 className="font-semibold">{p.title}</h4>
                <p className="text-sm text-gray-500">{p.subtitle}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="font-bold">{p.price}</div>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 rounded-md border text-sm">
                      Details
                    </button>
                    <button className="px-3 py-1 rounded-md bg-teal-600 text-white text-sm">
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold">Why choose Sama Al-Taif?</h3>
            <ul className="mt-6 space-y-4 text-gray-600">
              <li className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-md bg-teal-50 flex items-center justify-center font-semibold">
                  1
                </div>
                <div>
                  <div className="font-semibold">
                    Clinically effective dosages
                  </div>
                  <div className="text-sm">
                    We use evidence-backed ingredient levels in our formulas.
                  </div>
                </div>
              </li>

              <li className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-md bg-teal-50 flex items-center justify-center font-semibold">
                  2
                </div>
                <div>
                  <div className="font-semibold">Transparent sourcing</div>
                  <div className="text-sm">
                    Raw materials and COAs are available upon request.
                  </div>
                </div>
              </li>

              <li className="flex gap-4 items-start">
                <div className="w-7 h-7 rounded-md bg-teal-50 flex items-center justify-center font-semibold">
                  3
                </div>
                <div>
                  <div className="font-semibold">
                    Pure formulas — no fillers
                  </div>
                  <div className="text-sm">
                    We avoid unnecessary additives and allergens.
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src={logo}
                alt="lab"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ + CTA */}
      <section id="faq" className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold">Frequently asked questions</h3>
            <div className="mt-6 space-y-3">
              <details className="bg-white rounded-md p-4 shadow-sm">
                <summary className="font-semibold cursor-pointer">
                  Are your supplements third-party tested?
                </summary>
                <div className="mt-2 text-sm text-gray-600">
                  Yes — we test finished products and raw materials through
                  accredited labs. Certificates are available on request.
                </div>
              </details>

              <details className="bg-white rounded-md p-4 shadow-sm">
                <summary className="font-semibold cursor-pointer">
                  Do you ship internationally?
                </summary>
                <div className="mt-2 text-sm text-gray-600">
                  We ship to many countries — shipping options and rates are
                  shown at checkout.
                </div>
              </details>

              <details className="bg-white rounded-md p-4 shadow-sm">
                <summary className="font-semibold cursor-pointer">
                  What is your return policy?
                </summary>
                <div className="mt-2 text-sm text-gray-600">
                  30-day money-back guarantee for unopened or lightly used
                  products. See policy page for details.
                </div>
              </details>
            </div>
          </div>

          <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-xl p-8 flex flex-col justify-center">
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
            <p className="text-sm text-gray-600 mt-2">
              Location: Karrada – Al Wahda / Locality 904, Alley 28, House 13,
              Baghdad, Iraq
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.6012338175423!2d44.40672861500288!3d33.31920778083221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x155752a2f64d25bb%3A0x50e2d5a0c6b3e4f0!2sBaghdad%2C%20Iraq!5e0!3m2!1sen!2sus!4v1694262800000!5m2!1sen!2sus"
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
