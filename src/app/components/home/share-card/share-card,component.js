import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'share-card-component cards': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'outline': 'none',
    'padding': [{ 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 20 }],
    'background': '#fff',
    'marginBottom': [{ 'unit': 'px', 'value': 10 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e7eaf1' }],
    'boxSizing': 'border-box',
    'borderRadius': '2px',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': 'rgba(0, 37, 55, 0.05)' }]
  },
  'share-card-component cards header': {
    'display': 'flex',
    'alignItems': 'center'
  },
  'share-card-component cards header img': {
    'width': [{ 'unit': 'px', 'value': 30 }],
    'height': [{ 'unit': 'px', 'value': 30 }],
    'borderRadius': '9999px',
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#f7fafc' }],
    'boxSizing': 'border-box',
    'verticalAlign': 'text-bottom'
  },
  'share-card-component cards header name': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontWeight': '400',
    'marginLeft': [{ 'unit': 'px', 'value': 15 }]
  },
  'share-card-component cards header time': {
    'display': 'flex',
    'flex': '1',
    'justifyContent': 'flex-end',
    'alignItems': 'center',
    'color': '#9fadc7'
  },
  'share-card-component cards header time svg': {
    'verticalAlign': 'text-bottom',
    'fill': '#9fadc7',
    'width': [{ 'unit': 'px', 'value': 20 }],
    'height': [{ 'unit': 'px', 'value': 20 }]
  },
  'share-card-component cards wrap': {
    'outline': 'none',
    'cursor': 'pointer'
  },
  'share-card-component cards imgs-wrap': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'display': 'flex'
  },
  'share-card-component cards imgs-wrap imgs': {
    'width': [{ 'unit': 'px', 'value': 150 }],
    'height': [{ 'unit': 'px', 'value': 150 }],
    'marginRight': [{ 'unit': 'px', 'value': 12 }],
    'backgroundPosition': 'center center !important',
    'backgroundRepeat': 'no-repeat !important',
    'backgroundSize': 'cover !important'
  },
  'share-card-component cards text': {
    'fontSize': [{ 'unit': 'px', 'value': 17 }],
    'lineHeight': [{ 'unit': 'px', 'value': 28 }],
    'color': '#666'
  },
  'share-card-component cards nav': {
    'paddingTop': [{ 'unit': 'px', 'value': 20 }],
    'color': '#9fadc7'
  },
  'share-card-component cards nav a': {
    'fontSize': [{ 'unit': 'px', 'value': 15 }],
    'lineHeight': [{ 'unit': 'px', 'value': 15 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'textDecoration': 'none',
    'color': '#9fadc7'
  },
  'share-card-component cards nav svg': {
    'width': [{ 'unit': 'px', 'value': 16 }],
    'height': [{ 'unit': 'px', 'value': 16 }],
    'marginRight': [{ 'unit': 'px', 'value': 8 }],
    'verticalAlign': 'text-bottom',
    'fill': '#9fadc7'
  }
});
