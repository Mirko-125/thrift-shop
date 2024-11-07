import { url } from '../links.js';

export const fetchLatestArticles = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          "idcode": "BLS0148",
          "name": "Summer shirt",
          "category": "Shirts",
          "price": 19.99,
          "colour": "LightBlue",
          "available": true,
          "size": ["XS", "S", "M", "L", "XL"],
          "picture": [`${url}/sample1.jpg`, `${url}/sample1_2.jpg`, `${url}/sample1_3.jpg`],
          "description": "perfect for skaters"
        },
        {
          "idcode": "BLS0149",
          "name": "Black coat",
          "category": "Coats",
          "price": 49.99,
          "colour": "Black",
          "available": true,
          "size": ["XS", "S", "M", "L", "XL"],
          "picture": [`${url}/sample2.jpg`, `${url}/sample2_2.jpg`, `${url}/sample2_3.jpg`],
          "description": "perfect for winter"
        },
        {
          "idcode": "BLS0150",
          "name": "Orange hoodie",
          "category": "Hoodies",
          "price": 29.99,
          "colour": "Orange",
          "available": true,
          "size": ["XS", "S", "M", "L", "XL"],
          "picture": [`${url}/sample3.jpg`, `${url}/sample3_2.jpg`, `${url}/sample3_3.jpg`],
          "description": "comfortable and stylish"
        },
        {
          "idcode": "BLS0151",
          "name": "Black boots",
          "category": "Shoes",
          "price": 39.99,
          "colour": "Black",
          "available": true,
          "size": ["XS", "S", "M", "L", "XL"],
          "picture": [`${url}/sample4.jpg`, `${url}/sample4_2.jpg`, `${url}/sample4_3.jpg`],
          "description": "durable and fashionable"
        },
        {
          "idcode": "BLS0152",
          "name": "Sunglasses",
          "category": "Accessories",
          "price": 15.99,
          "colour": "Black",
          "available": true,
          "size": ["XS", "S", "M", "L", "XL"],
          "picture": [`${url}/sample5.jpg`, `${url}/sample5_2.jpg`, `${url}/sample5_3.jpg`],
          "description": "stylish and protective"
        },
        {
          "idcode": "BLS0153",
          "name": "Fur coat and purse",
          "category": "Coats",
          "price": 99.99,
          "colour": "Brown",
          "available": true,
          "size": ["XS", "S", "M", "L", "XL"],
          "picture": [`${url}/sample6.jpg`, `${url}/sample6_2.jpg`, `${url}/sample6_3.jpg`],
          "description": "luxurious and warm"
        },
        {
          "idcode": "BLS0154",
          "name": "Black jacket",
          "category": "Jackets",
          "price": 59.99,
          "colour": "Black",
          "available": true,
          "size": ["XS", "S", "M", "L", "XL"],
          "picture": [`${url}/sample7.jpg`, `${url}/sample7_2.jpg`, `${url}/sample7_3.jpg`],
          "description": "sleek and modern"
        },
        {
          "idcode": "BLS0155",
          "name": "Skirt",
          "category": "Bottoms",
          "price": 24.99,
          "colour": "Red",
          "available": true,
          "size": ["XS", "S", "M", "L", "XL"],
          "picture": [`${url}/sample8.jpg`, `${url}/sample8_2.jpg`, `${url}/sample8_3.jpg`],
          "description": "elegant and chic"
        },
        {
          "idcode": "BLS0156",
          "name": "Leather blazor",
          "category": "Blazors",
          "price": 44.99,
          "colour": "Black",
          "available": true,
          "size": ["XS", "S", "M", "L", "XL"],
          "picture": [`${url}/sample9.jpg`, `${url}/sample9_2.jpg`, `${url}/sample9_3.jpg`],
          "description": "classic and timeless"
        }
      ]);
    }, 1000);
  });
};

