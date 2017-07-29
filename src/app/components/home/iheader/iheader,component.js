import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'iheader_wrap': {
    'height': [{ 'unit': 'px', 'value': 55 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'display': 'block'
  },
  'header': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 53 }],
    'background': '#fff',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgba(30, 35, 42, 0.06)' }],
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0, 34, 77, 0.05)' }],
    'backgroundClip': 'content-box',
    'minWidth': [{ 'unit': 'px', 'value': 1032 }],
    'position': 'fixed',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'zIndex': '2'
  },
  'header ih_wrap': {
    'width': [{ 'unit': 'px', 'value': 1000 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'position': 'relative'
  },
  'header ih_wrap popover_wrap': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 60 }],
    'right': [{ 'unit': 'px', 'value': -60 }]
  },
  'header ih_wrap popover-content-me': {
    'width': [{ 'unit': 'px', 'value': 118 }],
    'background': '#fff',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e7eaf1' }],
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'string', 'value': 'rgba(0, 34, 77, 0.1)' }],
    'borderRadius': '4px',
    'overflow': 'hidden'
  },
  'header ih_wrap popover-content-me popover-arrow': {
    'display': 'block',
    'borderTopWidth': [{ 'unit': 'px', 'value': 0 }],
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 52 }],
    'marginTop': [{ 'unit': 'px', 'value': -8 }],
    'borderBottomColor': '#e7eaf1',
    'width': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'px', 'value': 0 }]
  },
  'header ih_wrap popover-content-me popover-arrow:after': {
    'content': '''',
    'marginTop': [{ 'unit': 'px', 'value': 1 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'position': 'absolute',
    'border': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }],
    'display': 'block',
    'borderTopWidth': [{ 'unit': 'px', 'value': 0 }],
    'borderBottomColor': '#fff'
  },
  'header ih_wrap popover-content-me Menu': {
    'padding': [{ 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'header ih_wrap popover-content-me Menu a': {
    'display': 'block',
    'height': [{ 'unit': 'px', 'value': 36 }],
    'transition': 'all .5s',
    'lineHeight': [{ 'unit': 'px', 'value': 36 }],
    'color': '#262626',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }],
    'textAlign': 'left',
    'boxSizing': 'border-box',
    'textDecoration': 'none',
    'cursor': 'pointer',
    'fontSize': [{ 'unit': 'px', 'value': 12 }]
  },
  'header ih_wrap popover-content-me Menu a svg': {
    'width': [{ 'unit': 'px', 'value': 16 }],
    'height': [{ 'unit': 'px', 'value': 16 }],
    'verticalAlign': 'text-bottom',
    'marginRight': [{ 'unit': 'px', 'value': 12 }],
    'fill': '#9fadc7'
  },
  'header ih_wrap popover-content-me Menu a:hover': {
    'background': '#ebf3fb'
  },
  'header AppHeader-inner': {
    'display': 'flex',
    'width': [{ 'unit': 'px', 'value': 1000 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'height': [{ 'unit': 'px', 'value': 52 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 16 }],
    'background': '#fff',
    'alignItems': 'center',
    'transition': 'transform .3s, -webkit-transform .3s'
  },
  'header AppHeader-inner ch': {
    'color': '#0f88eb',
    'marginRight': [{ 'unit': 'px', 'value': 10 }]
  },
  'header AppHeader-inner nav': {
    'color': '#333'
  },
  'header AppHeader-inner nav a': {
    'fontSize': [{ 'unit': 'px', 'value': 15 }],
    'lineHeight': [{ 'unit': 'px', 'value': 15 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }],
    'textDecoration': 'none',
    'color': '#8590a6'
  },
  'header AppHeader-inner nav active': {
    'color': '#0f88eb'
  },
  'header AppHeader-inner user-data': {
    'display': 'flex',
    'flex': '1',
    'justifyContent': 'flex-end',
    'alignItems': 'center'
  },
  'header AppHeader-inner user-data svg': {
    'verticalAlign': 'text-bottom',
    'marginRight': [{ 'unit': 'px', 'value': 40 }],
    'fill': '#9fadc7',
    'width': [{ 'unit': 'px', 'value': 20 }],
    'height': [{ 'unit': 'px', 'value': 20 }]
  },
  'header AppHeader-inner userimg': {
    'width': [{ 'unit': 'px', 'value': 34 }],
    'height': [{ 'unit': 'px', 'value': 34 }],
    'display': 'block',
    'cursor': 'pointer'
  }
});
