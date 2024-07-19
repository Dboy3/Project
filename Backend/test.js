const filter = {
  category: ["apple", "Oppo"],
  brand: ["Samsung", "Redmi"],
  sortby: ["rating", "price"],
  order: ["asc", "desc"],
};


const params = new URLSearchParams();
params.set('filter', JSON.stringify(filter));
console.log(params.toString());

// const query = new URLSearchParams();

// // this appends the filter.category in string form ;
// query.append("category", filter.category);
// query.append("brand", filter.brand);
// query.append("sortby", filter.sortby);
// query.append("order", filter.order);

// let url = query.toString();
// console.log(url);

// console.log(url.sortby);

// ------------------------------------------------------------------------------------------
// console.log(query);
// console.log(query.toString());

// ------------------------------------------------------------------------------------------

// const params = new URLSearchParams();
// console.log(params);
// filter.category.forEach(cat => params.append('category', cat));
// filter.brand.forEach(brand => params.append('brand', brand));
// filter.sort.sortby.forEach(sortby => params.append('sortby', sortby));
// filter.sort.order.forEach(order => params.append('order', order));
// const queryString = params.toString();
// console.log(queryString);
// const url = `http://localhost:8080/products/filter?${queryString}`;
// console.log(url)

// ------------------------------------------------------------------------------------------
// const query = {};

// if (filter.category) {
//   query.category = { $in: filter.category };
// }

// if (filter.brand) {
//   query.brand = { $in: filter.category };
// }

// const sort = {};

// if (filter.sort) {
//   for (let i = 0; i < filter.sort.sortby.length; i++) {
//     sort[filter.sort.sortby[i]] = filter.sort.order[i] === "asc" ? 1 : -1;
//   }
// }

// console.log(sort);
// console.log(query);