export const fetchClothing = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          "idcode": "BLS0148",
          "name": "Summer shirt",
          "category": "Shirts",
          "price": 19.99,
          "colour": "LightBlue",
          "available": true,
          "size": ["XS", "S", "M", "L", "XL"],
          "picture": [`${url}/sample1.jpg`, `${url}/sample1_2.jpg`, `${url}/sample1_3.jpg`],
          "description": "perfect for skaters"
        },
        {
          "idcode": "BLS0149",
          "name": "Black coat",
          "category": "Coats",
          "price": 49.99,
          "colour": "Black",
          "available": true,
          "size": ["XS", "S", "M", "L", "XL"],
          "picture": [`${url}/sample2.jpg`, `${url}/sample2_2.jpg`, `${url}/sample2_3.jpg`],
          "description": "perfect for winter"
        },
        {
          "idcode": "BLS0150",
          "name": "Orange hoodie",
          "category": "Hoodies",
          "price": 29.99,
          "colour": "Orange",
          "available": true,
          "size": ["XS", "S", "M", "L", "XL"],
          "picture": [`${url}/sample3.jpg`, `${url}/sample3_2.jpg`, `${url}/sample3_3.jpg`],
          "description": "comfortable and stylish"
        },
        {
          "idcode": "BLS0151",
          "name": "Black boots",
          "category": "Shoes",
          "price": 39.99,
          "colour": "Black",
          "available": true,
          "size": ["XS", "S", "M", "L", "XL"],
          "picture": [`${url}/sample4.jpg`, `${url}/sample4_2.jpg`, `${url}/sample4_3.jpg`],
          "description": "durable and fashionable"
        },
        {
          "idcode": "BLS0153",
          "name": "Fur coat and purse",
          "category": "Coats",
          "price": 99.99,
          "colour": "Brown",
          "available": true,
          "size": ["XS", "S", "M", "L", "XL"],
          "picture": [`${url}/sample6.jpg`, `${url}/sample6_2.jpg`, `${url}/sample6_3.jpg`],
          "description": "luxurious and warm"
        },
        {
          "idcode": "BLS0154",
          "name": "Black jacket",
          "category": "Jackets",
          "price": 59.99,
          "colour": "Black",
          "available": true,
          "size": ["XS", "S", "M", "L", "XL"],
          "picture": [`${url}/sample7.jpg`, `${url}/sample7_2.jpg`, `${url}/sample7_3.jpg`],
          "description": "sleek and modern"
        },
        {
          "idcode": "BLS0155",
          "name": "Skirt",
          "category": "Bottoms",
          "price": 24.99,
          "colour": "Red",
          "available": true,
          "size": ["XS", "S", "M", "L", "XL"],
          "picture": [`${url}/sample8.jpg`, `${url}/sample8_2.jpg`, `${url}/sample8_3.jpg`],
          "description": "elegant and chic"
        },
        {
          "idcode": "BLS0156",
          "name": "Leather blazor",
          "category": "Blazors",
          "price": 44.99,
          "colour": "Black",
          "available": true,
          "size": ["XS", "S", "M", "L", "XL"],
          "picture": [`${url}/sample9.jpg`, `${url}/sample9_2.jpg`, `${url}/sample9_3.jpg`],
          "description": "classic and timeless"
        }
      ]);
    }, 1000);
  });
};

export const fetchAccessories = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          "idcode": "BLS0152",
          "name": "Sunglasses",
          "category": "Accessories",
          "price": 15.99,
          "colour": "Black",
          "available": true,
          "size": ["XS", "S", "M", "L", "XL"],
          "picture": [`${url}/sample5.jpg`, `${url}/sample5_2.jpg`, `${url}/sample5_3.jpg`],
          "description": "stylish and protective"
        }
      ]);
    }, 1000);
  });
};

// This is the template
/*
export const fetchBestSellers = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        // Add best sellers data here
      ]);
    }, 1000);
  });
};
*/

// not sure where to put this
/* Need to set up CORS properly, a little help Krle!
useEffect(() => {
  fetch("http://localhost:8888/articles.json")
      .then(response => response.json())
      .then(data => setContent(data));
}, []);
// console.table(content);
*/
