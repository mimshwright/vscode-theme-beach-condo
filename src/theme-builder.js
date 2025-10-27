// ============================================
// PALETTES - All colors defined here
// ============================================

const defaultPalette = {
  red: "#ed561a",
  redDark: "#c44e0a",
  pink: "#ffc3c3",
  yellow: "#ffb454",
  yellowDark: "#d99444",
  blue: "#95dbed",
  blueDark: "#6ab8d1",
  purple: "#883556",
  purpleDark: "#1E0914",
  green: "#0f8142",
  greenLight: "#11a056",
  greenDark: "#154936",

  gray100: "#e8e3d9",
  gray95: "#faf8f3",
  gray90: "#f0ede5",
  gray85: "#e8e3d9",
  gray60: "#999999",
  gray50: "#666666",
  gray30: "#4a4540",
  gray20: "#221e1a",
  gray10: "#1a1816",
  gray0: "#15120e",
};

const palettes = {
  belmopan: {
    ...defaultPalette,

    // Primary palette
    blue: "#6edadc",
    blueDark: "#4ab4b6",
    pink: "#ee8dc1",
    pinkDark: "#d16ba6",
    green: "#38e284",
    greenDark: "#2a8c5a",

    gray10: "#2f2316",
  },

  barcelona: {
    ...defaultPalette,

    // Primary palette
    red: "#fe6358",
    redDark: "#d64d43",
    pinkLight: "#ee8dc1",
    blue: "#97cde1",
    blueDark: "#5aa8c4",
    teal: "#005a59",
    tealDarker: "#003534",
    green: "#89D264",
    yellow: "#FFAA33",

    gray100: "#fdfefe",
    gray95: "#f5fbf7",
    gray90: "#eef5f1",
    gray85: "#e9f7ed",
    gray60: "#888888",
    gray50: "#666666",
    gray40: "#999999",
    gray10: "#002928",
    gray0: "#000909",
  },

  barcelonaBold: {
    ...defaultPalette,

    // Primary palette
    pink: "#f8c9e3",
    yellow: "#f7af4b",
    yellowDark: "#d99444",

    gray100: "#fefefe",
    gray95: "#fcfcf9",
    gray90: "#f5f4ef",
    gray85: "#f8f7f1",
    gray60: "#888888",
    gray50: "#666666",
    gray40: "#999999",
    gray30: "#0a4d28",
    gray10: "#073620",
    gray0: "#041f14",
  },

  brisbane: {
    ...defaultPalette,

    // Primary palette
    green: "#abb818",
    greenDark: "#073129",
    greenDarkMid: "#328954",
    greenLight: "#a4d4b4",
    pink: "#ee8dc1",
    yellow: "#ffbc92",
    pinkDark: "#d62e6c",
    purpleLight: "#dac7df",
    purple: "#5b1c62",
    purpleDark: "#3b1c32",
    purpleDarker: "#2C0A25",

    gray100: "#f3e9ee",
    gray90: "#f1d7ba",
    gray10: "#073620",
  },
};

// ============================================
// SEMANTIC MAPPINGS
// ============================================

const defaultMapping = (palette) => ({
  foreground: palette.green,
  editorBackground: palette.gray10,
  panelBackground: palette.gray10,
  chromeBackground: palette.gray10,
  primary: palette.purple,
  primaryTransparent: palette.purple + "40",
  selection: palette.green + "30",
  keyword: palette.red,
  string: palette.gray100,
  number: palette.pink,
  type: palette.blue,
  comment: palette.redDark,
  operator: palette.pink,
  bracket: palette.pink,
  lineNumber: palette.pink,
  lineNumberActive: palette.green,
  lineHighlight: "#ffffff08",
  selectedLineHighlight: "#ffffff12",
  border: palette.pink,
  bracketColor1: palette.pink,
  bracketColor2: palette.blue,
  bracketColor3: palette.green,
  bracketColor4: palette.red,
  bracketColor5: palette.purple,
  bracketColor6: palette.pink,
});

