const SERVER_URL =
  "https://general-store-backend-production-62ab.up.railway.app";

export const getProducts = async () => {
  try {
    const response = await fetch(`${SERVER_URL}/products`);
    const productsJson = await response.json();
    return productsJson.products;
  } catch (error) {
    console.log(error);
    return [];
  }
};
