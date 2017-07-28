import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'open-share-page': {
    'width': [{ 'unit': 'px', 'value': 694 }],
    'minHeight': [{ 'unit': 'px', 'value': 603 }],
    'outline': 'none',
    'padding': [{ 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 20 }],
    'background': '#fff',
    'marginBottom': [{ 'unit': 'px', 'value': 10 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e7eaf1' }],
    'boxSizing': 'border-box',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': 'rgba(0, 37, 55, 0.05)' }]
  },
  'open-share-page text': {
    'color': '#848484',
    'fontSize': [{ 'unit': 'px', 'value': 15 }],
    'lineHeight': [{ 'unit': 'px', 'value': 28 }],
    'marginBottom': [{ 'unit': 'px', 'value': 40 }]
  },
  'open-share-page header': {
    'display': 'flex',
    'alignItems': 'center'
  },
  'open-share-page header img': {
    'width': [{ 'unit': 'px', 'value': 30 }],
    'height': [{ 'unit': 'px', 'value': 30 }],
    'borderRadius': '9999px',
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#f7fafc' }],
    'boxSizing': 'border-box',
    'verticalAlign': 'text-bottom'
  },
  'open-share-page header name': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontWeight': '400',
    'marginLeft': [{ 'unit': 'px', 'value': 15 }]
  },
  'open-share-page header time': {
    'display': 'flex',
    'flex': '1',
    'justifyContent': 'flex-end',
    'alignItems': 'center',
    'color': '#9fadc7'
  },
  'open-share-page header time svg': {
    'verticalAlign': 'text-bottom',
    'fill': '#9fadc7',
    'width': [{ 'unit': 'px', 'value': 20 }],
    'height': [{ 'unit': 'px', 'value': 20 }]
  },
  'open-share-page imgs': {
    'width': [{ 'unit': '%H', 'value': 0.95 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'border': [{ 'unit': 'px', 'value': 6 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e7eaf1' }],
    'boxSizing': 'border-box',
    'display': 'block',
    'marginBottom': [{ 'unit': 'px', 'value': 10 }]
  }
});
