import { graphql } from "gatsby"
export const ElementsCsvFragment = graphql`
  fragment ElementsCsvFragment on ElementsCsv {
    Name
    Image
    Location
    Map
    Use
  }
`
