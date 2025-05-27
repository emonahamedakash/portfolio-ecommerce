const productList = [
  {
    id: 1,
    title: "Iphone 16 pro max",
    category: "electronics",
    desc: "This is a demo product description",
    price: 120000,
  },
  {
    id: 2,
    title: "Iphone 16 pro max",
    category: "electronics",
    desc: "This is a demo product description",
    price: 120000,
  },
  {
    id: 3,
    title: "Iphone 16 pro max",
    category: "electronics",
    desc: "This is a demo product description",
    price: 120000,
  },
  {
    id: 4,
    title: "Iphone 16 pro max",
    category: "electronics",
    desc: "This is a demo product description",
    price: 120000,
  },
];
export const getProductList = async (req, res) => {
  res.status(200).json({
    flag: "SUCCESS",
    data: productList,
  });
};

export const getProductById = async (req, res) => {
  console.log(req.params);
  const product = productList.filter((each) => each.id == req.params.id);

  res.status(200).json({
    flag: "SUCCESS",
    data: product,
  });
};
