import 'boxicons'

const SocialButtons = () => {
  return (
    <div className="grid gap-4 grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 mt-2">
      <div>
        <a href="https://www.linkedin.com/in/fernasanchez/" className="flex bg-[#242434] hover:bg-gray-600 text-white font-bold py-2 px-2 gap-1 rounded justify-center items-center">
          <box-icon type='logo' name='linkedin-square' size='md' color='white'></box-icon>
          <p>LinkedIn</p>
        </a>
      </div>
      <a href="https://github.com/fernakasa" className="flex bg-[#242434] hover:bg-gray-600 text-white font-bold py-2 px-2 gap-1 rounded justify-center items-center">
        <box-icon type='logo' name='github' size='md' color='white'></box-icon>
        <p>Github</p>
      </a>
      <a href="https://api.whatsapp.com/send?phone=5493794598282" className="flex bg-[#242434] hover:bg-gray-600 text-white font-bold py-2 px-2 gap-1 rounded justify-center items-center">
        <box-icon name='whatsapp' type='logo' size='md' color='white'></box-icon>
        <p>Whatsapp</p>
      </a>
      <a href="https://api.whatsapp.com/send?phone=5493794598282" className="flex bg-[#242434] hover:bg-gray-600 text-white font-bold py-2 px-2 gap-1 rounded justify-center items-center">
        <box-icon name='gmail' type='logo' size='md' color='white'></box-icon>
        <p>Gmail</p>
      </a>
    </div>
  );
};

export default SocialButtons;
