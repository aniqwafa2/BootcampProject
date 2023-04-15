import React from "react";
import { Link } from "react-router-dom";

const ListOrder = () => {
  const filterOrders = () => {};

  return (
    <>
      <h4>My Order</h4>
      <div className="d-flex pb-4">
        <ul class="list-group">
          <li onClick={filterOrders} class="list-group-item">
            <Link to="">Order In</Link>
          </li>
          <li class="list-group-item">
            <Link to="">Order Done</Link>
          </li>
        </ul>
        <div className="list-group mx-3">
          <Link
            href="#"
            className="list-group-item list-group-item-action flex-column align-items-start active"
          >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">List group item heading</h5>
              <small>3 days ago</small>
            </div>
            <p className="mb-1">
              Donec id elit non mi porta gravida at eget metus. Maecenas sed
              diam eget risus varius blandit.
            </p>
            <small>Donec id elit non mi porta.</small>
          </Link>
          <Link
            href="#"
            className="list-group-item list-group-item-action flex-column align-items-start"
          >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">List group item heading</h5>
              <small className="text-muted">3 days ago</small>
            </div>
            <p className="mb-1">
              Donec id elit non mi porta gravida at eget metus. Maecenas sed
              diam eget risus varius blandit.
            </p>
            <small className="text-muted">Donec id elit non mi porta.</small>
          </Link>
          <Link
            href="#"
            className="list-group-item list-group-item-action flex-column align-items-start"
          >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">List group item heading</h5>
              <small className="text-muted">3 days ago</small>
            </div>
            <p className="mb-1">
              Donec id elit non mi porta gravida at eget metus. Maecenas sed
              diam eget risus varius blandit.
            </p>
            <small className="text-muted">Donec id elit non mi porta.</small>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ListOrder;
