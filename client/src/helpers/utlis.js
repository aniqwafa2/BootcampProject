const toDateOrder = data =>
  `${data.slice(8, 10)}-${data.slice(5, 7)}-${data.slice(
    0,
    4
  )} jam ${data.slice(11, 16)}`;

export { toDateOrder };
