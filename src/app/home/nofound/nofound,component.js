import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'nofound-page': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'overflow': 'auto',
    'background': '#f7fafc'
  },
  'nofound-page err': {
    'width': [{ 'unit': 'px', 'value': 1000 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'textAlign': 'center'
  },
  'nofound-page err h1': {
    'fontSize': [{ 'unit': 'px', 'value': 300 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'color': '#666',
    'fontWeight': '500'
  },
  'nofound-page err a': {
    'color': '#5079d9',
    'cursor': 'pointer',
    'transition': 'all .5s'
  },
  'nofound-page err a:hover': {
    'color': '#aaa'
  },
  'nofound-page copy-wrap': {
    'position': 'absolute',
    'bottom': [{ 'unit': 'px', 'value': 30 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'textAlign': 'center',
    'color': '#777'
  },
  'nofound-page copy-wrap copy': {
    'display': 'block'
  },
  'nofound-page copy-wrap copy svg': {
    'verticalAlign': 'text-bottom',
    'marginRight': [{ 'unit': 'px', 'value': 10 }],
    'fill': '#777'
  },
  'nofound-page copy-wrap copy a': {
    'color': '#777',
    'cursor': 'pointer'
  }
});
