import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

import { Props } from './types';

export const PlaceCard = ({ place, image, price, description }: Props) => (
  <Card shadow="sm" p="lg" radius="md" withBorder>
    <Card.Section>
      <Image src={image} alt={place} height={160} />
    </Card.Section>

    <Group position="apart" mt="md" mb="xs">
      <Text weight={500}>{place}</Text>
      <Badge color="pink" variant="light">
        ${price}
      </Badge>
    </Group>

    <Text lineClamp={1} size="sm" color="dimmed">
      {description}
    </Text>

    <Button variant="light" color="blue" fullWidth mt="md" radius="md">
      Learn More
    </Button>
  </Card>
);
