import React from "react";
import { Link } from "react-router-dom";

const ListJoki = () => {
  const item = [1, 2, 3, 4, 5, 6, 7, 8, 9, 23, 4, 4, 5, 5, 6, 9, 5, 3, 2, 4, 5];
  return (
    <>
      {/* <div className="padding-top bg-header container">
      </div> */}
      <h4 className="">My Joki</h4>
      <div className="row">
        {item.length > 0 ? (
          item.map((brand, index) => {
            // const { id, name, since_year, image } = brand;
            return (
              <div class="col-6 mb-2 custom-card">
                <div class="card">
                  <div class="card-header">Featured</div>
                  <div class="">
                    <h5 class="">Special title treatment</h5>
                    <p class="">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                    <Link href="#" class="btn btn-primary">
                      {index}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <h4>Data Kosong</h4>
        )}
      </div>
      <div className="pb-3" />
    </>
  );
};

export default ListJoki;
