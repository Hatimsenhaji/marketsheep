// Details.js
import React from "react";
import { useParams } from "react-router-dom";
import Produit from "../../Stock/Produit";

const Details = () => {
  const { id } = useParams();
  const product = Produit.find((item) => item.id === parseInt(id));

  if (!product) {
    return (
      <div className="container mt-5" style={{ marginTop: '80px' }}>
        <h2 className="text-danger">المنتج غير موجود</h2>
      </div>
    );
  }

  return (
    <div className="container mt-5" >
      <div className="card mb-3" style={{ maxWidth: "800px", marginTop: '80px' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={process.env.PUBLIC_URL + "/" + product.Photo}
              className="img-fluid rounded-start"
              alt={product.NomMoto}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{product.NomMoto}</h5>
              <p className="card-text">{product.Mark}</p>
              <p className="card-text">
                <strong>السعر: </strong>
                {product.Prix} درهم
              </p>
              <img
                src={process.env.PUBLIC_URL + "/" + product.Detail}
                className="img-fluid mt-3 rounded"
                alt="تفاصيل المنتج"
                style={{ maxHeight: "300px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