// Belmopan semantic mappings
const belmopanDark = {
  ...defaultMapping(palettes.belmopan),
  foreground: palettes.belmopan.green,
  editorBackground: palettes.belmopan.gray20,
  primary: palettes.belmopan.purple,
  primaryTransparent: palettes.belmopan.purple + "40",
  selection: palettes.belmopan.yellowDark + "30",
  keyword: palettes.belmopan.red,
  string: palettes.belmopan.gray100,
  number: palettes.belmopan.pink,
  type: palettes.belmopan.blue,
  comment: palettes.belmopan.redDark,
  operator: palettes.belmopan.pink,
  bracket: palettes.belmopan.pink,
  lineNumber: palettes.belmopan.pink,
  lineNumberActive: palettes.belmopan.green,
  border: palettes.belmopan.pink,
};

const belmopanLight = {
  ...defaultMapping(palettes.belmopan),
  foreground: palettes.belmopan.gray10,
  editorBackground: palettes.belmopan.gray95,
  panelBackground: palettes.belmopan.gray100,
  chromeBackground: palettes.belmopan.gray100,
  primary: palettes.belmopan.purple,
  primaryTransparent: palettes.belmopan.purple + "20",
  selection: palettes.belmopan.green + "30",
  keyword: palettes.belmopan.red,
  string: palettes.belmopan.purpleDark,
  number: palettes.belmopan.pink,
  type: palettes.belmopan.blueDark,
  comment: palettes.belmopan.pink,
  operator: palettes.belmopan.greenDark,
  bracket: palettes.belmopan.pink,
  lineNumber: palettes.belmopan.pink,
  lineNumberActive: palettes.belmopan.green,
};

// Barcelona semantic mappings
const barcelonaDark = {
  ...defaultMapping(palettes.barcelona),
  foreground: palettes.barcelona.blue,
  editorBackground: palettes.barcelona.tealDarker,
  panelBackground: palettes.barcelona.gray10,
  chromeBackground: palettes.barcelona.gray0,
  primary: palettes.barcelona.teal,
  primaryTransparent: palettes.barcelona.teal + "40",
  selection: palettes.barcelona.purple + "AA",
  keyword: palettes.barcelona.red,
  string: palettes.barcelona.green,
  number: palettes.barcelona.pinkLight,
  type: palettes.barcelona.yellow,
  comment: palettes.barcelona.teal,
};

const barcelonaLight = {
  ...defaultMapping(palettes.barcelona),
  foreground: palettes.barcelona.green,
  editorBackground: palettes.barcelona.gray100,
  panelBackground: palettes.barcelona.gray95,
  chromeBackground: palettes.barcelona.gray90,
  primary: palettes.barcelona.teal,
  primaryTransparent: palettes.barcelona.teal + "20",
  selection: palettes.barcelona.blue + "30",
  keyword: palettes.barcelona.redDark,
  string: palettes.barcelona.gray10,
  number: palettes.barcelona.redDark,
  type: palettes.barcelona.yellowDark,
  comment: palettes.barcelona.gray40,
  operator: palettes.barcelona.gray60,
  bracket: palettes.barcelona.redDark,
  lineNumber: palettes.barcelona.gray40,
  lineNumberActive: palettes.barcelona.green,
};

// Barcelona Bold semantic mappings
const barcelonaBoldDark = {
  ...defaultMapping(palettes.barcelonaBold),
  // foreground: palettes.barcelonaBold.green,
  // editorBackground: palettes.barcelonaBold.gray30,
  // panelBackground: palettes.barcelonaBold.gray10,
  // chromeBackground: palettes.barcelonaBold.gray0,
  // primary: palettes.barcelonaBold.green,
  // primaryTransparent: palettes.barcelonaBold.green + "40",
  // selection: palettes.barcelonaBold.blue + "40",
  // keyword: palettes.barcelonaBold.red,
  // string: palettes.barcelonaBold.gray85,
  // number: palettes.barcelonaBold.pink,
  // type: palettes.barcelonaBold.yellow,
  // comment: palettes.barcelonaBold.gray50,
  // operator: palettes.barcelonaBold.gray60,
  // bracket: palettes.barcelonaBold.pink,
  lineNumberActive: palettes.barcelonaBold.green,
};

