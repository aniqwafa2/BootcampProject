import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { detailPaket } from "../../axios/jokiAxios";
import { addOrder } from "../../axios/userAxios";

const DetailJoki = () => {
  const [form, setForm] = useState({
    price: 0,
    description: "",
    image: null,
  });

  const navigate = useNavigate();

  const params = useParams();
  const { id } = params;

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
    navigate("/")
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
                <Link onClick={()=>orderHandler(id)} class="btn btn-dark">
                  Order
                </Link>
                <Link href="#" class="btn btn-dark mx-3">
                  Back
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card bg-secondary bg-gradient">
              <div class="card-body">
                <h4 class="card-title">Rule</h4>
                <h6 class="card-text">1. Segera menghungi penjoki</h6>
                <h6 class="card-text">2. Menigirimkan informasi login</h6>
                <h6 class="card-text">
                  3. Menunuggu penjoki menyelesaikan akun anda
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailJoki;
