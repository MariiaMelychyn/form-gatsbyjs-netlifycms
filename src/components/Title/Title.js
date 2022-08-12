// import * as React from 'react';
// // import PropTypes from 'prop-types';
// import { graphql} from 'gatsby';


// const Title = ( { data}  ) => {
//     // console.log("props" , props)
//     const { nodes }  = data.allMarkdownRemark ;
//     return (
//         <div>
//         {{nodes}.map(post=>{
//           const {category, title, url} = post.frontmatter;
//           return <link to={`/${category}/${url}`} key={post.id}>{title}</link>
//         })}
//       </div>
//     )
// }


// export default Title;


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



import * as React from 'react';
// import PropTypes from 'prop-types';
import { graphql} from 'gatsby';


const Title = ( { data}  ) => {
    const { allMarkdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = allMarkdownRemark
   
    return (
        <div className="blog-post-container">
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    )
}


export default Title;


export const query = graphql`
query MainPage{
  allMarkdownRemark {
    nodes {
      html
      frontmatter {
        category
        title
        url
      }
      id
    }
  }
}
`