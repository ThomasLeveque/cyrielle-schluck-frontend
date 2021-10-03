import { gql } from '@apollo/client';

export const PROJECT_QUERY = gql`
  query GetProject($projectSlug: String!) {
    projectBySlug(slug: $projectSlug) {
      id
      name
      isShortName
      formatedName
      shortDesc
      description
      color
      slug
      textsColor
      image {
        width
        height
        url
        alternativeText
      }
      mobileImage {
        width
        height
        url
        alternativeText
      }
      categories {
        name
        slug
      }
      projectSteps {
        ... on ComponentBlockProjectStep {
          id
          title
          subtitle
          description
          bgColor
          stepItems {
            id
            title
            grid
            itemImages {
              id
              size
              grid
              mobileGrid
              isSwipable
              tabletGrid
              topSpace
              mobileTopSpace
              customGridSize
              image {
                width
                height
                url
                alternativeText
              }
            }
          }
        }
      }
    }
  }
`;

export const ALL_PROJECTS_SLUG_QUERY = gql`
  query {
    projects {
      slug
    }
  }
`;

export const HOME_PROJECTS_SLUG_QUERY = gql`
  query {
    home {
      superCategoryList {
        ... on ComponentBlockSuperCategoryBlock {
          superCategory
          projectList {
            project {
              slug
            }
          }
        }
      }
    }
  }
`;

export const HOME_QUERY = gql`
  query {
    home {
      name
      title
      desc
      printTitle
      printDesc
      superCategoryList {
        ... on ComponentBlockSuperCategoryBlock {
          superCategory
          projectList {
            project {
              id
              name
              shortDesc
              itemFormatedName
              mobileName
              description
              color
              slug
              textsColor
              image {
                width
                height
                url
                alternativeText
              }
              categories {
                slug
                name
              }
            }
          }
        }
      }
    }
  }
`;

export const ABOUT_ME_QUERY = gql`
  query {
    aboutMe {
      image {
        url
        alternativeText
      }
      name
      title
      desc
      recos {
        ... on ComponentBlockReco {
          id
          text
          source
          sourceUrl
        }
      }
    }
  }
`;
