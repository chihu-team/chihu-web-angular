import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'answer-card-component': {
    'outline': 'none',
    'padding': [{ 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 20 }],
    'background': '#fff',
    'marginBottom': [{ 'unit': 'px', 'value': 10 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e7eaf1' }],
    'boxSizing': 'border-box',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': 'rgba(0, 37, 55, 0.05)' }]
  },
  'answer-card-component cur': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'cursor': 'pointer',
    'outline': 'none'
  },
  'answer-card-component header': {
    'display': 'flex',
    'alignItems': 'center'
  },
  'answer-card-component header img': {
    'width': [{ 'unit': 'px', 'value': 30 }],
    'height': [{ 'unit': 'px', 'value': 30 }],
    'borderRadius': '9999px',
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#f7fafc' }],
    'boxSizing': 'border-box',
    'verticalAlign': 'text-bottom'
  },
  'answer-card-component header name': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontWeight': '400',
    'marginLeft': [{ 'unit': 'px', 'value': 15 }]
  },
  'answer-card-component header time': {
    'display': 'flex',
    'flex': '1',
    'justifyContent': 'flex-end',
    'alignItems': 'center',
    'color': '#9fadc7'
  },
  'answer-card-component header time svg': {
    'verticalAlign': 'text-bottom',
    'fill': '#9fadc7',
    'width': [{ 'unit': 'px', 'value': 20 }],
    'height': [{ 'unit': 'px', 'value': 20 }]
  },
  'answer-card-component wrap': {
    'outline': 'none',
    'cursor': 'pointer'
  },
  'answer-card-component nav': {
    'paddingTop': [{ 'unit': 'px', 'value': 20 }],
    'color': '#9fadc7'
  },
  'answer-card-component nav a': {
    'fontSize': [{ 'unit': 'px', 'value': 15 }],
    'lineHeight': [{ 'unit': 'px', 'value': 15 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'textDecoration': 'none',
    'color': '#9fadc7'
  },
  'answer-card-component nav svg': {
    'width': [{ 'unit': 'px', 'value': 16 }],
    'height': [{ 'unit': 'px', 'value': 16 }],
    'marginRight': [{ 'unit': 'px', 'value': 8 }],
    'verticalAlign': 'text-bottom',
    'fill': '#9fadc7'
  }
});
