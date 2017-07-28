import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'index-page': {
    'transition': 'all 400ms',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'overflow': 'auto',
    'background': '#f7fafc'
  },
  'index-page scrollToTop': {
    'position': 'fixed',
    'cursor': 'pointer',
    'bottom': [{ 'unit': 'px', 'value': 30 }],
    'right': [{ 'unit': 'px', 'value': 40 }],
    'width': [{ 'unit': 'px', 'value': 40 }],
    'height': [{ 'unit': 'px', 'value': 40 }],
    'background': '#e7eaf1',
    'alignItems': 'center',
    'textAlign': 'center',
    'lineHeight': [{ 'unit': 'px', 'value': 40 }],
    'borderRadius': '4px'
  },
  'index-page scrollToTop svg': {
    'fill': '#9aaabf',
    'width': [{ 'unit': 'px', 'value': 16 }],
    'height': [{ 'unit': 'px', 'value': 16 }],
    'verticalAlign': 'text-bottom'
  },
  'index-page main': {
    'width': [{ 'unit': 'px', 'value': 1000 }],
    'display': 'flex',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 16 }],
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'index-page main left-contens-wrap': {
    'width': [{ 'unit': 'px', 'value': 694 }],
    'height': [{ 'unit': 'px', 'value': 900 }],
    'minHeight': [{ 'unit': 'px', 'value': 400 }],
    'marginRight': [{ 'unit': 'px', 'value': 10 }],
    'float': 'left'
  },
  'index-page main TopstorySideBar': {
    'float': 'left',
    'width': [{ 'unit': 'px', 'value': 296 }],
    'height': [{ 'unit': 'px', 'value': 600 }]
  },
  'index-page main TopstorySideBar iCard': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 10 }],
    'background': '#fff',
    'marginBottom': [{ 'unit': 'px', 'value': 10 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e7eaf1' }],
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': 'rgba(0, 37, 55, 0.05)' }],
    'borderRadius': '2px',
    'boxSizing': 'border-box'
  },
  'index-page main TopstorySideBar iCard userimg': {
    'width': [{ 'unit': 'px', 'value': 80 }],
    'height': [{ 'unit': 'px', 'value': 80 }],
    'borderRadius': '9999px',
    'display': 'block',
    'margin': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 20 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'index-page main TopstorySideBar iCard h3': {
    'textAlign': 'center',
    'marginBottom': [{ 'unit': 'px', 'value': 8 }]
  },
  'index-page main TopstorySideBar iCard dec': {
    'display': 'flex',
    'display': '-webkit-flex'
  },
  'index-page main TopstorySideBar iCard dec p': {
    'marginBottom': [{ 'unit': 'px', 'value': 8 }]
  },
  'index-page main TopstorySideBar iCard dec items': {
    'flexGrow': '1',
    'WebkitFlexGrow': '1',
    'textAlign': 'center',
    'color': '#ababab'
  },
  'index-page main TopstorySideBar ilist': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'background': '#fff',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e7eaf1' }],
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': 'rgba(0, 37, 55, 0.05)' }],
    'borderRadius': '2px',
    'boxSizing': 'border-box'
  },
  'index-page main TopstorySideBar ilist TopstorySideBar-navList': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'index-page main TopstorySideBar ilist TopstorySideBar-navList li': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'listStyle': 'none',
    'color': '#9fadc7',
    'transition': 'all .5s',
    'cursor': 'pointer'
  },
  'index-page main TopstorySideBar ilist TopstorySideBar-navList li a': {
    'alignItems': 'center',
    'WebkitBoxAlign': 'center',
    'display': 'flex',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }],
    'height': [{ 'unit': 'px', 'value': 40 }],
    'overflow': 'hidden',
    'fontSize': [{ 'unit': 'px', 'value': 14 }]
  },
  'index-page main TopstorySideBar ilist TopstorySideBar-navList li svg': {
    'fill': '#9fadc7',
    'verticalAlign': 'text-bottom',
    'marginRight': [{ 'unit': 'px', 'value': 12 }],
    'width': [{ 'unit': 'px', 'value': 20 }],
    'height': [{ 'unit': 'px', 'value': 20 }]
  },
  'index-page main TopstorySideBar ilist TopstorySideBar-navList li:hover': {
    'background': '#ebf3fb'
  },
  'index-page loading-svg': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'clear': 'both',
    'height': [{ 'unit': 'px', 'value': 100 }],
    'textAlign': 'center'
  },
  'index-page loading-svg svg': {
    'marginTop': [{ 'unit': 'px', 'value': 30 }],
    'fill': '#0f88eb'
  }
});
