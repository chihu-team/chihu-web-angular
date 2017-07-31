import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'card-component': {
    'width': [{ 'unit': 'px', 'value': 694 }]
  },
  'card-component cards': {
    'outline': 'none',
    'padding': [{ 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 20 }],
    'background': '#fff',
    'marginBottom': [{ 'unit': 'px', 'value': 10 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e7eaf1' }],
    'boxSizing': 'border-box',
    'borderRadius': '2px',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': 'rgba(0, 37, 55, 0.05)' }]
  },
  'card-component cards header': {
    'display': 'flex',
    'alignItems': 'center'
  },
  'card-component cards header a': {
    'cursor': 'pointer',
    'outline': 'none'
  },
  'card-component cards header img': {
    'width': [{ 'unit': 'px', 'value': 30 }],
    'height': [{ 'unit': 'px', 'value': 30 }],
    'borderRadius': '9999px',
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#f7fafc' }],
    'boxSizing': 'border-box',
    'verticalAlign': 'text-bottom'
  },
  'card-component cards header name': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontWeight': '400',
    'marginLeft': [{ 'unit': 'px', 'value': 15 }]
  },
  'card-component cards header time': {
    'display': 'flex',
    'flex': '1',
    'justifyContent': 'flex-end',
    'alignItems': 'center',
    'color': '#9fadc7'
  },
  'card-component cards header time svg': {
    'verticalAlign': 'text-bottom',
    'fill': '#9fadc7',
    'width': [{ 'unit': 'px', 'value': 20 }],
    'height': [{ 'unit': 'px', 'value': 20 }]
  },
  'card-component cards cont-wrap': {
    'cursor': 'pointer',
    'outline': 'none'
  },
  'card-component cards ContentItem-title': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'fontWeight': '700',
    'lineHeight': [{ 'unit': 'px', 'value': 1.6 }],
    'color': '#1e1e1e'
  },
  'card-component cards ContentItem-title a': {
    'textDecoration': 'none'
  },
  'card-component cards RichContent': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'overflow': 'hidden'
  },
  'card-component cards RichContent RichContent-banner': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 305 }],
    'overflow': 'hidden'
  },
  'card-component cards RichContent RichContent-cover': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 305 }],
    'transition': 'all 400ms ease',
    'backgroundPosition': 'center center !important',
    'backgroundRepeat': 'no-repeat !important',
    'backgroundSize': 'cover !important'
  },
  'card-component cards RichContent RichContent-inner': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.8 }],
    'color': '#666',
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'card-component cards RichContent:hover RichContent-cover': {
    'transform': 'scale(1.2) rotate(4deg)'
  },
  'card-component cards nav': {
    'paddingTop': [{ 'unit': 'px', 'value': 20 }],
    'color': '#9fadc7'
  },
  'card-component cards nav a': {
    'fontSize': [{ 'unit': 'px', 'value': 15 }],
    'lineHeight': [{ 'unit': 'px', 'value': 15 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'textDecoration': 'none',
    'color': '#9fadc7'
  },
  'card-component cards nav svg': {
    'width': [{ 'unit': 'px', 'value': 16 }],
    'height': [{ 'unit': 'px', 'value': 16 }],
    'marginRight': [{ 'unit': 'px', 'value': 8 }],
    'verticalAlign': 'text-bottom',
    'fill': '#9fadc7'
  }
});
