// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// Log each name and each province to the console
provinces.forEach(province => console.log(province));
names.forEach(name => console.log(names));

// Log each name with a matching province in the format "Name (Province)"
const matchingProvinces = provinces.filter((province, index) => names[index]);
matchingProvinces.forEach((province, index) => console.log(`${names[index]} (${province})`));

// Create a new array of province names in all uppercase
const uppercaseProvinces = provinces.map(province => province.toUpperCase());

// Log the new array to the console
console.log(uppercaseProvinces);

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]