import React from 'react';

const Home = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">¡Bienvenido a Prueba Final!</h1>
      
      <div className="row align-items-center">
        {/* Sección de texto */}
        <div className="col-md-6">
          <h2>Descubre nuestra aplicación</h2>
          <p>
            Nuestra plataforma ofrece funcionalidades increíbles que te
            ayudarán a gestionar tus tareas de forma sencilla. ¡Regístrate
            ahora y comienza a disfrutar!
          </p>
          <a href="/register" className="btn btn-primary">
            Regístrate
          </a>
        </div>

        {/* Imagen */}
        <div className="col-md-6">
          <img
            src= "https://videocursos.co/wp-content/uploads/2024/05/curso-mecanica-automotriz.webp"
            alt="Ilustración"
            className="img-fluid rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
