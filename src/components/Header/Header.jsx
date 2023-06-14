import styles from "./Header.module.scss";

import { useContext, useState } from "react";
import {
  createStyles,
  Header,
  Button,
  ActionIcon,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  Modal,
  TextInput,
  Badge,
  rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { MantineLogo } from "@mantine/ds";
import { IconShoppingCart } from "@tabler/icons-react";
import ShoppingCartSidebar from "../ShoppingCart/ShoppingCart";
import { CartContext } from "../../contexts/CartContext";
import { UserContext } from "../../contexts/UserContext";
import Link from "next/link";

import { login, signup } from "@/api/users";

const HEADER_HEIGHT = rem(60);

const useStyles = createStyles((theme) => ({
  root: {
    position: "sticky",
    top: 0,
    zIndex: 3,
  },

  dropdown: {
    position: "absolute",
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    marginBottom: 0,
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
}));

export default function HeaderResponsive({ links }) {
  const { cartItems } = useContext(CartContext);
  const [opened, { toggle, close }] = useDisclosure(false);
  const [isCartOpen, setCartOpen] = useState(false); // State to control shopping cart sidebar visibility
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  // Modal state and handlers
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);

  const { loginStatus, setLoginStatus } = useContext(UserContext);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
    name: "",
  });

  function handleLoginDataChange(event) {
    const { name, value } = event.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSignupDataChange(event) {
    const { name, value } = event.target;
    setSignupData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  async function handleLogin(event) {
    event.preventDefault();
    try {
      const user = await login(loginData);
      console.log("Logged in:", user);
      setLoginStatus(true);
    } catch (error) {
      console.log("Login failed:", error.message);
    }
  }

  async function handleSignup(event) {
    event.preventDefault();
    try {
      const user = await signup(signupData);
      console.log("Signed up:", user);
    } catch (error) {
      console.log("Signup failed:", error.message);
    }
  }

  function toggleLoginModal() {
    setLoginModalOpen(!isLoginModalOpen);
  }

  function toggleSignupModal() {
    setSignupModalOpen(!isSignupModalOpen);
  }

  const items = links.map((link) => (
    <Link
      href={link.link}
      key={link.label}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={() => {
        setActive(link.link);
        close();
      }}
    >
      {link.label}
    </Link>
  ));

  function handleCartToggle() {
    if (!opened) {
      setCartOpen(!isCartOpen);
    }
  }

  function handleMobileToggle() {
    toggle();
    if (isCartOpen) {
      setCartOpen(false);
    }
  }

  return (
    <Header height={HEADER_HEIGHT} className={classes.root}>
      <Container className={classes.header}>
        <Link href="/">
          <MantineLogo size={28} />
        </Link>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>

        <Burger
          opened={opened}
          onClick={handleMobileToggle}
          className={classes.burger}
          size="sm"
        />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
        <div className={styles.header__shop}>
          <ActionIcon
            size="xl"
            radius="xl"
            onClick={handleCartToggle}
            color="blue"
            aria-label="Open Shopping Cart"
          >
            <IconShoppingCart size={26} />
            {cartItems === undefined ? null : (
              <Badge color="red" size="xs" position="top-right">
                {cartItems.length}
              </Badge>
            )}
          </ActionIcon>

          {loginStatus ? (
            <Button
              variant="outline"
              color="blue"
              onClick={() => setLoginStatus(false)}
            >
              Logout
            </Button>
          ) : (
            <Button variant="outline" color="blue" onClick={toggleLoginModal}>
              Login
            </Button>
          )}
          <Group spacing={5} className={classes.links}>
            {loginStatus && (
              <Link href="/admin">
                <Button variant="outline" color="blue">
                  Admin
                </Button>
              </Link>
            )}
          </Group>
        </div>
        {/* Pass isCartOpen and onClose prop */}
        <ShoppingCartSidebar
          isOpen={isCartOpen}
          toggleCart={handleCartToggle}
        />
        {/* Modal component for login */}
        <Modal
          opened={isLoginModalOpen}
          onClose={toggleLoginModal}
          title="Login"
          size="xs"
        >
          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: "1rem" }}>
              <TextInput
                label="Email"
                placeholder="Enter your email"
                value={loginData.email}
                onChange={handleLoginDataChange}
                name="email"
              />
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <TextInput
                label="Password"
                placeholder="Enter your password"
                type="password"
                value={loginData.password}
                onChange={handleLoginDataChange}
                name="password"
              />
            </div>
            <Button variant="outline" color="blue" type="submit">
              Sign In
            </Button>
          </form>
          <p
            style={{
              marginTop: "1rem",
              textAlign: "center",
              margin: ".3rem",
              fontSize: "0.8rem",
            }}
          >
            Don&apos;t have an account?{" "}
            <Button
              variant="link"
              color="blue"
              style={{
                fontSize: "0.8rem",
              }}
              onClick={() => {
                toggleLoginModal();
                toggleSignupModal();
              }}
            >
              Sign Up
            </Button>
          </p>
        </Modal>
        {/* Modal component for signup */}
        <Modal
          opened={isSignupModalOpen}
          onClose={toggleSignupModal}
          title="Sign Up"
          size="xs"
        >
          <form onSubmit={handleSignup}>
            <div style={{ marginBottom: "1rem" }}>
              <TextInput
                label="Email"
                placeholder="Enter your email"
                value={signupData.email}
                onChange={handleSignupDataChange}
                name="email"
              />
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <TextInput
                label="Password"
                placeholder="Enter your password"
                type="password"
                value={signupData.password}
                onChange={handleSignupDataChange}
                name="password"
              />
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <TextInput
                label="Name"
                placeholder="Enter your name"
                value={signupData.name}
                onChange={handleSignupDataChange}
                name="name"
              />
            </div>
            <Button variant="outline" color="blue" type="submit">
              Sign Up
            </Button>
          </form>
          <p
            style={{
              marginTop: "1rem",
              textAlign: "center",
              margin: ".3rem",
              fontSize: "0.8rem",
            }}
          >
            Already have an account?{" "}
            <Button
              variant="link"
              color="blue"
              style={{
                fontSize: "0.8rem",
              }}
              onClick={() => {
                toggleSignupModal();
                toggleLoginModal();
              }}
            >
              Login
            </Button>
          </p>
        </Modal>
      </Container>
    </Header>
  );
}
