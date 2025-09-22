// server/index.js
import express from 'express';
import { createYoga, createSchema } from 'graphql-yoga';

// import product data
import chips from './data/chips.js';
import chocolates from './data/chocolates.js';
import cookies from './data/cookies.js';
import icecreams from './data/icecreams.js';

// combine all products
const allProducts = [
  ...chips,
  ...chocolates,
  ...cookies,
  ...icecreams
];

// GraphQL schema
const typeDefs = `
type Product {
  id: ID!
  name: String!
  price: Float!
  category: String
  description: String
  images: [String!]!
  slug: String!
}

type Query {
  products(category: String, search: String, priceLessThan: Float): [Product!]!
  productBySlug(slug: String!): Product
  chips: [Product!]!
  chocolates: [Product!]!
  cookies: [Product!]!
  icecreams: [Product!]!
}
`;

// Resolvers
const resolvers = {
  Query: {
    products: (_, args) => {
      const { category, search, priceLessThan } = args;
      let results = allProducts;

      if (category) {
        results = results.filter(
          p => p.category && p.category.toLowerCase() === category.toLowerCase()
        );
      }

      if (search) {
        const q = search.toLowerCase();
        results = results.filter(
          p =>
            p.name.toLowerCase().includes(q) ||
            (p.description && p.description.toLowerCase().includes(q))
        );
      }

      if (priceLessThan !== undefined) {
        results = results.filter(p => p.price <= priceLessThan);
      }

      return results;
    },

    productBySlug: (_, { slug }) => allProducts.find(p => p.slug === slug) || null,
    chips: () => chips,
    chocolates: () => chocolates,
    cookies: () => cookies,
    icecreams: () => icecreams
  }
};

// Create schema + yoga
const schema = createSchema({ typeDefs, resolvers });
const yoga = createYoga({ schema, graphqlEndpoint: '/graphql' });

const app = express();

// Serve static images
app.use('/images', express.static('public/images'));

// Mount GraphQL endpoint
app.use('/graphql', yoga);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 ShopKind GraphQL server running at http://localhost:${PORT}/graphql`);
});
