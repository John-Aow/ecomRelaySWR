/**
 * @generated SignedSource<<17406f84a50fce66ea6d7efcfbafc529>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type pages_listFilmsQuery$variables = {};
export type pages_listFilmsQuery$data = {
  readonly allFilms: {
    readonly films: ReadonlyArray<{
      readonly id: string;
      readonly openingCrawl: string | null;
      readonly title: string | null;
    } | null> | null;
  } | null;
};
export type pages_listFilmsQuery = {
  response: pages_listFilmsQuery$data;
  variables: pages_listFilmsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "FilmsConnection",
    "kind": "LinkedField",
    "name": "allFilms",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Film",
        "kind": "LinkedField",
        "name": "films",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "title",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "openingCrawl",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "pages_listFilmsQuery",
    "selections": (v0/*: any*/),
    "type": "Root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "pages_listFilmsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "de4a2a5dbbdb78fb7ded1409cb88a921",
    "id": null,
    "metadata": {},
    "name": "pages_listFilmsQuery",
    "operationKind": "query",
    "text": "query pages_listFilmsQuery {\n  allFilms {\n    films {\n      id\n      title\n      openingCrawl\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "26d1e122fd6b9b275c2ded9ee0a59a18";

export default node;
