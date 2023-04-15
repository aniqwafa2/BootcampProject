import React, { useState } from "react";

const AddJoki = () => {
  const [fileDataURL, setFileDataURL] = useState(null);
  const [form, setForm] = useState({
    name: "",
    description: "",
    image: null,
  });

  const submitHandler = () => {};

  return (
    <>
      <div className="container px-2 pb-3">
        <div className="text-white row gx-5">
          <div className="col position-relative">
            <img
              src={fileDataURL ?? "https://placehold.co/200x200"}
              class="img-preview"
              alt="..."
            />
          </div>
          <div className="col">
            <h3>Add Joki</h3>
            <form className="pb-3">
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea
                  type="text"
                  className="form-control"
                  onChange={(e) =>
                    setForm({ ...form, description: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Image</label>
                <input
                  type="file"
                  className="form-control"
                  onChange={(e) =>
                    setForm({ ...form, image: e.target.files[0] })
                  }
                />
              </div>
              <button
                onSubmit={submitHandler}
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

export default AddJoki;
