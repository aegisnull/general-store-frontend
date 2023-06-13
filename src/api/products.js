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
export const updateProduct = async (product) => {
  try {
    const response = await fetch(`${SERVER_URL}/products/${product.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const updatedProduct = await response.json();
    return updatedProduct;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update product.");
  }
};

export const addProduct = async (product) => {
  try {
    const response = await fetch(`${SERVER_URL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const newProduct = await response.json();
    return newProduct;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to add product.");
  }
};

export const deleteProduct = async (productId) => {
  try {
    const response = await fetch(`${SERVER_URL}/products/${productId}`, {
      method: "DELETE",
    });
    const deletedProduct = await response.json();
    return deletedProduct;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete product.");
  }
};

export const getProductById = async (productId) => {
  try {
    const response = await fetch(`${SERVER_URL}/products/${productId}`);
    const product = await response.json();
    return product;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get product.");
  }
}