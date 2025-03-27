import smp from "./assets/sym.jpg";
import { FaArrowRightLong } from "react-icons/fa6";

function App() {
  return (
    <>
      {/* Centered Navbar */}
      <div className="fixed top-0 left-1/2 transform -translate-x-1/2 pt-2 z-20">
        <div className="relative w-fit px-6 py-1 rounded-lg shadow-md">
          {/* Blurred Background Layer */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-md rounded-lg"></div>

          {/* Navbar Content (Text is NOT Blurred) */}
          <div className="relative flex gap-5 text-[15px] text-gray-300">
            <h1>Service</h1>
            <h1>Product</h1>
            <h1>Item</h1>
            <h1>Pricing</h1>
            <h1>FAQ</h1>
            <h1>Contacts</h1>
          </div>
        </div>
      </div>

      {/* Background Section */}
      <div className="relative h-screen">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${smp})` }}
        >
          {/* Blurred Overlay */}
          <div className="absolute inset-0 backdrop-blur-lg bg-black/30"></div>
        </div>

        {/* Content (Not Blurred) */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-3xl">
          <div className="flex flex-col items-center text-center gap-2">
            <h1 className="text-6xl">Halo AI Studio.</h1>
            <h2 className="text-sm">
              We make the AI for circuit for the World
            </h2>
          </div>
          <div>
            <div className="flex gap-3 h-[40px] tracking-tighter items-center justify-center rounded-md text-gray-300 mt-6 bg-black/70 w-fit text-[14px] pl-2 pr-1 py-1">
              <div>Our services</div>
              <div className="px-3 py-0 h-[30px] flex items-center justify-center gap-2 leading-0 border rounded-md border-gray-200">
                Contact us
                <FaArrowRightLong />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
