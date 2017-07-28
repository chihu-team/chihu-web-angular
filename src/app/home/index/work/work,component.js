import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'work-page': {
    'width': [{ 'unit': 'px', 'value': 694 }],
    'padding': [{ 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 20 }],
    'marginBottom': [{ 'unit': 'px', 'value': 60 }],
    'background': '#fff',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e7eaf1' }],
    'boxSizing': 'border-box',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': 'rgba(0, 37, 55, 0.05)' }]
  },
  'work-page banner': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 360 }],
    'marginBottom': [{ 'unit': 'px', 'value': 16 }],
    'backgroundPosition': 'center center !important',
    'backgroundRepeat': 'no-repeat !important',
    'backgroundSize': 'cover !important'
  },
  'work-page user-basic': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'display': 'flex',
    'display': '-webkit-flex',
    'alignItems': 'center',
    'color': '#666'
  },
  'work-page user-basic img': {
    'verticalAlign': 'text-bottom',
    'borderRadius': '99999px',
    'border': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#f1f1f1' }],
    'marginRight': [{ 'unit': 'px', 'value': 10 }],
    'boxSizing': 'border-box',
    'display': 'block',
    'width': [{ 'unit': 'px', 'value': 40 }],
    'height': [{ 'unit': 'px', 'value': 40 }]
  },
  'work-page user-basic time': {
    'alignItems': 'center',
    'display': 'flex',
    'marginLeft': [{ 'unit': 'px', 'value': 12 }],
    'fontSize': [{ 'unit': 'px', 'value': 13 }],
    'color': '#969696'
  },
  'work-page user-basic time svg': {
    'fill': '#969696'
  },
  'work-page title': {
    'color': '#666'
  },
  'work-page title svg': {
    'fill': '#666',
    'marginRight': [{ 'unit': 'px', 'value': 12 }]
  },
  'work-page dec': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'lineHeight': [{ 'unit': 'px', 'value': 26 }],
    'color': '#9fadc7'
  },
  'work-page tips': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'work-page tips svg': {
    'marginRight': [{ 'unit': 'px', 'value': 12 }]
  },
  'work-page tips tips-cont': {
    'width': [{ 'unit': '%H', 'value': 0.95 }],
    'padding': [{ 'unit': '%V', 'value': 0.025 }, { 'unit': '%H', 'value': 0.025 }, { 'unit': '%V', 'value': 0.025 }, { 'unit': '%H', 'value': 0.025 }],
    'background': '#f5f5f5',
    'color': '#666'
  }
});
