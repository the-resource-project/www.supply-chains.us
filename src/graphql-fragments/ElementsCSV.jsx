import { graphql } from "gatsby"

export const ElementsCsvFragment = graphql`
  fragment ElementsCsvFragment on ElementsCsv {
    Image
    Location
    Map
    Name
    Use
  }
`
