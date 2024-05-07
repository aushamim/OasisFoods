import Partners from "../../Components/Partners/Partners";

const AboutUs = () => {
  return (
    <div className="mt-16">
      <div className="grid grid-cols-2 gap-10">
        <div>
          <h1 className="text-3xl font-bold">The Story About Us</h1>
          <span className="w-[4.2rem] h-1 bg-lime-500 block mt-2"></span>
          <p className="mt-5 text-justify">
            Welcome to OasisFoods, where freshness meets convenience. Founded in
            2024, we&apos;re dedicated to bringing you the finest food items,
            from hand-picked fruits to succulent meats and artisanal breads. Our
            mission is simple: to provide unparalleled freshness and taste,
            sourced directly from local farmers and trusted suppliers.
            <br />
            <br />
            With our user-friendly website, ordering your favorite groceries is
            a breeze. Simply browse our curated selection, place your order, and
            enjoy prompt delivery to your doorstep. Join us on our journey to
            make good food accessible to all, and let OasisFoods be your oasis
            in the modern food landscape.
          </p>
        </div>
        <div>
          <img
            className="w-full rounded-lg"
            src="/assets/images/about-us.png"
            alt=""
          />
        </div>
      </div>

      <div className="mt-16 grid grid-cols-3 gap-10 items-center border rounded-lg p-5 py-10">
        <div className="flex items-center justify-center">
          <img className="w-12 mr-8" src="/assets/images/ic-1.png" alt="" />
          <div>
            <h1 className="text-4xl font-semibold">100%</h1>
            <p className="text-center">Happy Clients</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img className="w-14 mr-8" src="/assets/images/ic-2.png" alt="" />
          <div>
            <h1 className="text-4xl font-semibold">100</h1>
            <p className="text-center">Our Engineers</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img className="w-12 mr-8" src="/assets/images/ic-3.png" alt="" />
          <div>
            <h1 className="text-4xl font-semibold">10+</h1>
            <p className="text-center">Our Farms</p>
          </div>
        </div>
      </div>

      <div className="mt-16 px-20 grid grid-cols-3 gap-10 bg-[url(/assets/images/why-us-bg.png)] bg-cover bg-no-repeat rounded-lg">
        <div className="pt-16">
          <img className="w-full" src="/assets/images/why-us-1.png" alt="" />
        </div>
        <div className="col-span-2 pt-20">
          <h1 className="text-3xl font-bold">Why choose us</h1>
          <span className="w-[4.2rem] h-1 bg-lime-500 block mt-2"></span>
          <div className="grid grid-cols-2 gap-8 mt-8">
            <div className="flex items-center gap-3">
              <div className="bg-[#eaecf2] rounded-full p-3 aspect-square flex items-center justify-center">
                <img
                  className="w-10"
                  src="/assets/images/why-us-ic-1.png"
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Eat Healthier</h3>
                <p className="text-sm mt-2">
                  The healthiest product available on the market.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-[#eaecf2] rounded-full p-4 aspect-square flex items-center justify-center">
                <img
                  className="w-8"
                  src="/assets/images/why-us-ic-2.png"
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold">We Have Brands</h3>
                <p className="text-sm mt-2">
                  Certified to offer the best quality.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-[#eaecf2] rounded-full p-3 aspect-square flex items-center justify-center">
                <img
                  className="w-10"
                  src="/assets/images/why-us-ic-3.png"
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold">
                  Fresh And Clean Products
                </h3>
                <p className="text-sm mt-2">
                  Products packed with utmost care and ensuring best quality.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-[#eaecf2] rounded-full p-3 aspect-square flex items-center justify-center">
                <img
                  className="w-10"
                  src="/assets/images/why-us-ic-4.png"
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Modern Process</h3>
                <p className="text-sm mt-2">
                  Products processed with fully automatic machinary.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Partners></Partners>
    </div>
  );
};

export default AboutUs;
