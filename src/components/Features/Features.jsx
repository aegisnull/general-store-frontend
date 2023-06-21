import {
  createStyles,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
} from "@mantine/core";
import { IconTruck, IconCertificate, IconCoin } from "@tabler/icons-react";
const mockdata = [
  {
    title: "Free shipping",
    description:
      "Free shipping on all orders over $20 and we have a Money back guarantee if items are damaged or lost",
    icon: IconTruck,
  },
  {
    title: "Best quality",
    description:
      "Our coffee beans are sourced from the best farms around the world and roasted by the best roasters in the country",
    icon: IconCertificate,
  },
  {
    title: "Fair prices",
    description:
      "Fair prices for the best quality coffee beans. We have a Money back guarantee if items are damaged or lost",
    icon: IconCoin,
  },
];

const useStyles = createStyles((theme) => ({
  card: {
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  cardTitle: {
    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
    },
  },
}));

export default function FeaturesCards() {
  const { classes, theme } = useStyles();
  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow="sm"
      radius="md"
      className={classes.card}
      padding="xl"
    >
      <feature.icon size={rem(50)} stroke={1} color={theme.fn.primaryColor()} />
      <Text
        fz="lg"
        fw={500}
        className={`${classes.cardTitle} features__title`}
        mt="md"
      >
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm" className="features__description">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg">
      <SimpleGrid
        cols={3}
        spacing="xl"
        mt={50}
        breakpoints={[{ maxWidth: "md", cols: 1 }]}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}
