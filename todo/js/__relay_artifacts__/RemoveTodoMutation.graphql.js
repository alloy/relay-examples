/**
 * @flow
 * @relayHash 2f3fc1b2a0c0b418b75636a2eff74c3f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RemoveTodoMutationVariables = {|
  input: {
    id: string,
    clientMutationId?: ?string,
  },
|};
export type RemoveTodoMutationResponse = {|
  +removeTodo: ?{|
    +deletedTodoId: ?string,
    +viewer: ?{|
      +completedCount: ?number,
      +totalCount: ?number,
    |},
  |},
|};
*/


/*
mutation RemoveTodoMutation(
  $input: RemoveTodoInput!
) {
  removeTodo(input: $input) {
    deletedTodoId
    viewer {
      completedCount
      totalCount
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "RemoveTodoInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "RemoveTodoInput!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "deletedTodoId",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "completedCount",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "totalCount",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "RemoveTodoMutation",
  "id": null,
  "text": "mutation RemoveTodoMutation(\n  $input: RemoveTodoInput!\n) {\n  removeTodo(input: $input) {\n    deletedTodoId\n    viewer {\n      completedCount\n      totalCount\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "RemoveTodoMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "removeTodo",
        "storageKey": null,
        "args": v1,
        "concreteType": "RemoveTodoPayload",
        "plural": false,
        "selections": [
          v2,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "viewer",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              v3,
              v4
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "RemoveTodoMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "removeTodo",
        "storageKey": null,
        "args": v1,
        "concreteType": "RemoveTodoPayload",
        "plural": false,
        "selections": [
          v2,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "viewer",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              v3,
              v4,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "id",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = '560d32d6f18b4072042cf217a41beb97';
module.exports = node;
