import React from 'react';
import { Box, Center, Grid, Group, Loader, Title } from '@mantine/core';
import axios from 'axios';

import { PlaceCard } from 'components/PlaceCard';
import { PlaceInfo } from 'redux/places/types';

type Props = {
  placeData: PlaceInfo[];
  hasError: boolean;
  isLoading?: boolean;
};

const ExplorePage = ({ placeData, hasError, isLoading = true }: Props) => (
  <Box py={20}>
    <Group position="apart" mt="md" mb="md">
      <Title order={3}>Feed</Title>
    </Group>
    {isLoading ? (
      <Center>
        <Loader my={80} variant="bars" />
      </Center>
    ) : (
      <>
        {placeData.length === 0 ? (
          <Center my={80}>
            <Title>{hasError ? 'Something went wrong.' : 'No Data'}</Title>
          </Center>
        ) : (
          <Grid gutter={24}>
            {placeData.map(({ id, ...rest }) => (
              <Grid.Col key={id} xs={6} md={6} lg={4} xl={3}>
                <PlaceCard {...rest} />
              </Grid.Col>
            ))}
          </Grid>
        )}
      </>
    )}
  </Box>
);

export async function getServerSideProps() {
  try {
    const { data } = await axios('https://62f3f534a84d8c9681301701.mockapi.io/api/places');
    const parsedData = data.map((item: PlaceInfo) => ({
      ...item,
      image: `${item.image}?random=${parseInt((Math.random() * 100).toString(), 10)}`,
    }));

    return {
      props: {
        placeData: parsedData,
        hasError: false,
        isLoading: false,
      },
    };
  } catch (err) {
    return {
      props: {
        placeData: [],
        hasError: true,
        isLoading: false,
      },
    };
  }
}

export default ExplorePage;
