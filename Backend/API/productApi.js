
const model = require("../Model/productModel");
const Product = model.Product;

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    console.log("fetched all products");
    res.status(201).json(products);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
exports.getProductById = async (req, res) => {
  const id = req.params.id;

  try {
    const products = await Product.findById(id);
    console.log("fetch by id successful");
    res.status(201).json(products);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.createProducts = async (req, res) => {
  try {
    // we can also pass the newProduct as below. The keys of object which are declare in Schema
    // will pass and rest are rejected
    const newProduct = new Product(req.body);
    console.log(req.body);

    // treat the below as normal javaScript object

    /*
      newProduct.title = "Iphone";
      newProduct.price = 9999;
      newProduct.rating = 5;
      */

    // this line will save the newProduct in database . It is async process
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/* 
const filter = {
    category: ["apple", "Oppo"],
    brand: ["Samsung", "Redmi"],
    sort: {
        sortby: ["rating", "price"],
        order: ["asc", "desc"]
    }
};
*/

exports.getAllProductsByFilter = async (req, res) => {
  console.log(req.query);
  // convert into JSON object
  // const filter = JSON.parse(req.query.filter);

  // const query = {};
  // if (filter.category) {
  //   query.category = { $in: filter.category };
  // }
  // if (filter.brand) {
  //   query.brand = { $in: filter.brand };
  // }

  // const sortCriteria = {};
  // for (let i = 0; i < filter.sortby.length; i++) {
  //   sortCriteria[filter.sortby[i]] =  filter.order[i] === "asc" ? 1 : -1 ;
  // }

  // console.log(query);
  // console.log(sortCriteria);

  // try {
  //   const products = await Product.find(query).sort(sortCriteria).exec();
  //   res.status(201).json(products);
  // } catch (err) {
  //   console.error("Error fetching products:", err);
  //   res.status(400).json({ message: error.message });
  // }
};
