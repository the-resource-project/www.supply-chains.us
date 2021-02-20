/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
 const { createPage } = actions
 const elementTemplate = path.resolve(`src/components/templates/elements.jsx`)

 return graphql(
   `
     query AllElements {
       allElementsCsv {
         nodes {
           Image
           Location
           Map
           Name
           Use
         }
       }
     }
   `
 ).then(result => {
   if (result.errors) {
     console.log('error in querying data')
     throw result.errors
   }
   // console.log('data query:' + JSON.stringify(result))

   // Creates pages for each element
   result.data.allElementsCsv.nodes.forEach(element => {
     // console.log('inside forEach')
     const slug = element.Name
     console.log(slug)

     createPage({
       path: slug,
       component: elementTemplate,
       context: {
         ...element,
       },
     })
   })
 })
}
