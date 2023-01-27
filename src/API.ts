/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTeamInput = {
  id?: string | null,
  name: string,
  matchTeamsId?: string | null,
};

export type ModelTeamConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelTeamConditionInput | null > | null,
  or?: Array< ModelTeamConditionInput | null > | null,
  not?: ModelTeamConditionInput | null,
  matchTeamsId?: ModelIDInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Team = {
  __typename: "Team",
  id: string,
  name: string,
  players?: ModelPlayerConnection | null,
  createdAt: string,
  updatedAt: string,
  matchTeamsId?: string | null,
};

export type ModelPlayerConnection = {
  __typename: "ModelPlayerConnection",
  items:  Array<Player | null >,
  nextToken?: string | null,
};

export type Player = {
  __typename: "Player",
  id: string,
  title: string,
  position?: string | null,
  team?: Team | null,
  createdAt: string,
  updatedAt: string,
  teamPlayersId?: string | null,
};

export type UpdateTeamInput = {
  id: string,
  name?: string | null,
  matchTeamsId?: string | null,
};

export type DeleteTeamInput = {
  id: string,
};

export type CreatePlayerInput = {
  id?: string | null,
  title: string,
  position?: string | null,
  teamPlayersId?: string | null,
};

export type ModelPlayerConditionInput = {
  title?: ModelStringInput | null,
  position?: ModelStringInput | null,
  and?: Array< ModelPlayerConditionInput | null > | null,
  or?: Array< ModelPlayerConditionInput | null > | null,
  not?: ModelPlayerConditionInput | null,
  teamPlayersId?: ModelIDInput | null,
};

export type UpdatePlayerInput = {
  id: string,
  title?: string | null,
  position?: string | null,
  teamPlayersId?: string | null,
};

export type DeletePlayerInput = {
  id: string,
};

export type CreateMatchInput = {
  id?: string | null,
  title: string,
  matchType: MatchType,
  startTime: string,
  endTime: string,
  location: string,
};

export enum MatchType {
  Friendly = "Friendly",
  Competitive = "Competitive",
}


export type ModelMatchConditionInput = {
  title?: ModelStringInput | null,
  matchType?: ModelMatchTypeInput | null,
  startTime?: ModelStringInput | null,
  endTime?: ModelStringInput | null,
  location?: ModelStringInput | null,
  and?: Array< ModelMatchConditionInput | null > | null,
  or?: Array< ModelMatchConditionInput | null > | null,
  not?: ModelMatchConditionInput | null,
};

export type ModelMatchTypeInput = {
  eq?: MatchType | null,
  ne?: MatchType | null,
};

export type Match = {
  __typename: "Match",
  id: string,
  title: string,
  matchType: MatchType,
  startTime: string,
  endTime: string,
  location: string,
  teams?: ModelTeamConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelTeamConnection = {
  __typename: "ModelTeamConnection",
  items:  Array<Team | null >,
  nextToken?: string | null,
};

export type UpdateMatchInput = {
  id: string,
  title?: string | null,
  matchType?: MatchType | null,
  startTime?: string | null,
  endTime?: string | null,
  location?: string | null,
};

export type DeleteMatchInput = {
  id: string,
};

export type ModelTeamFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelTeamFilterInput | null > | null,
  or?: Array< ModelTeamFilterInput | null > | null,
  not?: ModelTeamFilterInput | null,
  matchTeamsId?: ModelIDInput | null,
};

export type ModelPlayerFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  position?: ModelStringInput | null,
  and?: Array< ModelPlayerFilterInput | null > | null,
  or?: Array< ModelPlayerFilterInput | null > | null,
  not?: ModelPlayerFilterInput | null,
  teamPlayersId?: ModelIDInput | null,
};

export type ModelMatchFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  matchType?: ModelMatchTypeInput | null,
  startTime?: ModelStringInput | null,
  endTime?: ModelStringInput | null,
  location?: ModelStringInput | null,
  and?: Array< ModelMatchFilterInput | null > | null,
  or?: Array< ModelMatchFilterInput | null > | null,
  not?: ModelMatchFilterInput | null,
};

export type ModelMatchConnection = {
  __typename: "ModelMatchConnection",
  items:  Array<Match | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionTeamFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTeamFilterInput | null > | null,
  or?: Array< ModelSubscriptionTeamFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionPlayerFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  position?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPlayerFilterInput | null > | null,
  or?: Array< ModelSubscriptionPlayerFilterInput | null > | null,
};

export type ModelSubscriptionMatchFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  matchType?: ModelSubscriptionStringInput | null,
  startTime?: ModelSubscriptionStringInput | null,
  endTime?: ModelSubscriptionStringInput | null,
  location?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMatchFilterInput | null > | null,
  or?: Array< ModelSubscriptionMatchFilterInput | null > | null,
};

export type CreateTeamMutationVariables = {
  input: CreateTeamInput,
  condition?: ModelTeamConditionInput | null,
};

