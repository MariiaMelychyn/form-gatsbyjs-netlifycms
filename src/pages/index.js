import * as React from 'react';
// import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Form from '../components/Form';
import Hero from '../components/Hero';
import Title from '../components/Title';


const IndexPage = (props) => {
  console.log("props  ", props)
  return (
    <Layout>
      <main className="container text-center mt-4 ">
      
        <h1 className="">Congratulations</h1>
        <Title/>
        <Form/>
        <Hero/>
       
      </main>
     
    </Layout>
    
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

// export const query = graphql`
// query MainPage{
//   allMarkdownRemark {
//     nodes {
//       html
//       frontmatter {
//         category
//         title
//         url
//       }
//       id
//     }
//   }
// }
// `