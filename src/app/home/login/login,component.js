import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'a': {
    'textDecoration': 'none'
  },
  'login-page': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'overflow': 'auto',
    'background': '#f7fafc'
  },
  'top': {
    'width': [{ 'unit': 'px', 'value': 300 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'textAlign': 'center'
  },
  'top logo': {
    'color': '#0f88eb',
    'fontSize': [{ 'unit': 'px', 'value': 74 }],
    'margin': [{ 'unit': 'px', 'value': 64 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 14 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'top h2': {
    'color': '#555',
    'margin': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 26 }, { 'unit': 'px', 'value': 0 }],
    'fontWeight': '400',
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1 }]
  },
  'dowm': {
    'width': [{ 'unit': 'px', 'value': 300 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'height': [{ 'unit': 'px', 'value': 41 }],
    'color': '#5fa6e5',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#96c2e9' }],
    'textAlign': 'center',
    'lineHeight': [{ 'unit': 'px', 'value': 41 }],
    'marginTop': [{ 'unit': 'px', 'value': 48 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }]
  },
  'copy-wrap': {
    'textAlign': 'center',
    'paddingTop': [{ 'unit': 'px', 'value': 15 }]
  },
  'copy-wrap copy': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'display': 'block',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingTop': [{ 'unit': 'px', 'value': 6 }],
    'color': '#ababab',
    'textAlign': 'center'
  },
  'copy-wrap copy a': {
    'color': '#ababab'
  },
  'copy-wrap copy svg': {
    'width': [{ 'unit': 'px', 'value': 14 }],
    'height': [{ 'unit': 'px', 'value': 14 }],
    'fill': '#ababab',
    'marginRight': [{ 'unit': 'px', 'value': 10 }],
    'verticalAlign': 'text-bottom'
  },
  'index-tab-navs': {
    'width': [{ 'unit': 'px', 'value': 300 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'marginBottom': [{ 'unit': 'px', 'value': 10 }],
    'overflow': 'hidden'
  },
  'index-tab-navs navs-slider': {
    'position': 'relative',
    'width': [{ 'unit': 'px', 'value': 144 }],
    'overflow': 'hidden',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'index-tab-navs navs-slider a': {
    'float': 'left',
    'textAlign': 'center',
    'width': [{ 'unit': 'rem', 'value': 4 }],
    'lineHeight': [{ 'unit': 'px', 'value': 35 }],
    'color': '#555',
    'opacity': '.7',
    'textDecorationLine': 'none',
    'fontSize': [{ 'unit': 'px', 'value': 18 }]
  },
  'index-tab-navs navs-slider active': {
    'color': '#0F88E8'
  },
  'index-tab-navs navs-slider navs-slider-bar': {
    'position': 'absolute',
    'width': [{ 'unit': 'rem', 'value': 2.4 }],
    'background': '#0f88eb',
    'height': [{ 'unit': 'px', 'value': 2 }],
    'position': 'absolute',
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.8 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.8 }],
    'transition': 'left .15s ease-in',
    'WebkitTransition': 'left .15s ease-in'
  },
  'router-outlet-wrap': {
    'width': [{ 'unit': 'px', 'value': 300 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }]
  }
});
