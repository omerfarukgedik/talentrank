'use client';

import Link from 'next/link';
import { findLocation } from '../lib/hooks';

export default function InterviewCard({ id, title, description, location }) {
  const loc = findLocation(location);

  return (
    <Link
      href={`/create-interview?id=${id}`}
      className='interviews__list__card'
    >
      <h2>{title}</h2>
      <p>{description}</p>
      <p>location: {loc.name}</p>
    </Link>
  );
}
