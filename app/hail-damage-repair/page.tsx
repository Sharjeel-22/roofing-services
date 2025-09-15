import { doorServices } from "@/components/constants";
import { HailDamageRepair } from "@/components/HailDamageRepair";
import { ServicesSection } from "@/components/ServicesCards";

const page = () => {
  return (
    <>
      <HailDamageRepair />
      <ServicesSection
        heading="Door Replacement & Installation Services"
        subheading="Enhance your home's style, security, and efficiency with our expert solutions."
        services={doorServices}
      />
    </>
  );
};

export default page;
