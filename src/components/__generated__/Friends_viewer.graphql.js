/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Friendslist_viewer$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Friends_viewer$ref: FragmentReference;
declare export opaque type Friends_viewer$fragmentType: Friends_viewer$ref;
export type Friends_viewer = {|
  +id: string,
  +$fragmentRefs: Friendslist_viewer$ref,
  +$refType: Friends_viewer$ref,
|};
export type Friends_viewer$data = Friends_viewer;
export type Friends_viewer$key = {
  +$data?: Friends_viewer$data,
  +$fragmentRefs: Friends_viewer$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Friends_viewer",
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
      "kind": "FragmentSpread",
      "name": "Friendslist_viewer",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '2b561b18139a8ab94074d011a517df8e';
module.exports = node;
