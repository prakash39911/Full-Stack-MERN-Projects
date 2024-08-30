import { appDownloadIcon, landingImage } from "@/assets";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white rounded-lg shadow-lg flex flex-col gap-5 items-center py-10 -mt-20">
        <h1 className="font-bold tracking-tight text-5xl text-orange-600">
          Tuck into a takeaway today
        </h1>
        <span className="text-xl">Food is just a click away</span>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <img src={landingImage} alt="landing image" />
        </div>
        <div className=" flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Order takeaway even faster
          </span>
          <span>
            Download the GoEats App for fater ordering and personalized
            recommendations
          </span>
          <img src={appDownloadIcon} alt="app download icon" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
