# Content model

CoreStructuresX product content is split into three layers.

1. `assets/js/data/site-config.js` owns public identity, links, release source, media and theme tokens.
2. `assets/js/data/landing-content.js` owns landing-page prose and section order.
3. `assets/js/data/docs-content.js` owns the wiki catalog; each article body is maintained independently under `assets/content/docs/<article-id>.html`.

The main HTML shells provide structure only. Product prose should not be duplicated into `index.html` or `reference.html`.

## Article ids

Article ids use lowercase letters, digits, hyphens and `/` separators. The body path is derived exactly from the id. For example:

```text
paper/example-pack-yml
assets/content/docs/paper/example-pack-yml.html
```

Configuration file ids are a separate namespace and may contain filename punctuation or underscores. A catalog entry connects a config id to its explanatory article.

## Anchors

Use stable lowercase hyphenated ids on article headings. Historical standalone-page anchors are preserved by `assets/js/legacy-routes.js`; the pack guide also keeps its former section ids directly in the maintained body.

## Source discipline

Current plugin resources and source outrank historical site prose. State build targets as build targets, keep runtime claims bounded to observed evidence, and never infer compatibility from an adjacent platform or a bStats label.
