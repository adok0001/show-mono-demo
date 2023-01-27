/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTeam = /* GraphQL */ `
  query GetTeam($id: ID!) {
    getTeam(id: $id) {
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
export const listTeams = /* GraphQL */ `
  query ListTeams(
    $filter: ModelTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        players {
          nextToken
        }
        createdAt
        updatedAt
        matchTeamsId
      }
      nextToken
    }
  }
`;
export const getPlayer = /* GraphQL */ `
  query GetPlayer($id: ID!) {
    getPlayer(id: $id) {
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
export const listPlayers = /* GraphQL */ `
  query ListPlayers(
    $filter: ModelPlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        position
        team {
          id
          name
          createdAt
          updatedAt
          matchTeamsId
        }
        createdAt
        updatedAt
        teamPlayersId
      }
      nextToken
    }
  }
`;
export const getMatch = /* GraphQL */ `
  query GetMatch($id: ID!) {
    getMatch(id: $id) {
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
export const listMatches = /* GraphQL */ `
  query ListMatches(
    $filter: ModelMatchFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMatches(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        matchType
        startTime
        endTime
        location
        teams {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
