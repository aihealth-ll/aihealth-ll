import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './modules/index.module.css';

function HomepageHeader() {
  return (
    <header style={{ backgroundColor: '#ffffff', padding: '1rem 0', textAlign: 'center' }}>
      <img
        src="/aihealth-ll/img/aihealth-home.png"
        alt="AIHealth-LL"
        style={{ width: '100%', maxWidth: '1000px', height: 'auto' }}
      />
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