import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiBaseUrl = 'https://62f3f534a84d8c9681301701.mockapi.io/api';

export const getPlaceData = createAsyncThunk('place/getPlaceData', async () => {
  try {
    const { data } = await axios.get(`${apiBaseUrl}/places`);

    return data;
  } catch (err) {
    // Leaving catch statement empty for now
    return [];
  }
});
