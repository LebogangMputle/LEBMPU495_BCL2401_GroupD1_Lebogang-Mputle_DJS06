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

// Sort the provinces alphabetically
const sortedProvinces = provinces.sort((a, b) => a.localeCompare(b));

// Log the sorted array to the console
console.log(sortedProvinces);

// Filter out provinces containing "Cape"
const filteredProvinces = provinces.filter(province =>!province.includes('Cape'));

// Log the count of remaining provinces
console.log(`Number of remaining provinces: ${filteredProvinces.length}`);

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]