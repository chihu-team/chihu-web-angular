import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'no-data-component': {
    'background': '#fff',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 245 }],
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': 'rgba(0, 37, 55, 0.05)' }],
    'boxSizing': 'border-box',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e7eaf1' }],
    'borderTop': [{ 'unit': 'string', 'value': 'none' }]
  },
  'no-data-component no-data': {
    'textAlign': 'center',
    'fontSize': [{ 'unit': 'px', 'value': 15 }],
    'color': '#8590a6',
    'paddingTop': [{ 'unit': 'px', 'value': 20 }]
  }
});
