
import ContactInfo from "./footer/ContactInfo";
import ContactForm from "./footer/ContactForm";
import FooterBottom from "./footer/FooterBottom";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <ContactInfo />
          <ContactForm />
        </div>
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;
