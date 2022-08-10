import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Box, Center, Grid, Group, Input, Loader, Title } from '@mantine/core';
import { IconSearch } from '@tabler/icons';

import { PlaceCard } from 'components/PlaceCard';
import { usePlace } from 'redux/places/hooks';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { isLoading, placeData, getPlaceData } = usePlace();

  const filteredPlaces = useMemo(
    () =>
      placeData.filter(({ place }) => {
        if (!searchQuery) return true;
        return place.toLowerCase().includes(searchQuery.toLowerCase());
      }),
    [placeData, searchQuery]
  );

  useEffect(() => {
    getPlaceData();
  }, []);

  const onHandleSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value),
    []
  );

  return (
    <Box py={20}>
      <Group position="apart" mt="md" mb="md">
        <Title order={2}>Feed</Title>
        <Input
          radius="xl"
          placeholder="Search ..."
          icon={<IconSearch />}
          value={searchQuery}
          onChange={onHandleSearch}
        />
      </Group>
      {isLoading ? (
        <Center>
          <Loader my={80} variant="bars" />
        </Center>
      ) : (
        <>
          {filteredPlaces.length === 0 ? (
            <Center my={80}>
              <Title>No Data</Title>
            </Center>
          ) : (
            <Grid>
              {filteredPlaces.map(({ id, ...rest }) => (
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
};

export default HomePage;
