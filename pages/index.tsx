import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { getArticlesInfo } from '../lib/api';
import ArticlesList from '../components/articles-list';
import { Article, HomePageProps } from '../interfaces';

export async function getStaticProps(): Promise<object> {
  const allArticlesJson = getArticlesInfo();
  const allArticlesData = Object.values(allArticlesJson).filter((article: Article) => article.id);
  return {
    props: {
      allArticlesData,
    },
  };
}

const Home: NextPage<HomePageProps> = ({ allArticlesData }: {allArticlesData: Article[]}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mayoral</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className='mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
          <ArticlesList allArticlesData={allArticlesData}/>
        </div>
      </main>
    </div>
  )
}

export default Home;
