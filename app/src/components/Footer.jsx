'use client';
import '../styles/footer.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { SET_ACTIVE_TAB } from '../lib/store';
import { tabs } from './Header';

export default function Footer() {
  const activetab = useSelector((store) => store.activeTab.value);
  const form = useSelector((store) => store.form);
  const dispatch = useDispatch();

  // const stageRequired = {
  //   1: ['title', 'description'],
  //   2:
  // }

  function handleNext() {
    if (activetab + 1 <= tabs.length) {
      dispatch(SET_ACTIVE_TAB(activetab + 1));
      return;
    }
    if (activetab == 3) console.log('SUBMİT:', form);
  }

  return (
    <footer>
      <div className='actions'>
        <Button
          disabled={activetab < 1}
          onClick={() => {
            activetab > 1 && dispatch(SET_ACTIVE_TAB(activetab - 1));
          }}
          variant='contained'
          disableElevation
        >
          BACK
        </Button>
        <Button onClick={handleNext} variant='contained' disableElevation>
          {activetab < tabs.length ? 'PROCEED' : 'PUBLISH'}
        </Button>
      </div>
    </footer>
  );
}
