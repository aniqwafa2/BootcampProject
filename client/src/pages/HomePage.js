import React, { useState, useEffect } from "react";
import image from "../assets/mobile_legend.jpg";
import bg_header from "../assets/bg-header";
import { Link } from "react-router-dom";
import { AiFillFilter } from "react-icons/ai";
import Lottie from "react-lottie";
import * as loadAnimation from "../assets/lottie/73133-car-animation-front-view.json";
import * as successAnimation from "../assets/lottie/4022-success-animation.json";

const HomePage = () => {
  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(10);
  const [data, setData] = useState([]);
  const [pageNumberLimit, setpageNumberLimit] = useState(4);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(6);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
  const [loading, setLoading] = useState(undefined);
  const [completed, setCompleted] = useState(undefined);
  const item = [1, 2, 3, 4, 5, 6, 7, 8, 9, 23, 4, 453];

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((json) => {
          setData(json);
          setLoading(true);
          setTimeout(() => {
            setCompleted(true);
          }, 1500);
        });
    }, 1500);
  }, []);

  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: loadAnimation.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: successAnimation.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const renderData = (input) => {
    return (
      <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-2">
        {input.length > 0 ? (
          input.map((brand) => {
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
                      <div className="fs-2 title-wrap">{brand.title}</div>
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
    );
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // console.log(data.length);

  const handleClick = (event) => {
    setcurrentPage(event.target.id);
  };

  // console.log(currentPage);

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          // onClick={handleClick}
          className={currentPage === number ? "active" : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
  }

  // const filterHandler = (e) => {};

  const searchHandler = (e) => {};

  return (
    <>
      {!completed ? (
        <>
          <div className="wrap-lottie">
            {!loading ? (
              <Lottie options={defaultOptions1} height={500} width={500} />
            ) : (
              <Lottie options={defaultOptions2} height={500} width={500} />
            )}
          </div>
        </>
      ) : (
        <>
          <img src={bg_header} alt="" className="bg-header" />
          {/* BsFilterSquare */}
          <div className="container pt-4 pb-5">
            <div class="d-flex justify-content-between">
              <div className="d-flex">
                <form class="search-width">
                  <input
                    class="form-control me-1"
                    type="search"
                    placeholder="Search by name"
                    aria-label="Search"
                    onChange={(e) => searchHandler(e.target.value)}
                  />
                </form>
                <Link
                  className="btn btn-secondary mb-3 mx-2"
                  to="/brands/create"
                >
                  <AiFillFilter></AiFillFilter> Filter
                </Link>
              </div>
              <div>
                <ul className="pageNumbers text-white d-flex justify-content-center">
                  <li className="p-1">
                    <button
                      onClick={handlePrevbtn}
                      disabled={currentPage === pages[0] ? true : false}
                    >
                      Prev
                    </button>
                  </li>
                  {pageDecrementBtn}
                  {renderPageNumbers}
                  {pageIncrementBtn}
                  <li>
                    <button
                      onClick={handleNextbtn}
                      disabled={
                        currentPage === pages[pages.length - 1] ? true : false
                      }
                    >
                      Next
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            {renderData(currentItems)}
          </div>
        </>
      )}
    </>
  );
};

export default HomePage;
