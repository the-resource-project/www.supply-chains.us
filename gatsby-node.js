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
       console.log('hello world')
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
