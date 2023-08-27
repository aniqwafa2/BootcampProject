import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { detailPaket } from "../../axios/jokiAxios";
import { editPaket } from "../../axios/jokiAxios";

const EditJoki = () => {
  const imageMimeType = /image\/(png|jpg|jpeg)/i;
  const [file, setFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState(null);
  const [form, setForm] = useState({
    price: 0,
    description: "",
    image: null,
  });

  const navigate = useNavigate();

  const changeHandler = (e) => {
    const file = e.target.files[0];
    if (!file.type.match(imageMimeType)) {
      alert("Image mime type is not valid");
      return;
    }
    setFile(file);
    setForm({ ...form, image: e.target.files[0] });
  };

  const params = useParams();
  const { id } = params;

  useEffect(() => {
    detailPaket(+id, (result) => {
      setForm({
        description: result.description,
        image: result.image,
        price: result.price
      });
    });
  }, []);

  useEffect(() => {
    let fileReader,
      isCancel = false;
    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURL(result);
        }
      };
      fileReader.readAsDataURL(file);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file]);

  const submitHandler = () => {
    editPaket(+id, form)
    navigate("/joki")
  };

  return (
    <>
      <div className="container px-2 pb-3 wrap-content-not-full">
        <div className="text-white row gx-5">
          <div className="col position-relative">
            <img
              src={
                fileDataURL ??
                (form.image
                  ? `http://localhost:3000/uploaded/${form.image}`
                  : "https://placehold.co/200x200")
              }
              className="img-preview"
              alt="..."
            />
          </div>
          <div className="col">
            <h3>Edit Joki</h3>
            <form className="pb-3">
              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea
                  type="text"
                  className="form-control"
                  value={form.description}
                  onChange={(e) =>
                    setForm({ ...form, description: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Price</label>
                <input
                  type="number"
                  value={form.price}
                  className="form-control"
                  onChange={(e) => setForm({ ...form, price: e.target.value })}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Image</label>
                <input
                  type="file"
                  className="form-control"
                  accept=".png, .jpg, .jpeg"
                  onChange={changeHandler}
                />
              </div>
              <button
                onClick={submitHandler}
                type="submit"
                className="btn btn-secondary"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditJoki;
