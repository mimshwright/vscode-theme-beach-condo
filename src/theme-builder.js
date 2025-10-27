// ============================================
// PALETTES - All colors defined here
// ============================================

const defaultPalette = {
  red: "#ed561a",
  redDark: "#c44e0a",
  pink: "#ffc3c3",
  yellow: "#ffb454",
  yellowDark: "#d99444",
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
  gray10: "#2a2520",
  gray0: "#1a1816",
};

const palettes = {
  dotonbori: {
    ...defaultPalette,

    // Primary palette
    blue: "#6edadc",
    blueDark: "#4ab4b6",
    pink: "#ee8dc1",
    pinkDark: "#d16ba6",
    green: "#38e284",
    greenDark: "#2a8c5a",
  },

  telavision: {
    ...defaultPalette,

    // Primary palette
    red: "#fe6358",
    redDark: "#d64d43",
    blue: "#97cde1",
    blueDark: "#5aa8c4",
    green: "#007775",
    teal: "#005a59",
    tealDark: "#004948",

    gray100: "#fdfefe",
    gray95: "#f5fbf7",
    gray90: "#eef5f1",
    gray85: "#e9f7ed",
    gray60: "#888888",
    gray50: "#666666",
    gray40: "#999999",
    gray10: "#002928",
    gray5: "#003534",
    gray0: "#001a1a",
  },

  telavisionbold: {
    ...defaultPalette,

    // Primary palette
    pink: "#f8c9e3",
    blue: "#95dbed",
    blueDark: "#6ab8d1",
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
};

// ============================================
// SEMANTIC MAPPINGS
// ============================================

// Dotonbori semantic mappings
const dotonboriDark = {
  foreground: palettes.dotonbori.green,
  editorBackground: palettes.dotonbori.gray10,
  panelBackground: palettes.dotonbori.gray10,
  chromeBackground: palettes.dotonbori.gray10,
  primary: palettes.dotonbori.purple,
  primaryTransparent: palettes.dotonbori.purple + "40",
  selection: palettes.dotonbori.green + "30",
  keyword: palettes.dotonbori.red,
  string: palettes.dotonbori.gray100,
  number: palettes.dotonbori.pink,
  type: palettes.dotonbori.blue,
  comment: palettes.dotonbori.redDark,
  operator: palettes.dotonbori.pink,
  bracket: palettes.dotonbori.pink,
  bracketColor1: palettes.dotonbori.pink,
  bracketColor2: palettes.dotonbori.blue,
  bracketColor3: palettes.dotonbori.green,
  bracketColor4: palettes.dotonbori.red,
  bracketColor5: palettes.dotonbori.purple,
  bracketColor6: palettes.dotonbori.pink,
  lineNumber: palettes.dotonbori.pink,
  lineNumberActive: palettes.dotonbori.green,
  lineHighlight: "#ffffff08",
  border: palettes.dotonbori.pink,
};

const dotonboriLight = {
  foreground: palettes.dotonbori.gray10,
  editorBackground: palettes.dotonbori.gray95,
  panelBackground: palettes.dotonbori.gray100,
  chromeBackground: palettes.dotonbori.gray100,
  primary: palettes.dotonbori.purple,
  primaryTransparent: palettes.dotonbori.purple + "20",
  selection: palettes.dotonbori.green + "30",
  keyword: palettes.dotonbori.red,
  string: palettes.dotonbori.purpleDark,
  number: palettes.dotonbori.pink,
  type: palettes.dotonbori.blueDark,
  comment: palettes.dotonbori.pink,
  operator: palettes.dotonbori.greenDark,
  bracket: palettes.dotonbori.pink,
  bracketColor1: palettes.dotonbori.pinkDark,
  bracketColor2: palettes.dotonbori.blueDark,
  bracketColor3: palettes.dotonbori.greenDark,
  bracketColor4: palettes.dotonbori.redDark,
  bracketColor5: palettes.dotonbori.purple,
  bracketColor6: palettes.dotonbori.pinkDark,
  lineNumber: palettes.dotonbori.pink,
  lineNumberActive: palettes.dotonbori.green,
  lineHighlight: "#00000008",
  border: "#00000015",
};

// TelAvision semantic mappings
const telavisionDark = {
  foreground: palettes.telavision.blue,
  editorBackground: palettes.telavision.gray5,
  panelBackground: palettes.telavision.gray10,
  chromeBackground: palettes.telavision.gray0,
  primary: palettes.telavision.teal,
  primaryTransparent: palettes.telavision.teal + "40",
  selection: palettes.telavision.blue + "40",
  keyword: palettes.telavision.red,
  string: palettes.telavision.gray85,
  number: palettes.telavision.pink,
  type: palettes.telavision.yellow,
  comment: palettes.telavision.gray50,
  operator: palettes.telavision.gray60,
  bracket: palettes.telavision.pink,
  bracketColor1: palettes.telavision.pink,
  bracketColor2: palettes.telavision.blue,
  bracketColor3: palettes.telavision.yellow,
  bracketColor4: palettes.telavision.red,
  bracketColor5: palettes.telavision.teal,
  bracketColor6: palettes.telavision.pink,
  lineNumber: palettes.telavision.gray50,
  lineNumberActive: palettes.telavision.blue,
  lineHighlight: "#ffffff08",
  border: "#ffffff15",
};

const telavisionLight = {
  foreground: palettes.telavision.green,
  editorBackground: palettes.telavision.gray100,
  panelBackground: palettes.telavision.gray95,
  chromeBackground: palettes.telavision.gray90,
  primary: palettes.telavision.teal,
  primaryTransparent: palettes.telavision.teal + "20",
  selection: palettes.telavision.blue + "30",
  keyword: palettes.telavision.redDark,
  string: palettes.telavision.gray10,
  number: palettes.telavision.redDark,
  type: palettes.telavision.yellowDark,
  comment: palettes.telavision.gray40,
  operator: palettes.telavision.gray60,
  bracket: palettes.telavision.redDark,
  bracketColor1: palettes.telavision.redDark,
  bracketColor2: palettes.telavision.blueDark,
  bracketColor3: palettes.telavision.yellowDark,
  bracketColor4: palettes.telavision.redDark,
  bracketColor5: palettes.telavision.green,
  bracketColor6: palettes.telavision.redDark,
  lineNumber: palettes.telavision.gray40,
  lineNumberActive: palettes.telavision.green,
  lineHighlight: "#00000008",
  border: "#00000015",
};

// TelAvisionBold semantic mappings
const telavisionboldDark = {
  foreground: palettes.telavisionbold.green,
  editorBackground: palettes.telavisionbold.gray30,
  panelBackground: palettes.telavisionbold.gray10,
  chromeBackground: palettes.telavisionbold.gray0,
  primary: palettes.telavisionbold.green,
  primaryTransparent: palettes.telavisionbold.green + "40",
  selection: palettes.telavisionbold.blue + "40",
  keyword: palettes.telavisionbold.red,
  string: palettes.telavisionbold.gray85,
  number: palettes.telavisionbold.pink,
  type: palettes.telavisionbold.yellow,
  comment: palettes.telavisionbold.gray50,
  operator: palettes.telavisionbold.gray60,
  bracket: palettes.telavisionbold.pink,
  bracketColor1: palettes.telavisionbold.pink,
  bracketColor2: palettes.telavisionbold.blue,
  bracketColor3: palettes.telavisionbold.yellow,
  bracketColor4: palettes.telavisionbold.red,
  bracketColor5: palettes.telavisionbold.green,
  bracketColor6: palettes.telavisionbold.pink,
  lineNumber: palettes.telavisionbold.gray50,
  lineNumberActive: palettes.telavisionbold.green,
  lineHighlight: "#ffffff08",
  border: "#ffffff15",
};

const telavisionboldLight = {
  foreground: palettes.telavisionbold.greenLight,
  editorBackground: palettes.telavisionbold.gray100,
  panelBackground: palettes.telavisionbold.gray95,
  chromeBackground: palettes.telavisionbold.gray90,
  primary: palettes.telavisionbold.green,
  primaryTransparent: palettes.telavisionbold.green + "20",
  selection: palettes.telavisionbold.blue + "30",
  keyword: palettes.telavisionbold.redDark,
  string: palettes.telavisionbold.gray10,
  number: palettes.telavisionbold.redDark,
  type: palettes.telavisionbold.yellowDark,
  comment: palettes.telavisionbold.gray40,
  operator: palettes.telavisionbold.gray60,
  bracket: palettes.telavisionbold.redDark,
  bracketColor1: palettes.telavisionbold.redDark,
  bracketColor2: palettes.telavisionbold.blueDark,
  bracketColor3: palettes.telavisionbold.yellowDark,
  bracketColor4: palettes.telavisionbold.redDark,
  bracketColor5: palettes.telavisionbold.greenLight,
  bracketColor6: palettes.telavisionbold.redDark,
  lineNumber: palettes.telavisionbold.gray40,
  lineNumberActive: palettes.telavisionbold.greenLight,
  lineHighlight: "#00000008",
  border: "#00000015",
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
      "editor.lineHighlightBackground": semantic.lineHighlight,
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
  dotonbori: {
    dark: buildTheme("dark", dotonboriDark),
    light: buildTheme("light", dotonboriLight),
  },
  telavision: {
    dark: buildTheme("dark", telavisionDark),
    light: buildTheme("light", telavisionLight),
  },
  telavisionbold: {
    dark: buildTheme("dark", telavisionboldDark),
    light: buildTheme("light", telavisionboldLight),
  },
};
