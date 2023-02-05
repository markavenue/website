import { IGatsbyImageData } from 'gatsby-plugin-image';

interface ImageNode {
  node: {
    id: string;
    childImageSharp: { gatsbyImageData: IGatsbyImageData };
  };
}

export interface AllFileQuery {
  allFile: {
    edges: ImageNode[];
  };
}
