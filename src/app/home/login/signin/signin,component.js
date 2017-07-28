import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'group-inputs': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'background': '#fff',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#eee' }],
    'borderRadius': '6px',
    'marginBottom': [{ 'unit': 'px', 'value': 18 }],
    'overflow': 'hidden'
  },
  'group-inputs input-wrapper': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#eee' }]
  },
  'group-inputs input-wrapper input': {
    'display': 'block',
    'width': [{ 'unit': '%H', 'value': NaN }],
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'borderRadius': '0',
    'padding': [{ 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.8 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.8 }],
    'background': '#fff',
    'lineHeight': [{ 'unit': 'px', 'value': 19 }],
    'color': '#555',
    'outline': 'none'
  },
  'group-inputs input-wrapper input:focus': {
    'outline': 'none'
  },
  'btm': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 41 }],
    'background': '#0f88eb',
    'lineHeight': [{ 'unit': 'px', 'value': 41 }],
    'color': '#fff',
    'textAlign': 'center',
    'borderRadius': '4px',
    'cursor': 'pointer'
  },
  'agreement-tip': {
    'fontSize': [{ 'unit': 'px', 'value': 13 }],
    'color': '#999',
    'marginTop': [{ 'unit': 'px', 'value': 21 }],
    'textAlign': 'right'
  }
});
