import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './modules/index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)} style={{ padding: '3rem 0', minHeight: 'unset', backgroundColor: '#ffffff' }}>
      <div className={styles.container}>
        <img 
          src="/aihealth-ll/img/aihealth-home.png" 
          alt="AIHealth-LL" 
          style={{ maxWidth: '800px', width: '100%', height: 'auto' }} 
        />
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Hello from ${siteConfig.title}`} description="Description goes in meta tag in <head>">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}