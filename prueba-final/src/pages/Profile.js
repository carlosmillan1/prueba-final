import React from 'react';

const Profile = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Perfil</h1>
      <div className="card mx-auto" style={{ maxWidth: '500px' }}>
        <div className="card-body">
          <h5 className="card-title">Nombre de usuario</h5>
          <p className="card-text">Correo: usuario@ejemplo.com</p>
          <p className="card-text">Miembro desde: 2023</p>
          <button className="btn btn-primary w-100 mt-3" onClick={() => alert('Función para editar perfil en construcción')}>
            Editar Perfil
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
