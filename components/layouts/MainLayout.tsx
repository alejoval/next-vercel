import Head from 'next/head';
import { ScriptProps } from 'next/script';
import { FC, PropsWithChildren } from 'react';

import { Navbar } from '../Navbar';
import styles from './MainLayout.module.css';

export const MainLayout: FC<PropsWithChildren<ScriptProps>> = ({ children }) => {
    return (
        <div className={styles.container}>
          <Head>
            <title>Contact - Alejo</title>
            <meta name="description" content="Contact Page" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <Navbar/>
    
          <main className={styles.main}>
            { children }
           </main>
    
        
        </div>
      )
}
