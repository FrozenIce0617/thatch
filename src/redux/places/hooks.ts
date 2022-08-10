import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from 'redux/store';

import * as placeActions from './actions';

export const usePlace = () => {
  const dispatch = useAppDispatch();

  const placeState = useSelector((state: RootState) => state.place);

  const getPlaceData = useCallback(() => {
    dispatch(placeActions.getPlaceData());
  }, [dispatch]);

  return {
    ...placeState,
    getPlaceData,
  };
};