const barcelonaBoldLight = {
  ...defaultMapping(palettes.barcelonaBold),
  foreground: palettes.barcelonaBold.greenLight,
  editorBackground: palettes.barcelonaBold.gray100,
  panelBackground: palettes.barcelonaBold.gray95,
  chromeBackground: palettes.barcelonaBold.gray90,
  primary: palettes.barcelonaBold.green,
  primaryTransparent: palettes.barcelonaBold.green + "20",
  selection: palettes.barcelonaBold.blue + "30",
  keyword: palettes.barcelonaBold.redDark,
  string: palettes.barcelonaBold.gray10,
  number: palettes.barcelonaBold.redDark,
  type: palettes.barcelonaBold.yellowDark,
  comment: palettes.barcelonaBold.gray40,
  operator: palettes.barcelonaBold.gray60,
  bracket: palettes.barcelonaBold.redDark,
  lineNumber: palettes.barcelonaBold.gray40,
  lineNumberActive: palettes.barcelonaBold.greenLight,
};

// Brisbane semantic mappings
const brisbaneDark = {
  ...defaultMapping(palettes.brisbane),
  foreground: palettes.brisbane.yellow,
  editorBackground: palettes.brisbane.purpleDark,
  panelBackground: palettes.brisbane.purpleDarker,
  chromeBackground: palettes.brisbane.gray0,
  primary: palettes.brisbane.greenLight,
  primaryTransparent: palettes.brisbane.greenLight + "40",
  selection: palettes.brisbane.greenDark + "AA",
  keyword: palettes.brisbane.pinkDark,
  type: palettes.brisbane.green,
  comment: palettes.brisbane.yellow + "66",
  operator: palettes.brisbane.greenLight,
  lineNumberActive: palettes.brisbane.greenLight,
  bracketColor1: palettes.brisbane.greenLight,
};

const brisbaneLight = {
  ...defaultMapping(palettes.brisbane),
  foreground: palettes.brisbane.purple,
  editorBackground: palettes.brisbane.gray100,
  panelBackground: palettes.brisbane.gray90,
  chromeBackground: palettes.brisbane.gray90,
  selection: palettes.brisbane.yellow + "AA",
  keyword: palettes.brisbane.pinkDark,
  string: palettes.brisbane.purpleDarker,
  number: palettes.brisbane.yellowDark,
  type: palettes.brisbane.greenDarkMid,
  comment: palettes.brisbane.pinkDark + "AA",
  operator: palettes.brisbane.pinkDark,
  bracketColor1: palettes.brisbane.greenDarkMid,
  bracketColor2: palettes.brisbane.blueDark,
  bracketColor3: palettes.brisbane.greenDark,
};

