import { useDispatch, useSelector, useStore } from 'react-redux';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes();
export const useAppSelector = useSelector.withTypes();
export const useAppStore = useStore.withTypes();

export const findLocation = (locationId) =>
  useSelector((store) => store.locations.find((l) => l.id == locationId));