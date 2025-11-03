
//?Input

const rawApiData = [

    {
      id: 1,
      productName: "Wireless Mouse",
      category: "Electronics",
      price: 850,
      rating: 4.3,
      stock: 120,
    },
    {
      id: 2,
      productName: "Bluetooth Headphones",
      category: "Electronics",
      price: 2200,
      rating: 4.6,
      stock: 60,
    },
    {
      id: 3,
      productName: "Running Shoes",
      category: "Fashion",
      price: 3500,
      rating: 4.2,
      stock: 45,
    },
    {
      id: 4,
      productName: "Smart Watch",
      category: "Electronics",
      price: 4200,
      rating: 4.5,
      stock: 75,
    },
    {
      id: 5,
      productName: "Backpack",
      category: "Accessories",
      price: 1200,
      rating: 4.1,
      stock: 150,
    },
    {
      id: 6,
      productName: "Sunglasses",
      category: "Fashion",
      price: 900,
      rating: 4.0,
      stock: 80,
    },
    {
      id: 7,
      productName: "Coffee Mug",
      category: "Home & Kitchen",
      price: 450,
      rating: 4.4,
      stock: 200,
    },
    {
      id: 8,
      productName: "Desk Lamp",
      category: "Home & Office",
      price: 1350,
      rating: 4.3,
      stock: 90,
    },
    {
      id: 9,
      productName: "Notebook",
      category: "Stationery",
      price: 150,
      rating: 4.1,
      stock: 300,
    },
    {
      id: 10,
      productName: "Water Bottle",
      category: "Home & Kitchen",
      price: 600,
      rating: 4.2,
      stock: 180,
    },
  ];

  //?  Output => [{name: "Phone" }, { name: "Smart Watch "}]

  // Process
  //TODO Filter => Electronics
  //TODO Sort by => Rating
  //TODO Slice => first 3 (top 3)
  //TODO Map => transform object shape to { name : "Name"}

  
//Step-1 [Filter]
// const topElectronicProducts= rawApiData.filter(
//     (item)=> item.category === "Electronics"
// );

//step-2 [Sort]

/*
const topElectronicProducts= rawApiData.filter(
    (item)=> item.category === "Electronics"
).sort((a,b)=> b.rating -a.rating).slice(0,3).map(item => {
    return {name:item.productName}
});

console.log(topElectronicProducts);
*/


const topElectronicsProducts=rawApiData.filter((item)=>item.category==="Electronics").sort((a,b)=>b.rating - a.rating).slice(0,2).map((item)=>{
    return {name: item.productName}
});
console.log(topElectronicsProducts)
