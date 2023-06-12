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
import { getProducts, updateProduct, addProduct } from "@/api/products";

function AdminPage() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);

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

  async function updateList() {
    try {
      const products = await getProducts();
      setProducts(products);
    } catch (error) {
      console.log(error);
    }
  }

  function handleEdit(product) {
    setSelectedProduct(product);
    setEditModalOpen(true);
  }

  function handleDelete(product) {
    setSelectedProduct(product);
    setDeleteModalOpen(true);
  }

  function handleAddProduct() {
    setAddModalOpen(true);
  }

  async function handleEditSubmit(event) {
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
      setEditModalOpen(false);
      updateList();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDeleteConfirm() {
    try {
      await deleteProduct(selectedProduct._id);
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product._id !== selectedProduct._id)
      );
      setDeleteModalOpen(false);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleAddSubmit(event) {
    event.preventDefault();

    const newProduct = {
      name: event.target.name.value,
      image: event.target.image.value,
      price: event.target.price.value,
      description: event.target.description.value,
    };

    try {
      const addedProduct = await addProduct(newProduct);
      setProducts((prevProducts) => [...prevProducts, addedProduct]);
      setAddModalOpen(false);
      updateList();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ textAlign: "center" }}>
        <h2>Product Management</h2>
        <Button
          variant="outline"
          color="blue"
          style={{ marginBottom: "1rem" }}
          onClick={handleAddProduct}
        >
          Add New Product
        </Button>
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

            <div style={{ marginTop: "1rem" }}>
              <h3>Image Preview:</h3>
              <Image
                src={selectedProduct.image}
                alt="Preview"
                width={100}
                height={150}
              />
            </div>

            <Button type="submit" color="blue" style={{ marginTop: "1rem" }}>
              Save Changes
            </Button>
          </form>
        </Modal>

        <Modal
          title="Confirm Delete"
          opened={deleteModalOpen}
          onClose={() => setDeleteModalOpen(false)}
        >
          <div>
            <Text>Are you sure you want to delete {selectedProduct.name}?</Text>
            <Button onClick={handleDeleteConfirm}>Delete</Button>
          </div>
        </Modal>

        <Modal
          title="Add Product"
          opened={addModalOpen}
          onClose={() => setAddModalOpen(false)}
        >
          <form onSubmit={handleAddSubmit}>
            <TextInput label="Name" name="name" required />
            <TextInput label="Image URL" name="image" required />
            <TextInput label="Price" name="price" type="number" required />
            <TextInput label="Description" name="description" required />

            <Button type="submit" color="blue" style={{ marginTop: "1rem" }}>
              Add Product
            </Button>
          </form>
        </Modal>
      </div>
    </div>
  );
}

export default AdminPage;
