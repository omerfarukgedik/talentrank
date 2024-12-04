'use client';
import '../styles/header.scss';
import Link from 'next/link';
import { useSelector } from 'react-redux';
export const tabs = [
  {
    id: 1,
    title: 'Job Details',
    desc: 'Job Details Description',
  },
  {
    id: 2,
    title: 'Configure Skillset',
    desc: 'Skillset Description',
  },
  {
    id: 3,
    title: 'Summary And Review',
    desc: 'Summary Description',
  },
];

export default function Header() {
  const activetab = useSelector((store) => store.activeTab.value);

  return (
    <header>
      <Link href='/'>{'<'} Back Home</Link>
      {tabs.map((t) => (
        <div className={`tab${activetab == t.id ? '__active' : ''}`} key={t.id}>
          <h3>{t.title}</h3>
          <p>{t.desc}</p>
        </div>
      ))}
    </header>
  );
}
