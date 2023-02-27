import styles from '@/styles/Home.module.css';

import { Toaster } from 'react-hot-toast';

import { handleSubmit } from '@/func';

export default function Home() {
  return (
    <>
      <main>
        <div className={styles.wrapper}>
          <h1>BOSTON SCHOOL</h1>
          <form id='formik' onSubmit={handleSubmit}>
            <input type='text' placeholder='Ism' />
            <input type='text' placeholder='Telefon raqamingiz' />
            <button type='submit'>Ro&apos;yxatdan o&apos;tish</button>
          </form>
        </div>
        <Toaster position='top-center' />
      </main>
    </>
  );
}
