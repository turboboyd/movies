import Header from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import css from './conteiner.module.css'

export default function Layout() {
  return (
    <>
      <div className={css.container}>
        <Header />
      </div>
      <main>
        <div className={css.container}>
          <Suspense fallback={<div>loding1</div>}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </>
  );
}
