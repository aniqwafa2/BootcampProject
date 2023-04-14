import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import image from "../../assets/bg-auth.jpg";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";

const ListJoki = () => {
  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(4);
  const [data, setData] = useState([]);
  const [pageNumberLimit, setpageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const item = [
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false,
    },
    {
      userId: 1,
      id: 3,
      title: "fugiat veniam minus",
      completed: false,
    },
    {
      userId: 1,
      id: 4,
      title: "et porro tempora",
      completed: true,
    },
    {
      userId: 1,
      id: 5,
      title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
      completed: false,
    },
    {
      userId: 1,
      id: 6,
      title: "qui ullam ratione quibusdam voluptatem quia omnis",
      completed: false,
    },
    {
      userId: 1,
      id: 7,
      title: "illo expedita consequatur quia in",
      completed: false,
    },
    {
      userId: 1,
      id: 8,
      title: "quo adipisci enim quam ut ab",
      completed: true,
    },
    {
      userId: 1,
      id: 9,
      title: "molestiae perspiciatis ipsa",
      completed: false,
    },
    {
      userId: 1,
      id: 10,
      title: "illo est ratione doloremque quia maiores aut",
      completed: true,
    },
    {
      userId: 1,
      id: 11,
      title: "vero rerum temporibus dolor",
      completed: true,
    },
    {
      userId: 1,
      id: 12,
      title: "ipsa repellendus fugit nisi",
      completed: true,
    },
    {
      userId: 1,
      id: 13,
      title: "et doloremque nulla",
      completed: false,
    },
    {
      userId: 1,
      id: 14,
      title: "repellendus sunt dolores architecto voluptatum",
      completed: true,
    },
    {
      userId: 1,
      id: 15,
      title: "ab voluptatum amet voluptas",
      completed: true,
    },
    {
      userId: 1,
      id: 16,
      title: "accusamus eos facilis sint et aut voluptatem",
      completed: true,
    },
    {
      userId: 1,
      id: 17,
      title: "quo laboriosam deleniti aut qui",
      completed: true,
    },
  ];

  useEffect(() => {
    setData(item);
  }, []);

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
          onClick={handleClick}
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
      <h4 className="text-white">My Joki</h4>
      <Link className="btn btn-secondary mb-2" to="/joki/add">
        Add Packet Joki
      </Link>
      {renderData(currentItems)}
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
            disabled={currentPage === pages[pages.length - 1] ? true : false}
          >
            Next
          </button>
        </li>
      </ul>
      <div className="pb-3" />
    </>
  );
};

export default ListJoki;
