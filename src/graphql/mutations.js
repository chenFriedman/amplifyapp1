/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBitcoin = /* GraphQL */ `
  mutation CreateBitcoin(
    $input: CreateBitcoinInput!
    $condition: ModelBitcoinConditionInput
  ) {
    createBitcoin(input: $input, condition: $condition) {
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
export const updateBitcoin = /* GraphQL */ `
  mutation UpdateBitcoin(
    $input: UpdateBitcoinInput!
    $condition: ModelBitcoinConditionInput
  ) {
    updateBitcoin(input: $input, condition: $condition) {
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
export const deleteBitcoin = /* GraphQL */ `
  mutation DeleteBitcoin(
    $input: DeleteBitcoinInput!
    $condition: ModelBitcoinConditionInput
  ) {
    deleteBitcoin(input: $input, condition: $condition) {
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
