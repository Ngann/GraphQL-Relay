/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Friend_friend$ref = any;
type Friend_viewer$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Friendslist_viewer$ref: FragmentReference;
declare export opaque type Friendslist_viewer$fragmentType: Friendslist_viewer$ref;
export type Friendslist_viewer = {|
  +friends: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +$fragmentRefs: Friend_friend$ref,
      |}
    |}>
  |},
  +id: string,
  +$fragmentRefs: Friend_viewer$ref,
  +$refType: Friendslist_viewer$ref,
|};
export type Friendslist_viewer$data = Friendslist_viewer;
export type Friendslist_viewer$key = {
  +$data?: Friendslist_viewer$data,
  +$fragmentRefs: Friendslist_viewer$ref,
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "Friendslist_viewer",
  "type": "User",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "friends",
      "storageKey": null,
      "args": null,
      "concreteType": "FriendConnection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "FriendEdge",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "Friend",
              "plural": false,
              "selections": [
                (v0/*: any*/),
                {
                  "kind": "FragmentSpread",
                  "name": "Friend_friend",
                  "args": null
                }
              ]
            }
          ]
        }
      ]
    },
    (v0/*: any*/),
    {
      "kind": "FragmentSpread",
      "name": "Friend_viewer",
      "args": null
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '6f82bdf2a330117884f7ce53ce43e6c2';
module.exports = node;
