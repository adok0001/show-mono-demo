/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam($filter: ModelSubscriptionTeamFilterInput) {
    onCreateTeam(filter: $filter) {
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
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam($filter: ModelSubscriptionTeamFilterInput) {
    onUpdateTeam(filter: $filter) {
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
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam($filter: ModelSubscriptionTeamFilterInput) {
    onDeleteTeam(filter: $filter) {
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
export const onCreatePlayer = /* GraphQL */ `
  subscription OnCreatePlayer($filter: ModelSubscriptionPlayerFilterInput) {
    onCreatePlayer(filter: $filter) {
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
export const onUpdatePlayer = /* GraphQL */ `
  subscription OnUpdatePlayer($filter: ModelSubscriptionPlayerFilterInput) {
    onUpdatePlayer(filter: $filter) {
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
export const onDeletePlayer = /* GraphQL */ `
  subscription OnDeletePlayer($filter: ModelSubscriptionPlayerFilterInput) {
    onDeletePlayer(filter: $filter) {
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
export const onCreateMatch = /* GraphQL */ `
  subscription OnCreateMatch($filter: ModelSubscriptionMatchFilterInput) {
    onCreateMatch(filter: $filter) {
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
export const onUpdateMatch = /* GraphQL */ `
  subscription OnUpdateMatch($filter: ModelSubscriptionMatchFilterInput) {
    onUpdateMatch(filter: $filter) {
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
export const onDeleteMatch = /* GraphQL */ `
  subscription OnDeleteMatch($filter: ModelSubscriptionMatchFilterInput) {
    onDeleteMatch(filter: $filter) {
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
