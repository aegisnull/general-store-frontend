import { useRouter } from "next/router";

export default function ProductPage() {
  const router = useRouter();
  const { productId } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const product = await getProductById(productId);
        console.log(product);
        setProduct(product);
      } catch (error) {
        console.error(error);
      }
    };

    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Render the detailed information of the product */}
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      {/* Add any additional components or elements as needed */}
    </div>
  );
}
