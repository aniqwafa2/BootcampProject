import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import image from "../../assets/bg-auth.jpg";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import Lottie from "react-lottie";
import * as loadAnimation from "../../assets/lottie/73133-car-animation-front-view.json";
import * as successAnimation from "../../assets/lottie/4022-success-animation.json";

const ListJoki = () => {
  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(4);
  const [data, setData] = useState([]);
  const [pageNumberLimit, setpageNumberLimit] = useState(4);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(4);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
  const [loading, setLoading] = useState(undefined);
  const [completed, setCompleted] = useState(undefined);

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
    }, 2000);
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
      <div className="row">
        {input.length > 0 ? (
          input.map((brand, index) => {
            // const { id, name, since_year, image } = brand;
            return (
              <div className="col-6 mb-2 custom-card" key={index}>
                <div className="card bg-card-joki">
                  <div class="container">
                    <div class="row">
                      <div class="col-sm">
                        <img className="card-joki" src={image} alt="" />
                      </div>
                      <div class="col-sm">
                        <div className="card-body">
                          <h5 className="text-white">{brand.title}</h5>
                          <p className="text-white">
                            With supporting text below as a natural lead-in to
                            additional content.
                          </p>
                          <div class="position-absolute bottom-0 end-0 pb-2 px-2">
                            <Link href="#" className="btn btn-primary">
                              <FiEdit />
                            </Link>
                            <Link href="#" className="btn btn-danger">
                              <AiOutlineDelete />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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

  console.log(currentPage);

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

  return (
    <>
      {!completed ? (
        <>
          {!loading ? (
            <Lottie options={defaultOptions1} height={500} width={500} />
          ) : (
            <Lottie options={defaultOptions2} height={500} width={500} />
          )}
        </>
      ) : (
        <>
          <h4 className="text-white">My Joki</h4>
          <div class="d-flex justify-content-between">
            <Link className="btn btn-secondary mb-2" to="/joki/add">
              Add Packet Joki
            </Link>
            <ul className="pageNumbers text-white d-flex justify-content-center">
              <li>
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
          {renderData(currentItems)}
        </>
      )}
      <div className="pb-3" />
    </>
  );
};

export default ListJoki;
