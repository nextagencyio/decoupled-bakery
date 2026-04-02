// Tagged template that returns the query string
const gql = (strings: TemplateStringsArray, ...values: any[]) => strings.reduce((a, s, i) => a + s + (values[i] || ''), '')

export const GET_ARTICLE_TEASERS = gql`
  query GetArticleTeasers($first: Int = 10) {
    nodeArticles(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created {
          timestamp
        }
        changed {
          timestamp
        }
        ... on NodeArticle {
          body {
            processed
            summary
          }
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM, THUMBNAIL]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_ARTICLE_BY_PATH = gql`
  query GetArticleByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeArticle {
            id
            title
            body {
              processed
            }
            created {
              timestamp
            }
            changed {
              timestamp
            }
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM, THUMBNAIL]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

export const GET_HOMEPAGE_DATA = gql`
  query GetHomepageData {
    nodeHomepages(first: 1) {
      nodes {
        id
        title
        path
        heroTitle
        heroSubtitle
        heroDescription { processed }
        statsItems { ... on ParagraphStatItem { id number label } }
        featuredItemsTitle
        ctaTitle
        ctaDescription { processed }
        ctaPrimary
        ctaSecondary
      }
    }
  }
`

export const GET_NODE_BY_PATH = gql`
  query GetNodeByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodePage {
            id
            title
            body {
              processed
            }
          }
          ... on NodeArticle {
            id
            title
            body {
              processed
            }
            created {
              timestamp
            }
            changed {
              timestamp
            }
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM, THUMBNAIL]) {
                name
                url
                width
                height
              }
            }
          }
          ... on NodeHomepage {
            id
            title
            heroTitle
            heroSubtitle
            heroDescription {
              processed
            }
            featuredItemsTitle
            statsItems {
              ... on ParagraphStatItem {
                id
                number
                label
              }
            }
            ctaTitle
            ctaDescription {
              processed
            }
            ctaPrimary
            ctaSecondary
          }
        }
      }
    }
  }
`

export const GET_MENU_ITEMS = gql`
  query GetMenuItems($first: Int = 10) {
    nodeMenuItems(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created { timestamp }
        ... on NodeMenuItem {
          body { processed summary }
          price
          menuCategory { ... on TermMenuCategory { name } }
          dietaryInfo
          isFeatured
          image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
        }
      }
    }
  }
`

export const GET_MENU_ITEM_BY_PATH = gql`
  query GetMenuItemByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeMenuItem {
            id
            title
            path
          body { processed summary }
          price
          menuCategory { ... on TermMenuCategory { name } }
          dietaryInfo
          isFeatured
          image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
          }
        }
      }
    }
  }
`

export const GET_SPECIALS = gql`
  query GetSpecials($first: Int = 10) {
    nodeSpecials(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created { timestamp }
        ... on NodeSpecial {
          body { processed summary }
          startDate { timestamp }
          endDate { timestamp }
          specialType { ... on TermSpecialType { name } }
          price
          image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
        }
      }
    }
  }
`

export const GET_SPECIAL_BY_PATH = gql`
  query GetSpecialByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeSpecial {
            id
            title
            path
          body { processed summary }
          startDate { timestamp }
          endDate { timestamp }
          specialType { ... on TermSpecialType { name } }
          price
          image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
          }
        }
      }
    }
  }
`
