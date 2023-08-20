/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const ProjectCard = ({ id, titulo, imgUrl, descripcion, link }) => {
  return (
    <div className="border p-4 border-[#444c54] rounded shadow-xl">
      <h3 className="text-lg pb-1 mb-2 border-b shadow-xl border-[#444c54] font-semibold text-gray-200">{titulo}</h3>
      <img src={imgUrl} alt={`Imagen del ${titulo}`} className="text-gray-200"/>
      <p className="text-gray-400">{descripcion}</p>
      <a href={link} className=" hover:underline text-gray-500 hover:text-blue-500">
        Ver más
      </a>
    </div>
  );
};

export default ProjectCard;
