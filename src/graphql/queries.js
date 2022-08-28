/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBitcoin = /* GraphQL */ `
  query GetBitcoin($id: ID!) {
    getBitcoin(id: $id) {
      date
      ils {
        open
        high
        low
        close
      }
      usd {
        open
        high
        low
        close
      }
      isFavorite
      id
      createdAt
      updatedAt
    }
  }
`;

export const getBitcoinByDate = /* GraphQL */ `
  query GetBitcoin($date: ID!) {
    getBitcoin(date: $String) {
      date
      ils {
        open
        high
        low
        close
      }
      usd {
        open
        high
        low
        close
      }
      isFavorite
      id
      createdAt
      updatedAt
    }
  }
`;

export const listBitcoins = /* GraphQL */ `
  query ListBitcoins(
    $filter: ModelBitcoinFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBitcoins(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        date
        ils {
          open
          high
          low
          close
        }
        usd {
          open
          high
          low
          close
        }
        isFavorite
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
