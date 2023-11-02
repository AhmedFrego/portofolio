
import Service from "../../components/Service";
import Section from "../../components/layout/Section";

import { SERVICES } from "../../store/DUMMY-DATA/servise";

const Services = () => {
  return (
    <Section name="services" title>
      {SERVICES.map((service) => <Service description={service.description} title={service.title} key={service.title} />)}
    </Section>
  );
};

export default Services;
