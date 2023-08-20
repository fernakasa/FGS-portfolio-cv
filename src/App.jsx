import Header from './Header';
import ProjectCard from './ProjectCard';
import Footer from './Footer';
import proyectosData from './proyectos.json'; // Asumiendo que tienes un archivo proyectos.json

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-4">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {proyectosData.map((proyecto) => (
            <ProjectCard
              key={proyecto.id}
              titulo={proyecto.titulo}
              imgUrl={proyecto.imgUrl}
              descripcion={proyecto.descripcion}
              link={proyecto.link}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
