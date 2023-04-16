import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { detailPaket } from "../../axios/jokiAxios";
import { addOrder } from "../../axios/userAxios";

const DetailJoki = (props) => {
  const { loginStatus } = props;
  const [form, setForm] = useState({
    price: 0,
    description: "",
    image: null,
  });

  const navigate = useNavigate();

  const params = useParams();
  const { id } = params;

  const changeLocation = (placeToGo) => {
    navigate(placeToGo, { replace: true });
    window.location.reload();
  };

  useEffect(() => {
    detailPaket(+id, (result) => {
      setForm({
        description: result.description,
        image: result.image,
        price: result.price,
      });
    });
  }, []);

  const orderHandler = () => {
    addOrder(id);
    navigate("/");
  };

  return (
    <>
      <div className="container px-2 pb-3 wrap-content-not-full">
        <div className="text-white row gx-5">
          <div className="col position-relative">
            <div class="card bg-secondary bg-gradient">
              <img
                src={
                  form.image
                    ? `http://localhost:3000/uploaded/${form.image}`
                    : "https://placehold.co/200x200"
                }
                className="card-img-top detail-image"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Paket {id}</h5>
                <p class="card-text">{form.description}</p>
                <button
                  onClick={() => orderHandler(id)}
                  class="btn btn-dark"
                  disabled={loginStatus.role !== "user" ? true : false}
                >
                  Order
                </button>
                <button
                  to="/"
                  onClick={() => changeLocation("/")}
                  class="btn btn-dark mx-3"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card bg-secondary bg-gradient">
              <div class="card-body">
                <h4 class="card-title">Rule setelah pesan</h4>
                <h6 class="card-text">1. Segera menghungi penjoki</h6>
                <h6 class="card-text">2. Menigirimkan informasi login</h6>
                <h6 class="card-text">
                  3. Menunuggu penjoki menyelesaikan akun anda
                </h6>
              </div>
            </div>
            {loginStatus.role !== "user" ? (
              <>
                <div class="card bg-secondary bg-gradient mt-3">
                  <div class="card-body">
                    <h5 class="card-title">Silahkan login sebelum pesan</h5>
                  </div>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailJoki;
