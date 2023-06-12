import React, { useEffect, useState } from "react";
import {
  Modal,
  Button,
  Text,
  Card,
  Image,
  Badge,
  Grid,
  TextInput,
} from "@mantine/core";
import { getProducts, updateProduct } from "@/api/products";

function AdminPage() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  // Fetch all products from the backend on page load
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProducts();
        setProducts(products);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  function handleEdit(product) {
    setSelectedProduct(product);
    setEditModalOpen(true);
  }

  function handleDelete(product) {
    setSelectedProduct(product);
    setDeleteModalOpen(true);
  }

  const handleEditSubmit = async (event) => {
    event.preventDefault();

    const updatedProduct = {
      id: selectedProduct._id,
      name: event.target.name.value,
      image: event.target.image.value,
      price: event.target.price.value,
      description: event.target.description.value,
    };

    try {
      await updateProduct(updatedProduct);
      // Update the products list with the edited product
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product._id === updatedProduct._id ? updatedProduct : product
        )
      );
      setEditModalOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteConfirm = async () => {
    try {
      await deleteProduct(selectedProduct._id);
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product._id !== selectedProduct._id)
      );
      setDeleteModalOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ textAlign: "center" }}>
        <h2>Product Management</h2>
        <Grid gutter="xl" cols={3} style={{ justifyContent: "center" }}>
          {products.map((product) => (
            <div key={product._id} style={{ width: "300px", margin: "1rem" }}>
              <Card
                shadow="sm"
                padding="lg"
                radius="lg"
                style={{ height: "100%" }}
              >
                <div style={{ position: "relative", marginBottom: "1rem" }}>
                  {product.isNew && (
                    <Badge
                      position="top-right"
                      variant="filled"
                      color="blue"
                      style={{ marginRight: "0.5rem", marginTop: "0.5rem" }}
                    >
                      New
                    </Badge>
                  )}
                  <Image
                    src={product.image}
                    alt={product.name}
                    height={200}
                    fit="contain"
                    radius="md"
                    shadow="sm"
                  />
                </div>
                <Text size="xl" weight={600} style={{ marginTop: "1rem" }}>
                  {product.name}
                </Text>
                <Text size="sm" style={{ marginTop: "0.5rem" }}>
                  ${product.price.toFixed(2)}
                </Text>
                <Button
                  fullWidth
                  variant="outline"
                  color="blue"
                  style={{ marginTop: "1rem" }}
                  onClick={() => handleEdit(product)}
                >
                  Edit
                </Button>
                <Button
                  fullWidth
                  variant="outline"
                  color="red"
                  style={{ marginTop: "1rem" }}
                  onClick={() => handleDelete(product)}
                >
                  Delete
                </Button>
              </Card>
            </div>
          ))}
        </Grid>

        <Modal
          title="Edit Product"
          opened={editModalOpen}
          onClose={() => setEditModalOpen(false)}
        >
          {selectedProduct && (
            <form onSubmit={handleEditSubmit}>
              <TextInput
                label="Name"
                name="name"
                required
                defaultValue={selectedProduct.name}
              />
              <TextInput
                label="Image URL"
                name="image"
                required
                defaultValue={selectedProduct.image}
              />
              <TextInput
                label="Price"
                name="price"
                type="number"
                required
                defaultValue={selectedProduct.price}
              />
              <TextInput
                label="Description"
                name="description"
                required
                defaultValue={selectedProduct.description}
              />

              <Button type="submit">Save Changes</Button>
            </form>
          )}
        </Modal>

        <Modal
          title="Confirm Delete"
          opened={deleteModalOpen}
          onClose={() => setDeleteModalOpen(false)}
        >
          {selectedProduct && (
            <div>
              <Text>
                Are you sure you want to delete {selectedProduct.name}?
              </Text>
              <Button onClick={handleDeleteConfirm}>Delete</Button>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
}

export default AdminPage;
