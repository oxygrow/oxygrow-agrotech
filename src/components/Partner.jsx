import React from "react";
import Image from "next/image";
import Oasis from "@/Assets/partners/oasis.png";
import NinjaCart from "@/Assets/partners/ninjacart.png";
import ExportIndia from "@/Assets/partners/exportindia.png";
import IFBLogo from "@/Assets/partners/ifb.png";
import JdMart from "@/Assets/partners/jdmart.png";
import Patanjali from "@/Assets/partners/patanjali.png";
import Reliance from "@/Assets/partners/reliance.png";
import TradeIndia from "@/Assets/partners/tradeindia.png";

const Partner = () => {
  return (
    <div className="p-8 text-center lg:my-16">
      <h1 className="mb-3 secondary-text">
        Partners in Success: Our Esteemed Clients
      </h1>
      <p className="mb-10 description-text">
        A diverse community of valued clients who have Trusted and chosen us for
        excellence, reliability, and innovation.
      </p>
      <div className="grid grid-cols-2 gap-6 md:gap-10 md:px-40 place-items-center logos lg:grid-cols-3">
        <div>
          <Image src={Oasis} alt="oasis" />
        </div>
        <div>
          <Image src={IFBLogo} alt="ifb" />
        </div>
        <div>
          <Image src={Reliance} alt="reliance" />
        </div>
        <div>
          <Image src={JdMart} alt="jdmart" />
        </div>
        <div>
          <Image src={NinjaCart} alt="ninjaCart" />
        </div>
        <div>
          <Image src={Patanjali} alt="patanjali" />
        </div>
        <div>
          <Image src={TradeIndia} alt="tradeindia" />
        </div>
        <div>
          <Image src={ExportIndia} alt="exportindia" />
        </div>
      </div>
    </div>
  );
};

export default Partner;
