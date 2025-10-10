import miembros from "../data/Miembros";

const AboutMiembros = () => {
  return (
    <>
    <section className="container py-5">
      <h2 className="text-center mb-5 fw-bold">About Us</h2>

      {/* Fila de 3 integrantes */}
      <div className="row justify-content-center mb-4">
        {miembros.slice(0, 3).map((member, index) => (
          <div key={index} className="col-md-4 col-sm-6 mb-4 d-flex justify-content-center">
            <div className="card shadow-sm" style={{ width: "16rem" }}>
              <img src={member.img} className="card-img-top" alt={member.name} />
              <div className="card-body text-center">
                <h5 className="card-title mb-1">{member.name}</h5>
                <p className="card-text text-muted">{member.lu}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fila de 2 integrantes */}
      <div className="row justify-content-center">
        {miembros.slice(3, 5).map((member, index) => (
          <div key={index} className="col-md-4 col-sm-6 mb-4 d-flex justify-content-center">
            <div className="card shadow-sm" style={{ width: "16rem" }}>
              <img src={member.img} className="card-img-top" alt={member.name} />
              <div className="card-body text-center">
                <h5 className="card-title mb-1">{member.name}</h5>
                <p className="card-text text-muted">{member.lu}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default AboutMiembros;
