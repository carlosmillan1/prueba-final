import React from "react";

const Register = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h1 className="text-center mb-4">Registro</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">Nombre</label>
            <input type="text" className="form-control" id="firstName" required />
          </div>
          <div className="mb-3">
            <label htmlFor="vehiculo" className="form-label">Tipo de Vehículo</label>
            <input type="text" className="form-control" id="vehiculo" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="text" className="form-control" id="email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input type="text" className="form-control" id="contraseña" required />
          </div>
          
          <button type="submit" className="btn btn-primary w-100">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Register;