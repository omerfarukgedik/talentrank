import { configureStore, createSlice } from '@reduxjs/toolkit';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

async function fetchLocations() {
  try {
    const ref = collection(db, 'location');
    const { docs } = await getDocs(ref);
    return docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (err) {
    return [];
  }
}

const locations = await fetchLocations();

const locationsSlice = createSlice({
  name: 'locations',
  initialState: locations,
  reducers: {},
});

const activeTab = createSlice({
  name: 'activeTab',
  initialState: {
    value: 1,
  },
  reducers: {
    SET_ACTIVE_TAB: (state, { payload }) => {
      state.value = payload;
    },
  },
});

const formInitial = {
  title: '',
  description: '',
  duration: 10,
  location: locations[0].id,
  questions: [],
  errors: [],
};

const form = createSlice({
  name: 'form',
  initialState: formInitial,
  reducers: {
    SET_KEY: (state, { payload }) => {
      const { key, value } = payload;
      state[key] = value;
    },
    SET_INITIAL: (state) => {
      state = { ...formInitial };
    },
  },
});

export const makeStore = () => {
  return configureStore({
    reducer: {
      locations: locationsSlice.reducer,
      activeTab: activeTab.reducer,
      form: form.reducer,
    },
  });
};

export const { SET_ACTIVE_TAB } = activeTab.actions;
export const { SET_INITIAL, SET_KEY } = form.actions;
