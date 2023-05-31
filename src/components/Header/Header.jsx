import styles from "./Header.module.scss";

import { useContext } from "react";
import { useState } from "react";
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
import Link from "next/link";

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
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  // Modal state and handlers
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);

  const openLoginModal = () => setLoginModalOpen(true);
  const closeLoginModal = () => setLoginModalOpen(false);

  const openSignupModal = () => setSignupModalOpen(true);
  const closeSignupModal = () => setSignupModalOpen(false);

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

  const handleCartToggle = () => {
    toggle();
  };

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
          onClick={toggle}
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

          {/* Open the login modal on login button click */}
          <Button variant="outline" color="blue" onClick={openLoginModal}>
            Login
          </Button>
        </div>
        {/* Pass isCartOpen and onClose prop */}
        <ShoppingCartSidebar isOpen={opened} toggleCart={handleCartToggle} />
        {/* Modal component for login/signup */}
        <Modal
          opened={isLoginModalOpen || isSignupModalOpen}
          onClose={isLoginModalOpen ? closeLoginModal : closeSignupModal}
          title={isLoginModalOpen ? "Login" : "Sign Up"}
          size="xs"
        >
          {/* Add your login/signup form or content here */}
          <div style={{ marginBottom: "1rem" }}>
            <TextInput label="Email" placeholder="Enter your email" />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <TextInput
              label="Password"
              placeholder="Enter your password"
              type="password"
            />
          </div>
          <Button variant="outline" color="blue">
            {isLoginModalOpen ? "Sign In" : "Sign Up"}
          </Button>
          {/* Link to toggle between login and signup forms */}
          <p
            style={{
              marginTop: "1rem",
              textAlign: "center",
              margin: ".3rem",
              fontSize: "0.8rem",
            }}
          >
            {isLoginModalOpen ? (
              <>
                Don't have an account?{" "}
                <Button
                  variant="link"
                  color="blue"
                  style={{
                    fontSize: "0.8rem",
                  }}
                  onClick={() => {
                    closeLoginModal();
                    openSignupModal();
                  }}
                >
                  Sign Up
                </Button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <Button
                  variant="link"
                  color="blue"
                  style={{
                    fontSize: "0.8rem",
                  }}
                  onClick={() => {
                    closeSignupModal();
                    openLoginModal();
                  }}
                >
                  Login
                </Button>
              </>
            )}
          </p>
        </Modal>
      </Container>
    </Header>
  );
}
