import React from 'react';
import Head from "next/head";
import Layout from "../../components/Layout";
import { ArticleParams, IdParams } from "../../interfaces";
import { getArticleData, getArticlesIds } from '../../lib/articles';
import ArticleCard from '../../components/article-card';

export async function getStaticPaths(): Promise<object> {
  const paths: IdParams[] = getArticlesIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: ArticleParams }): Promise<object> {
  const articleData = getArticleData(params.id);
  return {
    props: {
      articleData,
    },
  };
}

const ArticleDetails = ({ articleData }: { articleData: ArticleParams }) => {
  const article: any = articleData?.articleFound;
  return (
    <>
      <Layout>
        <Head>
          <title>{article?.name}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <ArticleCard article={article} />
      </Layout>
    </>
  )
};

export default ArticleDetails;