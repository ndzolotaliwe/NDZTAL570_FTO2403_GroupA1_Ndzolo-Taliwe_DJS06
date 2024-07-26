// Data sets
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

// Exercise 1: ForEach Basics
console.log("Names:");
names.forEach(name => console.log(name));

console.log("\nProvinces:");
provinces.forEach(province => console.log(province));

console.log("\nNames with matching provinces:");
names.forEach((name, index) => {
  console.log(`${name} (${provinces[index] || 'Unknown Province'})`);
});

// Exercise 2: Uppercase Transformation
const uppercaseProvinces = provinces.map(province => province.toUpperCase());
console.log("\nUppercase provinces:");
console.log(uppercaseProvinces);

// Exercise 3: Name Lengths
const nameLengths = names.map(name => name.length);
console.log("\nName lengths:");
console.log(nameLengths);

// Exercise 4: Sorting
const sortedProvinces = provinces.slice().sort();
console.log("\nSorted provinces:");
console.log(sortedProvinces);

// Exercise 5: Filtering Cape
const filteredProvinces = provinces.filter(province => !province.includes('Cape'));
console.log("\nFiltered provinces (excluding 'Cape'):");
console.log(filteredProvinces);
console.log(`Remaining provinces count: ${filteredProvinces.length}`);

// Exercise 6: Finding 'S'
const nameContainsS = names.map(name => name.includes('S'));
console.log("\nBoolean array - Name contains 'S'?");
console.log(nameContainsS);

// Exercise 7: Creating Object Mapping
const nameProvinceMapping = names.reduce((acc, name, index) => {
  acc[name] = provinces[index] || 'Unknown Province';
  return acc;
}, {});
console.log("\nName to Province mapping:");
console.log(nameProvinceMapping);

// Advanced Exercises
console.log("\nAdvanced Exercises:");

// Advanced Exercise 1: Log Products
console.log("\nProducts:");
products.forEach(product => console.log(product.product));

// Advanced Exercise 2: Filter by Name Length
console.log("\nProducts filtered by name length (<= 5 characters):");
const filteredProducts = products.filter(product => product.product.length <= 5);
console.log(filteredProducts);

// Advanced Exercise 3: Price Manipulation
console.log("\nTotal price of products with valid prices:");
const totalPrice = products
  .filter(product => product.price !== '' && !isNaN(product.price))
  .reduce((acc, product) => acc + parseFloat(product.price), 0);
console.log(totalPrice);

// Advanced Exercise 4: Concatenate Product Names
console.log("\nConcatenated product names:");
const concatenatedNames = products.reduce((acc, product) => acc + ' ' + product.product, '');
console.log(concatenatedNames.trim());

// Advanced Exercise 5: Find Extremes in Prices
console.log("\nHighest and Lowest prices:");
const prices = products.map(product => parseFloat(product.price)).filter(price => !isNaN(price));
const highestPrice = Math.max(...prices);
const lowestPrice = Math.min(...prices);
console.log(`Highest: ${highestPrice}. Lowest: ${lowestPrice}.`);

// Advanced Exercise 6: Object Transformation
console.log("\nTransformed products object:");
const transformedProducts = products.reduce((acc, product) => {
  acc.push({ name: product.product, cost: parseFloat(product.price) || 0 });
  return acc;
}, []);
console.log(transformedProducts);



