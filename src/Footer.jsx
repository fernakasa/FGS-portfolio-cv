import SocialButtons from "./SocialButtons";

const Footer = () => {
  return (
    <footer className="bg-gray-400 p-4">
      {/* Información de contacto */}
      <div className="container mx-auto">
        <h2 className="font-semibold text-xl text-center">Contacto</h2>
        <div className="flex mx-auto justify-center items-center">
            <SocialButtons />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
