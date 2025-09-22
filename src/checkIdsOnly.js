// src/checkIdsOnly.js

// Only include the id, name, and category (no image imports)
const chocolates = [
  { id: 101, name: 'Almond Joy', category: 'chocolates' },
  { id: 102, name: 'Mars', category: 'chocolates' },
  { id: 103, name: 'Snickers', category: 'chocolates' },
  // ... add the rest manually
];

const cookies = [
  { id: 201, name: 'Oreo', category: 'cookies' },
  { id: 202, name: 'Choco Chip', category: 'cookies' },
  // ...
];

const icecreams = [
  { id: 301, name: 'Vanilla', category: 'icecreams' },
  { id: 302, name: 'Chocolate', category: 'icecreams' },
  // ...
];

const chips = [
  { id: 401, name: 'Lays', category: 'chips' },
  { id: 402, name: 'Doritos', category: 'chips' },
  // ...
];

const allProducts = [...chocolates, ...cookies, ...icecreams, ...chips];

console.log("All Product IDs:");
allProducts.forEach(p => console.log(`${p.name} → ID: ${p.id}, Category: ${p.category}`));

const idCounts = allProducts.reduce((acc, p) => {
  acc[p.id] = (acc[p.id] || 0) + 1;
  return acc;
}, {});

const duplicates = Object.entries(idCounts).filter(([id, count]) => count > 1);
if (duplicates.length > 0) {
  console.log("\n⚠️ Duplicate IDs found:");
  duplicates.forEach(([id, count]) => console.log(`ID ${id} appears ${count} times`));
} else {
  console.log("\n✅ No duplicate IDs found");
}
