import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'open-article-page': {
    'width': [{ 'unit': 'px', 'value': 694 }],
    'padding': [{ 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 20 }],
    'marginBottom': [{ 'unit': 'px', 'value': 60 }],
    'background': '#fff',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e7eaf1' }],
    'boxSizing': 'border-box',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': 'rgba(0, 37, 55, 0.05)' }]
  },
  'open-article-page header': {
    'display': 'flex',
    'alignItems': 'center'
  },
  'open-article-page header img': {
    'width': [{ 'unit': 'px', 'value': 30 }],
    'height': [{ 'unit': 'px', 'value': 30 }],
    'borderRadius': '9999px',
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#f7fafc' }],
    'boxSizing': 'border-box',
    'verticalAlign': 'text-bottom'
  },
  'open-article-page header name': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontWeight': '400',
    'marginLeft': [{ 'unit': 'px', 'value': 15 }]
  },
  'open-article-page header time': {
    'display': 'flex',
    'flex': '1',
    'justifyContent': 'flex-end',
    'alignItems': 'center',
    'color': '#9fadc7'
  },
  'open-article-page header time svg': {
    'verticalAlign': 'text-bottom',
    'fill': '#9fadc7',
    'width': [{ 'unit': 'px', 'value': 20 }],
    'height': [{ 'unit': 'px', 'value': 20 }]
  },
  'open-article-page nav': {
    'paddingTop': [{ 'unit': 'px', 'value': 20 }],
    'color': '#9fadc7'
  },
  'open-article-page nav a': {
    'fontSize': [{ 'unit': 'px', 'value': 15 }],
    'lineHeight': [{ 'unit': 'px', 'value': 15 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'textDecoration': 'none',
    'color': '#9fadc7'
  },
  'open-article-page nav svg': {
    'width': [{ 'unit': 'px', 'value': 16 }],
    'height': [{ 'unit': 'px', 'value': 16 }],
    'marginRight': [{ 'unit': 'px', 'value': 8 }],
    'verticalAlign': 'text-bottom',
    'fill': '#9fadc7'
  },
  'open-article-page content': {
    'paddingTop': [{ 'unit': 'px', 'value': 40 }]
  }
});
