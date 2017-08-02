import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'send-que-component send-wrap': {
    'position': 'fixed',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'background': 'rgba(0, 0, 0, 0.47)',
    'display': 'flex',
    'justifyContent': 'center',
    'flexDirection': 'column',
    'WebkitBoxPack': 'center',
    'WebkitBoxOrient': 'vertical',
    'WebkitBoxDirection': 'normal',
    'zIndex': '-2'
  },
  'send-que-component send-wrap Modal-inner': {
    'width': [{ 'unit': 'px', 'value': 595 }],
    'display': 'flex',
    'position': 'relative',
    'background': '#fff',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'justifyContent': 'center',
    'flexDirection': 'column',
    'WebkitBoxPack': 'center',
    'WebkitBoxOrient': 'vertical',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0, 34, 77, 0.5)' }]
  },
  'send-que-component send-wrap Modal-inner h3': {
    'textAlign': 'center'
  },
  'send-que-component send-wrap Modal-inner content': {
    'padding': [{ 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 24 }],
    'background': '#fff'
  },
  'send-que-component send-wrap Modal-inner content tip': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#b3b3b3'
  },
  'send-que-component send-wrap Modal-inner content imgs': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'display': 'flex',
    'marginBottom': [{ 'unit': 'px', 'value': 30 }]
  },
  'send-que-component send-wrap Modal-inner content imgs file': {
    'position': 'relative',
    'cursor': 'pointer',
    'display': 'inline-block',
    'overflow': 'hidden',
    'textDecoration': 'none',
    'textIndent': '0',
    'lineHeight': [{ 'unit': 'px', 'value': 20 }],
    'backgroundSize': 'cover !important'
  },
  'send-que-component send-wrap Modal-inner content imgs file input': {
    'position': 'absolute',
    'fontSize': [{ 'unit': 'px', 'value': 100 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'opacity': '0'
  },
  'send-que-component send-wrap Modal-inner content imgs file:hover': {
    'textDecoration': 'none'
  },
  'send-que-component send-wrap Modal-inner content imgs img-w': {
    'width': [{ 'unit': 'px', 'value': 80 }],
    'height': [{ 'unit': 'px', 'value': 80 }],
    'marginRight': [{ 'unit': 'px', 'value': 6 }],
    'backgroundSize': 'cover !important'
  },
  'send-que-component send-wrap Modal-inner content input': {
    'outline': 'none',
    'padding': [{ 'unit': '%V', 'value': 0.02 }, { 'unit': '%H', 'value': 0.02 }, { 'unit': '%V', 'value': 0.02 }, { 'unit': '%H', 'value': 0.02 }],
    'marginBottom': [{ 'unit': 'px', 'value': 12 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e7eaf1' }],
    'width': [{ 'unit': '%H', 'value': 0.96 }],
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'lineHeight': [{ 'unit': 'px', 'value': 25 }],
    'height': [{ 'unit': 'px', 'value': 25 }]
  },
  'send-que-component send-wrap Modal-inner content textarea': {
    'outline': 'none',
    'resize': 'none',
    'padding': [{ 'unit': '%V', 'value': 0.02 }, { 'unit': '%H', 'value': 0.02 }, { 'unit': '%V', 'value': 0.02 }, { 'unit': '%H', 'value': 0.02 }],
    'marginBottom': [{ 'unit': 'px', 'value': 12 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e7eaf1' }],
    'width': [{ 'unit': '%H', 'value': 0.96 }],
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'lineHeight': [{ 'unit': 'px', 'value': 28 }],
    'height': [{ 'unit': 'px', 'value': 120 }]
  },
  'send-que-component send-wrap Modal-inner content send': {
    'transition': 'all .5s',
    'width': [{ 'unit': 'px', 'value': 198 }],
    'height': [{ 'unit': 'px', 'value': 32 }],
    'cursor': 'pointer',
    'background': '#0d79d1',
    'color': '#fff',
    'borderRadius': '2px',
    'textAlign': 'center',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'lineHeight': [{ 'unit': 'px', 'value': 32 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }]
  },
  'send-que-component send-wrap Modal-inner content send:hover': {
    'background': '#5da9e6'
  },
  'send-que-component send-wrap Modal-inner Modal-closeButton': {
    'transition': 'all .5s',
    'outline': 'none',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 8 }],
    'right': [{ 'unit': 'px', 'value': -60 }],
    'padding': [{ 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 12 }],
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'lineHeight': [{ 'unit': 'string', 'value': 'inherit' }],
    'background': 'transparent',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'borderRadius': '0',
    'cursor': 'pointer'
  },
  'send-que-component send-wrap Modal-inner Modal-closeButton svg': {
    'fill': '#fff'
  },
  'send-que-component send-wrap Modal-inner Modal-closeButton:hover': {
    'transform': 'rotateZ(180deg)'
  }
});
