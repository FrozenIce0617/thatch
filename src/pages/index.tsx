import { useEffect } from 'react';
import { Grid } from '@mantine/core';

import { PlaceCard } from 'components/PlaceCard';
import { usePlace } from 'redux/places/hooks';

const HomePage = () => {
  const { placeData, getPlaceData } = usePlace();

  useEffect(() => {
    getPlaceData();
  }, []);

  return (
    <Grid>
      {placeData.map(({ id, ...rest }) => (
        <Grid.Col key={id} xs={12} md={6} lg={4} xl={3}>
          <PlaceCard {...rest} />
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default HomePage;
