/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { TodoListFooter_viewer$ref } from './TodoListFooter_viewer.graphql';
import type { TodoList_viewer$ref } from './TodoList_viewer.graphql';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type TodoApp_viewer$ref: FragmentReference;
export type TodoApp_viewer = {|
  +id: string,
  +totalCount: ?number,
  +$fragmentRefs: (TodoListFooter_viewer$ref & TodoList_viewer$ref),
  +$refType: TodoApp_viewer$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "TodoApp_viewer",
  "type": "User",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "totalCount",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "TodoListFooter_viewer",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "TodoList_viewer",
      "args": null
    },
    {
      "kind": "ScalarField",
      "alias": "__id",
      "name": "id",
      "args": null,
      "storageKey": null
    }
  ]
};
(node/*: any*/).hash = 'b9743417c7b5ef2bbda96cf675aa9eb4';
module.exports = node;
