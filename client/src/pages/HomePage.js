import React, { useState } from "react";
import image from "../assets/mobile_legend.jpg";
import bg_header from '../assets/bg-header'
import { Link } from "react-router-dom";
import { AiFillFilter } from "react-icons/ai";

const HomePage = () => {
  // const [search, setSearch] = useState("");
  const item = [1, 2, 3, 4, 5, 6, 7, 8, 9, 23, 4, 453];

  // const filterHandler = (e) => {};

  const searchHandler = (e) => {};

  return (
    <>
      <img src={bg_header} alt="" className="bg-header" />
      {/* BsFilterSquare */}
      <div className="container pt-4 pb-2">
        <div class="d-flex justify-content-between">
          <form class="search-width">
            <input
              class="form-control me-1"
              type="search"
              placeholder="Search by name"
              aria-label="Search"
              onChange={(e) => searchHandler(e.target.value)}
            />
          </form>
          <Link className="btn btn-secondary mb-2" to="/brands/create">
            <AiFillFilter></AiFillFilter> Filter
          </Link>
        </div>
        <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-2">
          {item.length > 0 ? (
            item.map((brand) => {
              // const { id, name, since_year, image } = brand;
              return (
                <div className="col">
                  <Link to="/joki">
                    <div className="border rounded grid-hover card-list">
                      <div className="p-1">
                        <img
                          className="rounded img-wrap-list mx-auto d-block"
                          src={image}
                          alt=""
                        />
                        <div className="fs-2 title-wrap">Name</div>
                        <hr className="divider" />
                        <div className="text-description-time">Description</div>
                        <br />
                        {/* <div class="btn-group">
                        <AiOutlineMenu
                          type="button"
                          id="dropdownMenuButton"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        ></AiOutlineMenu>
                        <ul
                          class="dropdown-menu"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <li>
                            <Link
                              className="dropdown-item"
                              // to={`/brands/edit/${id}`}
                            >
                              Edit
                            </Link>
                          </li>
                          <li>
                            <button
                              className="dropdown-item"
                              // onClick={() => deleteHandler(+id)}
                            >
                              Delete
                            </button>
                          </li>
                        </ul>
                      </div> */}
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })
          ) : (
            <h4>Data Kosong</h4>
          )}
        </div>
      </div>
    </>
  );
};

export default HomePage;