// ============================================
// THEME BUILDER FUNCTION
// ============================================
function buildTheme(type, semantic) {
  return {
    type,
    colors: {
      "editor.background": semantic.editorBackground,
      "editor.foreground": semantic.foreground,
      "editor.selectionBackground": semantic.selection,
      "editor.lineHighlightBackground": semantic.selectedLineHighlight,
      "editorLineNumber.foreground": semantic.lineNumber,
      "editorLineNumber.activeForeground": semantic.lineNumberActive,
      "editorGutter.background": semantic.editorBackground,
      "titleBar.activeBackground": semantic.chromeBackground,
      "titleBar.inactiveBackground": semantic.chromeBackground,
      "titleBar.activeForeground": semantic.foreground,
      "sideBar.border": semantic.border,
      "sideBar.background": semantic.panelBackground,
      "statusBar.foreground": semantic.foreground,
      "statusBar.background": semantic.chromeBackground,
      "tab.activeBackground": semantic.chromeBackground,
      "tab.inactiveBackground": semantic.panelBackground,
      "tab.activeBorder": semantic.primary,
      "editorSuggestWidget.background": semantic.panelBackground,
      "editorSuggestWidget.highlightForeground": semantic.keyword,
      "editorSuggestWidget.selectedBackground": semantic.primaryTransparent,
      "badge.background": semantic.primary,
      "activityBar.background": semantic.chromeBackground,
      "activityBarBadge.background": semantic.primary,
      "editorBracketHighlight.foreground1": semantic.bracketColor1,
      "editorBracketHighlight.foreground2": semantic.bracketColor2,
      "editorBracketHighlight.foreground3": semantic.bracketColor3,
      "editorBracketHighlight.foreground4": semantic.bracketColor4,
      "editorBracketHighlight.foreground5": semantic.bracketColor5,
      "editorBracketHighlight.foreground6": semantic.bracketColor6,
    },
    tokenColors: [
      {
        name: "Comment",
        scope: ["comment"],
        settings: {
          foreground: semantic.comment,
          fontStyle: "italic",
        },
      },
      {
        name: "Multiline Comment",
        scope: ["comment.block", "comment.block.documentation"],
        settings: {
          foreground: semantic.comment,
          fontStyle: "italic",
        },
      },
      {
        name: "Brackets",
        scope:
          "punctuation.definition.block,punctuation.definition.parameters,punctuation.definition.array,punctuation.definition.typeparameters,punctuation.definition.binding-pattern,meta.brace,punctuation.section.embedded",
        settings: {
          foreground: semantic.bracket,
        },
      },
      {
        name: "Operator Keywords",
        scope:
          "keyword.operator,keyword.operator.logical,keyword.operator.relational,keyword.operator.assignment,keyword.operator.comparison,keyword.operator.ternary,keyword.operator.arithmetic,keyword.operator.spread",
        settings: {
          foreground: semantic.operator,
        },
      },
      {
        name: "Strings",
        scope:
          "string,string.character.escape,string.template.quoted,string.template.quoted.punctuation,string.template.quoted.punctuation.single,string.template.quoted.punctuation.double,string.type.declaration.annotation,string.template.quoted.punctuation.tag",
        settings: {
          foreground: semantic.string,
        },
      },
      {
        name: "String Interpolation Begin and End",
        scope:
          "punctuation.definition.template-expression.begin,punctuation.definition.template-expression.end",
        settings: {
          foreground: semantic.operator,
        },
      },
      {
        name: "String Interpolation Body",
        scope: "expression.string,meta.template.expression",
        settings: {
          foreground: semantic.foreground,
        },
      },
      {
        name: "Number",
        scope: "constant.numeric",
        settings: {
          foreground: semantic.number,
        },
      },
      {
        name: "Built-in constant",
        scope: "constant.language,variable.language",
        settings: {
          foreground: semantic.keyword,
        },
      },
      {
        name: "User-defined constant",
        scope: "constant.character, constant.other",
        settings: {
          foreground: semantic.number,
        },
      },
      {
        name: "Keyword",
        scope:
          "keyword,keyword.operator.new,keyword.operator.delete,keyword.operator.static,keyword.operator.this,keyword.operator.expression",
        settings: {
          foreground: semantic.keyword,
        },
      },
      {
        name: "Types, Class Types",
        scope:
          "entity.name.type,meta.return.type,meta.type.annotation,meta.type.parameters,support.type.primitive",
        settings: {
          foreground: semantic.type,
        },
      },
      {
        name: "Storage type",
        scope: "storage,storage.type,storage.modifier,storage.arrow",
        settings: {
          foreground: semantic.keyword,
        },
      },
      {
        name: "Class constructor",
        scope: "class.instance.constructor,new.expr entity.name.type",
        settings: {
          foreground: semantic.foreground,
        },
      },
      {
        name: "Function",
        scope: "support.function, entity.name.function",
        settings: {
          foreground: semantic.foreground,
        },
      },
      {
        name: "Function Types",
        scope: "annotation.meta.ts, annotation.meta.tsx",
        settings: {
          foreground: semantic.operator,
        },
      },
      {
        name: "Function Argument",
        scope: "variable.parameter, operator.rest.parameters",
        settings: {
          foreground: semantic.foreground,
        },
      },
      {
        name: "Variable, Property",
        scope:
          "variable.property,variable.other.property,variable.other.object.property,variable.object.property,support.variable.property",
        settings: {
          foreground: semantic.foreground,
        },
      },
      {
        name: "Module Name",
        scope: "quote.module",
        settings: {
          foreground: semantic.string,
        },
      },
      {
        name: "Markup Headings",
        scope: "markup.heading",
        settings: {
          foreground: semantic.keyword,
          fontStyle: "bold",
        },
      },
      {
        name: "Tag name",
        scope:
          "punctuation.definition.tag.html, punctuation.definition.tag.begin, punctuation.definition.tag.end, entity.name.tag",
        settings: {
          foreground: semantic.type,
        },
      },
      {
        name: "Tag attribute",
        scope: "entity.other.attribute-name",
        settings: {
          foreground: semantic.foreground,
        },
      },
      {
        name: "Object Keys",
        scope: "meta.object-literal.key",
        settings: {
          foreground: semantic.foreground,
        },
      },
      {
        name: "TypeScript Class Modifiers",
        scope: "storage.modifier.ts",
        settings: {
          foreground: semantic.keyword,
        },
      },
      {
        name: "TypeScript Type Casting",
        scope:
          "ts.cast.expr,ts.meta.entity.class.method.new.expr.cast,ts.meta.entity.type.name.new.expr.cast,ts.meta.entity.type.name.var-single-variable.annotation,tsx.cast.expr,tsx.meta.entity.class.method.new.expr.cast,tsx.meta.entity.type.name.new.expr.cast,tsx.meta.entity.type.name.var-single-variable.annotation",
        settings: {
          foreground: semantic.type,
        },
      },
      {
        name: "TypeScript Type Declaration",
        scope:
          "ts.meta.type.support,ts.meta.type.entity.name,ts.meta.class.inherited-class,tsx.meta.type.support,tsx.meta.type.entity.name,tsx.meta.class.inherited-class,type-declaration,enum-declaration",
        settings: {
          foreground: semantic.type,
        },
      },
      {
        name: "TypeScript Method Declaration",
        scope:
          "function-declaration,method-declaration,method-overload-declaration,type-fn-type-parameters",
        settings: {
          foreground: semantic.foreground,
        },
      },
      {
        name: "Documentation Block",
        scope: "comment.block.documentation",
        settings: {
          foreground: semantic.string,
        },
      },
      {
        name: "Documentation Highlight (JSDoc)",
        scope: "storage.type.class.jsdoc",
        settings: {
          foreground: semantic.keyword,
        },
      },
      {
        name: "Import-Export-All (*) Keyword",
        scope: "constant.language.import-export-all",
        settings: {
          foreground: semantic.foreground,
        },
      },
      {
        name: "Object Key Seperator",
        scope: "objectliteral.key.separator, punctuation.separator.key-value",
        settings: {
          foreground: semantic.foreground,
        },
      },
      {
        name: "Regex",
        scope: "regex",
        settings: {
          fontStyle: " italic",
        },
      },
      {
        name: "Typescript Namespace",
        scope: "ts.meta.entity.name.namespace,tsx.meta.entity.name.namespace",
        settings: {
          foreground: semantic.foreground,
        },
      },
      {
        name: "Regex Character-class",
        scope: "regex.character-class",
        settings: {
          foreground: semantic.foreground,
        },
      },
      {
        name: "Class Name",
        scope: "entity.name.type.class",
        settings: {
          foreground: semantic.foreground,
        },
      },
      {
        name: "Class Inheritances",
        scope: "entity.other.inherited-class",
        settings: {
          foreground: semantic.type,
        },
      },
      {
        name: "Documentation Entity",
        scope: "entity.name.type.instance.jsdoc",
        settings: {
          foreground: semantic.foreground,
        },
      },
      {
        name: "YAML entity",
        scope: "yaml.entity.name,yaml.string.entity.name",
        settings: {
          foreground: semantic.keyword,
        },
      },
      {
        name: "YAML string value",
        scope: "yaml.string.out",
        settings: {
          foreground: semantic.foreground,
        },
      },
      {
        name: "Ignored (Exceptions Rules)",
        scope:
          "block.support.module,block.support.type.module,block.support.function.variable",
        settings: {
          foreground: semantic.foreground,
        },
      },
      {
        name: "Regex",
        scope: "string.regexp",
        settings: {
          foreground: semantic.keyword,
        },
      },
      {
        name: "Regex Group/Set",
        scope:
          "punctuation.definition.group.regexp,punctuation.definition.character-class.regexp",
        settings: {
          foreground: semantic.foreground,
        },
      },
      {
        name: "Regex Character Class",
        scope:
          "constant.other.character-class.regexp, constant.character.escape.ts",
        settings: {
          foreground: semantic.foreground,
        },
      },
      {
        name: "Regex Or Operator",
        scope: "expr.regex.or.operator",
        settings: {
          foreground: semantic.foreground,
        },
      },
      {
        name: "Tag string",
        scope:
          "string.template.tag,string.template.punctuation.tag,string.quoted.punctuation.tag,string.quoted.embedded.tag, string.quoted.double.tag",
        settings: {
          foreground: semantic.string,
        },
      },
      {
        name: "Tag function parenthesis",
        scope:
          "tag.punctuation.begin.arrow.parameters.embedded,tag.punctuation.end.arrow.parameters.embedded",
        settings: {
          foreground: semantic.foreground,
        },
      },
      {
        name: "Object-literal key class",
        scope:
          "object-literal.object.member.key.field.other,object-literal.object.member.key.accessor,object-literal.object.member.key.array.brace.square",
        settings: {
          foreground: semantic.foreground,
        },
      },
      {
        name: "CSS Property-value",
        scope: "property-list.property-value,property-list.constant",
        settings: {
          foreground: semantic.string,
        },
      },
      {
        name: "CSS Property variable",
        scope:
          "support.type.property-name.variable.css,support.type.property-name.variable.scss,variable.scss",
        settings: {
          foreground: semantic.type,
        },
      },
      {
        name: "CSS Property entity",
        scope:
          "entity.other.attribute-name.class.css,entity.other.attribute-name.class.scss,entity.other.attribute-name.parent-selector-suffix.css,entity.other.attribute-name.parent-selector-suffix.scss",
        settings: {
          foreground: semantic.foreground,
        },
      },
      {
        name: "CSS Property-value",
        scope:
          "property-list.property-value.rgb-value, keyword.other.unit.css,keyword.other.unit.scss",
        settings: {
          foreground: semantic.type,
        },
      },
      {
        name: "CSS Property-value function",
        scope: "property-list.property-value.function",
        settings: {
          foreground: semantic.foreground,
        },
      },
      {
        name: "CSS constant variables",
        scope:
          "support.constant.property-value.css,support.constant.property-value.scss",
        settings: {
          foreground: semantic.string,
        },
      },
      {
        name: "CSS Tag",
        scope: "css.entity.name.tag,scss.entity.name.tag",
        settings: {
          foreground: semantic.keyword,
        },
      },
      {
        name: "CSS ID, Selector",
        scope:
          "meta.selector.css, entity.attribute-name.id, entity.other.attribute-name.pseudo-class.css,entity.other.attribute-name.pseudo-element.css",
        settings: {
          foreground: semantic.foreground,
        },
      },
      {
        name: "CSS Keyword",
        scope: "keyword.scss,keyword.css",
        settings: {
          foreground: semantic.keyword,
        },
      },
      {
        name: "Triple-slash Directive Tag",
        scope: "triple-slash.tag",
        settings: {
          foreground: semantic.foreground,
          fontStyle: "italic",
        },
      },
      {
        scope: "token.info-token",
        settings: {
          foreground: semantic.type,
        },
      },
      {
        scope: "token.warn-token",
        settings: {
          foreground: semantic.keyword,
        },
      },
      {
        scope: "token.error-token",
        settings: {
          foreground: type === "dark" ? "#f44747" : "#d32f2f",
        },
      },
      {
        scope: "token.debug-token",
        settings: {
          foreground: semantic.number,
        },
      },
      {
        name: "Python operators",
        scope: "keyword.operator.logical.python",
        settings: {
          foreground: semantic.keyword,
        },
      },
      {
        name: "Dart class type",
        scope: "support.class.dart",
        settings: {
          foreground: semantic.keyword,
        },
      },
      {
        name: "PHP variables",
        scope: ["variable.language.php", "variable.other.php"],
        settings: {
          foreground: semantic.number,
        },
      },
      {
        name: "Perl specific",
        scope: ["variable.other.readwrite.perl"],
        settings: {
          foreground: semantic.number,
        },
      },
      {
        name: "PHP variables",
        scope: ["variable.other.property.php"],
        settings: {
          foreground: semantic.keyword,
        },
      },
      {
        name: "PHP variables",
        scope: ["support.variable.property.php"],
        settings: {
          foreground: semantic.foreground,
        },
      },
    ],
  };
}

// ============================================
// EXPORTS
// ============================================
module.exports = {
  belmopan: {
    dark: buildTheme("dark", belmopanDark),
    light: buildTheme("light", belmopanLight),
  },
  barcelona: {
    dark: buildTheme("dark", barcelonaDark),
    light: buildTheme("light", barcelonaLight),
  },
  barcelonaBold: {
    dark: buildTheme("dark", barcelonaBoldDark),
    light: buildTheme("light", barcelonaBoldLight),
  },
  brisbane: {
    dark: buildTheme("dark", brisbaneDark),
    light: buildTheme("light", brisbaneLight),
  },
};
