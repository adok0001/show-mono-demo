/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTeam = /* GraphQL */ `
  mutation CreateTeam(
    $input: CreateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    createTeam(input: $input, condition: $condition) {
      id
      name
      players {
        items {
          id
          title
          position
          createdAt
          updatedAt
          teamPlayersId
        }
        nextToken
      }
      createdAt
      updatedAt
      matchTeamsId
    }
  }
`;
export const updateTeam = /* GraphQL */ `
  mutation UpdateTeam(
    $input: UpdateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    updateTeam(input: $input, condition: $condition) {
      id
      name
      players {
        items {
          id
          title
          position
          createdAt
          updatedAt
          teamPlayersId
        }
        nextToken
      }
      createdAt
      updatedAt
      matchTeamsId
    }
  }
`;
export const deleteTeam = /* GraphQL */ `
  mutation DeleteTeam(
    $input: DeleteTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    deleteTeam(input: $input, condition: $condition) {
      id
      name
      players {
        items {
          id
          title
          position
          createdAt
          updatedAt
          teamPlayersId
        }
        nextToken
      }
      createdAt
      updatedAt
      matchTeamsId
    }
  }
`;
export const createPlayer = /* GraphQL */ `
  mutation CreatePlayer(
    $input: CreatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    createPlayer(input: $input, condition: $condition) {
      id
      title
      position
      team {
        id
        name
        players {
          nextToken
        }
        createdAt
        updatedAt
        matchTeamsId
      }
      createdAt
      updatedAt
      teamPlayersId
    }
  }
`;
export const updatePlayer = /* GraphQL */ `
  mutation UpdatePlayer(
    $input: UpdatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    updatePlayer(input: $input, condition: $condition) {
      id
      title
      position
      team {
        id
        name
        players {
          nextToken
        }
        createdAt
        updatedAt
        matchTeamsId
      }
      createdAt
      updatedAt
      teamPlayersId
    }
  }
`;
export const deletePlayer = /* GraphQL */ `
  mutation DeletePlayer(
    $input: DeletePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    deletePlayer(input: $input, condition: $condition) {
      id
      title
      position
      team {
        id
        name
        players {
          nextToken
        }
        createdAt
        updatedAt
        matchTeamsId
      }
      createdAt
      updatedAt
      teamPlayersId
    }
  }
`;
export const createMatch = /* GraphQL */ `
  mutation CreateMatch(
    $input: CreateMatchInput!
    $condition: ModelMatchConditionInput
  ) {
    createMatch(input: $input, condition: $condition) {
      id
      title
      matchType
      startTime
      endTime
      location
      teams {
        items {
          id
          name
          createdAt
          updatedAt
          matchTeamsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateMatch = /* GraphQL */ `
  mutation UpdateMatch(
    $input: UpdateMatchInput!
    $condition: ModelMatchConditionInput
  ) {
    updateMatch(input: $input, condition: $condition) {
      id
      title
      matchType
      startTime
      endTime
      location
      teams {
        items {
          id
          name
          createdAt
          updatedAt
          matchTeamsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteMatch = /* GraphQL */ `
  mutation DeleteMatch(
    $input: DeleteMatchInput!
    $condition: ModelMatchConditionInput
  ) {
    deleteMatch(input: $input, condition: $condition) {
      id
      title
      matchType
      startTime
      endTime
      location
      teams {
        items {
          id
          name
          createdAt
          updatedAt
          matchTeamsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
