'use client';
import { useSelector } from 'react-redux';
import JobDetails from './JobDetails';
import Questions from './Questions';
import Summary from './Summary';

export default function Tabs({ id, interview }) {
  const activetab = useSelector((store) => store.activeTab.value);

  const tabs = {
    1: <JobDetails id={id} interview={interview} />,
    2: <Questions />,
    3: <Summary />,
  };

  return tabs[activetab];
}
