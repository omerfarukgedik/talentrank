import Link from 'next/link';
import { db } from './src/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';
import InterviewCard from './src/components/InterviewCard';
import { Button } from '@mui/material';

async function fetchInterviews() {
  const ref = collection(db, 'interview');
  const { docs } = await getDocs(ref);
  return docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
    location: doc.data().location.id,
  }));
}

export default async function Home() {
  const interviews = await fetchInterviews();

  return (
    <div className='interviews'>
      <Button variant='contained'>
        <Link href='/create-interview'>Create new</Link>
      </Button>

      <h1>INTERVIEWS</h1>
      <div className='interviews__list'>
        {interviews.map((interview) => (
          <InterviewCard key={interview.id} {...interview} />
        ))}
      </div>
    </div>
  );
}
