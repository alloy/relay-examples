/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
export opaque type Todo_todo$ref: FragmentReference = FragmentReference;
export type Todo_todo = {|
  +complete: ?boolean,
  +id: string,
  +text: ?string,
  +$refType: Todo_todo$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "Todo_todo",
  "type": "Todo",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "complete",
      "args": null,
      "storageKey": null
    },
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
      "name": "text",
      "args": null,
      "storageKey": null
    }
  ]
};
(node/*: any*/).hash = '1f979eb84ff026fe8a89323dd533d1fc';
module.exports = node;
