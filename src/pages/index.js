import * as React from 'react';
import Layout from '../components/Layout';
import Form from '../components/Form';

const IndexPage = () => {
  return (
    <Layout>
      <main className="container text-center mt-4 ">
        <h1 className="">Congratulations</h1>
        <Form/>
      </main>
    </Layout>
    
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
