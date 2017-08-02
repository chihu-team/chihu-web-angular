import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'index-home-page TopstoryHeader': {
    'display': 'flex',
    'lineHeight': [{ 'unit': 'px', 'value': 58 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }],
    'background': '#fff',
    'marginBottom': [{ 'unit': 'px', 'value': 10 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e7eaf1' }],
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': 'rgba(0, 37, 55, 0.05)' }],
    'borderRadius': '2px',
    'boxSizing': 'border-box'
  },
  'index-home-page TopstoryHeader a': {
    'textDecoration': 'none',
    'marginRight': [{ 'unit': 'px', 'value': 40 }],
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'display': 'inline-block'
  },
  'index-home-page TopstoryHeader TopstoryHeader-nav a': {
    'cursor': 'pointer',
    'outline': 'none'
  },
  'index-home-page TopstoryHeader TopstoryHeader-nav svg': {
    'width': [{ 'unit': 'px', 'value': 16 }],
    'height': [{ 'unit': 'px', 'value': 16 }],
    'marginRight': [{ 'unit': 'px', 'value': 8 }],
    'verticalAlign': 'text-bottom'
  }
});
