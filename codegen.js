require("dotenv").config();
const { REACT_APP_BASE_URL, API_ACCESS_TOKEN } = process.env;

module.exports = {
  schema: [
    {
      [`${REACT_APP_BASE_URL}/graphql`]: {
        headers: {
          Authorization: `Bearer ${API_ACCESS_TOKEN}`
        }
      }
    }
  ],
  overwrite: true,
  documents: "src/**/*.graphql",
  generates: {
    "src/generated/graphql.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo"
      ],
      config: {
        avoidOptionals: true
      },
      "./graphql.schema.json": {
        plugins: ["introspection"]
      }
    }
  }
};