export type CreateTeamMutation = {
  createTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    players?:  {
      __typename: "ModelPlayerConnection",
      items:  Array< {
        __typename: "Player",
        id: string,
        title: string,
        position?: string | null,
        createdAt: string,
        updatedAt: string,
        teamPlayersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    matchTeamsId?: string | null,
  } | null,
};

export type UpdateTeamMutationVariables = {
  input: UpdateTeamInput,
  condition?: ModelTeamConditionInput | null,
};

export type UpdateTeamMutation = {
  updateTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    players?:  {
      __typename: "ModelPlayerConnection",
      items:  Array< {
        __typename: "Player",
        id: string,
        title: string,
        position?: string | null,
        createdAt: string,
        updatedAt: string,
        teamPlayersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    matchTeamsId?: string | null,
  } | null,
};

export type DeleteTeamMutationVariables = {
  input: DeleteTeamInput,
  condition?: ModelTeamConditionInput | null,
};

export type DeleteTeamMutation = {
  deleteTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    players?:  {
      __typename: "ModelPlayerConnection",
      items:  Array< {
        __typename: "Player",
        id: string,
        title: string,
        position?: string | null,
        createdAt: string,
        updatedAt: string,
        teamPlayersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    matchTeamsId?: string | null,
  } | null,
};

export type CreatePlayerMutationVariables = {
  input: CreatePlayerInput,
  condition?: ModelPlayerConditionInput | null,
};

export type CreatePlayerMutation = {
  createPlayer?:  {
    __typename: "Player",
    id: string,
    title: string,
    position?: string | null,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      players?:  {
        __typename: "ModelPlayerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      matchTeamsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    teamPlayersId?: string | null,
  } | null,
};

export type UpdatePlayerMutationVariables = {
  input: UpdatePlayerInput,
  condition?: ModelPlayerConditionInput | null,
};

export type UpdatePlayerMutation = {
  updatePlayer?:  {
    __typename: "Player",
    id: string,
    title: string,
    position?: string | null,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      players?:  {
        __typename: "ModelPlayerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      matchTeamsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    teamPlayersId?: string | null,
  } | null,
};

export type DeletePlayerMutationVariables = {
  input: DeletePlayerInput,
  condition?: ModelPlayerConditionInput | null,
};

export type DeletePlayerMutation = {
  deletePlayer?:  {
    __typename: "Player",
    id: string,
    title: string,
    position?: string | null,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      players?:  {
        __typename: "ModelPlayerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      matchTeamsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    teamPlayersId?: string | null,
  } | null,
};

export type CreateMatchMutationVariables = {
  input: CreateMatchInput,
  condition?: ModelMatchConditionInput | null,
};

export type CreateMatchMutation = {
  createMatch?:  {
    __typename: "Match",
    id: string,
    title: string,
    matchType: MatchType,
    startTime: string,
    endTime: string,
    location: string,
    teams?:  {
      __typename: "ModelTeamConnection",
      items:  Array< {
        __typename: "Team",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        matchTeamsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMatchMutationVariables = {
  input: UpdateMatchInput,
  condition?: ModelMatchConditionInput | null,
};

export type UpdateMatchMutation = {
  updateMatch?:  {
    __typename: "Match",
    id: string,
    title: string,
    matchType: MatchType,
    startTime: string,
    endTime: string,
    location: string,
    teams?:  {
      __typename: "ModelTeamConnection",
      items:  Array< {
        __typename: "Team",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        matchTeamsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMatchMutationVariables = {
  input: DeleteMatchInput,
  condition?: ModelMatchConditionInput | null,
};

export type DeleteMatchMutation = {
  deleteMatch?:  {
    __typename: "Match",
    id: string,
    title: string,
    matchType: MatchType,
    startTime: string,
    endTime: string,
    location: string,
    teams?:  {
      __typename: "ModelTeamConnection",
      items:  Array< {
        __typename: "Team",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        matchTeamsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetTeamQueryVariables = {
  id: string,
};

export type GetTeamQuery = {
  getTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    players?:  {
      __typename: "ModelPlayerConnection",
      items:  Array< {
        __typename: "Player",
        id: string,
        title: string,
        position?: string | null,
        createdAt: string,
        updatedAt: string,
        teamPlayersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    matchTeamsId?: string | null,
  } | null,
};

export type ListTeamsQueryVariables = {
  filter?: ModelTeamFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTeamsQuery = {
  listTeams?:  {
    __typename: "ModelTeamConnection",
    items:  Array< {
      __typename: "Team",
      id: string,
      name: string,
      players?:  {
        __typename: "ModelPlayerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      matchTeamsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPlayerQueryVariables = {
  id: string,
};

export type GetPlayerQuery = {
  getPlayer?:  {
    __typename: "Player",
    id: string,
    title: string,
    position?: string | null,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      players?:  {
        __typename: "ModelPlayerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      matchTeamsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    teamPlayersId?: string | null,
  } | null,
};

export type ListPlayersQueryVariables = {
  filter?: ModelPlayerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlayersQuery = {
  listPlayers?:  {
    __typename: "ModelPlayerConnection",
    items:  Array< {
      __typename: "Player",
      id: string,
      title: string,
      position?: string | null,
      team?:  {
        __typename: "Team",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        matchTeamsId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      teamPlayersId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMatchQueryVariables = {
  id: string,
};

export type GetMatchQuery = {
  getMatch?:  {
    __typename: "Match",
    id: string,
    title: string,
    matchType: MatchType,
    startTime: string,
    endTime: string,
    location: string,
    teams?:  {
      __typename: "ModelTeamConnection",
      items:  Array< {
        __typename: "Team",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        matchTeamsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMatchesQueryVariables = {
  filter?: ModelMatchFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMatchesQuery = {
  listMatches?:  {
    __typename: "ModelMatchConnection",
    items:  Array< {
      __typename: "Match",
      id: string,
      title: string,
      matchType: MatchType,
      startTime: string,
      endTime: string,
      location: string,
      teams?:  {
        __typename: "ModelTeamConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTeamSubscriptionVariables = {
  filter?: ModelSubscriptionTeamFilterInput | null,
};

export type OnCreateTeamSubscription = {
  onCreateTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    players?:  {
      __typename: "ModelPlayerConnection",
      items:  Array< {
        __typename: "Player",
        id: string,
        title: string,
        position?: string | null,
        createdAt: string,
        updatedAt: string,
        teamPlayersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    matchTeamsId?: string | null,
  } | null,
};

export type OnUpdateTeamSubscriptionVariables = {
  filter?: ModelSubscriptionTeamFilterInput | null,
};

export type OnUpdateTeamSubscription = {
  onUpdateTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    players?:  {
      __typename: "ModelPlayerConnection",
      items:  Array< {
        __typename: "Player",
        id: string,
        title: string,
        position?: string | null,
        createdAt: string,
        updatedAt: string,
        teamPlayersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    matchTeamsId?: string | null,
  } | null,
};

export type OnDeleteTeamSubscriptionVariables = {
  filter?: ModelSubscriptionTeamFilterInput | null,
};

export type OnDeleteTeamSubscription = {
  onDeleteTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    players?:  {
      __typename: "ModelPlayerConnection",
      items:  Array< {
        __typename: "Player",
        id: string,
        title: string,
        position?: string | null,
        createdAt: string,
        updatedAt: string,
        teamPlayersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    matchTeamsId?: string | null,
  } | null,
};

export type OnCreatePlayerSubscriptionVariables = {
  filter?: ModelSubscriptionPlayerFilterInput | null,
};

export type OnCreatePlayerSubscription = {
  onCreatePlayer?:  {
    __typename: "Player",
    id: string,
    title: string,
    position?: string | null,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      players?:  {
        __typename: "ModelPlayerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      matchTeamsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    teamPlayersId?: string | null,
  } | null,
};

export type OnUpdatePlayerSubscriptionVariables = {
  filter?: ModelSubscriptionPlayerFilterInput | null,
};

export type OnUpdatePlayerSubscription = {
  onUpdatePlayer?:  {
    __typename: "Player",
    id: string,
    title: string,
    position?: string | null,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      players?:  {
        __typename: "ModelPlayerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      matchTeamsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    teamPlayersId?: string | null,
  } | null,
};

export type OnDeletePlayerSubscriptionVariables = {
  filter?: ModelSubscriptionPlayerFilterInput | null,
};

export type OnDeletePlayerSubscription = {
  onDeletePlayer?:  {
    __typename: "Player",
    id: string,
    title: string,
    position?: string | null,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      players?:  {
        __typename: "ModelPlayerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      matchTeamsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    teamPlayersId?: string | null,
  } | null,
};

export type OnCreateMatchSubscriptionVariables = {
  filter?: ModelSubscriptionMatchFilterInput | null,
};

export type OnCreateMatchSubscription = {
  onCreateMatch?:  {
    __typename: "Match",
    id: string,
    title: string,
    matchType: MatchType,
    startTime: string,
    endTime: string,
    location: string,
    teams?:  {
      __typename: "ModelTeamConnection",
      items:  Array< {
        __typename: "Team",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        matchTeamsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMatchSubscriptionVariables = {
  filter?: ModelSubscriptionMatchFilterInput | null,
};

export type OnUpdateMatchSubscription = {
  onUpdateMatch?:  {
    __typename: "Match",
    id: string,
    title: string,
    matchType: MatchType,
    startTime: string,
    endTime: string,
    location: string,
    teams?:  {
      __typename: "ModelTeamConnection",
      items:  Array< {
        __typename: "Team",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        matchTeamsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMatchSubscriptionVariables = {
  filter?: ModelSubscriptionMatchFilterInput | null,
};

export type OnDeleteMatchSubscription = {
  onDeleteMatch?:  {
    __typename: "Match",
    id: string,
    title: string,
    matchType: MatchType,
    startTime: string,
    endTime: string,
    location: string,
    teams?:  {
      __typename: "ModelTeamConnection",
      items:  Array< {
        __typename: "Team",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        matchTeamsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
