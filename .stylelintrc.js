module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-prettier',
    'stylelint-config-html/vue',
    'stylelint-config-recommended-vue'
  ],
  plugins: ['stylelint-scss', 'stylelint-order'],
  customSyntax: "postcss-scss",
  rules: {
    'declaration-colon-space-after': 'always', 
    'declaration-block-semicolon-newline-after': 'always',
    // 'string-quotes': 'single',
    'indentation': [2, { baseIndentLevel: 0 }],
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'order/order': ['custom-properties', 'declarations'],
    'order/properties-alphabetical-order': true,
    'no-eol-whitespace': true,
    'color-hex-length': 'long',
    'declaration-block-trailing-semicolon': 'always',
    'color-no-invalid-hex': true,
    'font-family-no-duplicate-names': true,
    'declaration-block-no-duplicate-properties': true,
    'declaration-block-no-duplicate-custom-properties': true,
    'no-duplicate-at-import-rules': true,
    'media-query-list-comma-newline-after': 'always',
    // 'rule-empty-line-before': 'always-multi-line',
    'block-opening-brace-newline-before': 'never-single-line',
    'block-opening-brace-newline-after': 'always',
    // 'block-closing-brace-newline-after': 'always',
    'block-closing-brace-newline-before': 'always',
    'block-opening-brace-space-before': 'always',
    'no-descending-specificity': null,
    'value-no-vendor-prefix': null,
    'custom-property-pattern': 'layouts',
    "selector-class-pattern": null, 
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ],
  },
};
