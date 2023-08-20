const Header = () => {
  return (
    <header className="md:flex items-center border border-[#444c54] m-4 gap-8 rounded shadow-xl px-8 py-4">
      <img
        src="https://media.licdn.com/dms/image/C4D03AQE5ISTx80YVJg/profile-displayphoto-shrink_200_200/0/1656602242611?e=1698278400&v=beta&t=x_iUuPf8882QliAYDWV6X7mLh6WpMQqzzKXkSgEmxDA"
        alt="Imagen de Fer"
        className="w-24 h-24 rounded-full text-gray-200"
      />
      <div className="">
        <h1 className='font-bold text-3xl text-gray-200'>Fernando Gustavo <span className='uppercase'>sanchez</span></h1>
        <h2 className='font-semibold text-xl mt-2 text-gray-200'>Analista en Sistemas de Información</h2>
        <h2 className='font-semibold text-xl text-gray-200'>Técnico en Diseño y Programación de Videojuegos</h2>
        <p className="text-gray-300 mt-2">
          Soy un apasionado por la tecnología, el darrollo web y de aplicaciones como así también del desarrollo y programación de videojuegos.
        </p>
      </div>
    </header>
  )
}

export default Header
