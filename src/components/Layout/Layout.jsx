import styles from "./Layout.module.scss";
import { Container } from "@mantine/core";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const links = [
  {
    link: "/shop",
    label: "Shop",
  },
  {
    link: "/about",
    label: "About",
  },
  {
    link: "/contact",
    label: "Contact Us",
  },
];

export default function Layout({ children }) {
  return (
    <>
      <Header links={links} />
      <Container size="xl" className={styles.container}>
        {children}
      </Container>
      <Footer />
    </>
  );
}
