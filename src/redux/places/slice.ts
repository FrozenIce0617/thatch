import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getPlaceData } from './actions';

import { PlaceInfo, State } from './types';

const initialState: State = {
  isLoading: true,
  placeData: [],
  error: false,
};

const slice = createSlice({
  name: 'place',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPlaceData.pending, (state) => ({
        ...state,
        isLoading: true,
        error: false,
      }))
      .addCase(getPlaceData.fulfilled, (state, { payload }: PayloadAction<PlaceInfo[]>) => {
        const parsedData = payload.map((item: PlaceInfo) => ({
          ...item,
          image: `${item.image}?random=${parseInt((Math.random() * 100).toString(), 10)}`,
        }));

        return {
          ...state,
          isLoading: false,
          placeData: parsedData,
          error: false,
        };
      })
      .addCase(getPlaceData.rejected, (state) => ({
        ...state,
        isLoading: false,
        error: true,
      }));
  },
});

export const { reducer, actions } = slice;

export default slice;
