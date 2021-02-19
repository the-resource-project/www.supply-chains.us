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
             Name
             Image
             Location
             Map
             Use
           }
         }
       }
     `
   ).then(result => {
     if (result.errors) {
       throw result.errors
     }

     // Create people  pages.
     result.data.allElementsCsv.nodes.forEach(element => {
       const slug = element.Name

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
