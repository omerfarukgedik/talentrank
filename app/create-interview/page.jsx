import Tabs from '../src/components/tabs/index';
import { db } from '../src/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';

let interview = null;

async function fetchInterview(id) {
  const ref = doc(db, 'interview', id);
  const docSnap = await getDoc(ref);

  if (docSnap.exists()) {
    return {
      ...docSnap.data(),
      id,
      location: docSnap.data().location.id,
    };
  }

  return null;
}

export default async function Home({ searchParams }) {
  const id = (await searchParams)?.id;
  if (id) interview = await fetchInterview(id);

  return (
    <div className='tab_wrapper'>
      <Tabs id={id} interview={interview} />
    </div>
  );
}
