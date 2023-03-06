import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { getArticlesInfo } from '../lib/api';
import ArticlesList from '../components/articles-list';

interface Article {
  id: string
}
interface HomePageProps {
  allArticlesData: Article[]
}

export async function getStaticProps() {
  const allArticlesJson = getArticlesInfo();
  const allArticlesData = Object.values(allArticlesJson).filter((article): Article => article.id);
  return {
    props: {
      allArticlesData,
    },
  };
}

const Home: NextPage<HomePageProps> = ({ allArticlesData }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ArticlesList allArticles={allArticlesData}/>
      </main>
    </div>
  )
}

export default Home;
