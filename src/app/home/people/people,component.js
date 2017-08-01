import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'people-page': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'overflow': 'auto',
    'background': '#f7fafc'
  },
  'people-page main': {
    'width': [{ 'unit': 'px', 'value': 1000 }],
    'display': 'flex',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 16 }],
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'people-page main card': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'overflow': 'hidden',
    'position': 'relative',
    'height': [{ 'unit': 'px', 'value': 297 }],
    'background': '#fff',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e7eaf1' }],
    'borderRadius': '2px',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': 'rgba(0, 37, 55, 0.05)' }],
    'boxSizing': 'border-box'
  },
  'people-page main card colorBlock': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 132 }],
    'background': '#96a1a9'
  },
  'people-page main card ProfileHeader-wrapper': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'position': 'relative',
    'boxSizing': 'border-box'
  },
  'people-page main card ProfileHeader-wrapper ProfileHeader-main': {
    'position': 'relative',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 20 }]
  },
  'people-page main card ProfileHeader-wrapper ProfileHeader-main ProfileHeader-avatar': {
    'border': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#fff' }],
    'background': '#f5f5f5',
    'borderRadius': '8px',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': -50 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'boxSizing': 'border-box',
    'overflow': 'hidden'
  },
  'people-page main card ProfileHeader-wrapper ProfileHeader-main ProfileHeader-content': {
    'marginLeft': [{ 'unit': 'px', 'value': 200 }],
    'color': '#9fadc7',
    'position': 'relative'
  },
  'people-page main card ProfileHeader-wrapper ProfileHeader-main ProfileHeader-content ButtonGroup': {
    'position': 'absolute',
    'bottom': [{ 'unit': 'px', 'value': 10 }],
    'right': [{ 'unit': 'px', 'value': 0 }]
  },
  'people-page main card ProfileHeader-wrapper ProfileHeader-main ProfileHeader-content ButtonGroup buttons': {
    'background': '#0F88E6',
    'color': '#fff',
    'display': 'inline-block',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 16 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'lineHeight': [{ 'unit': 'px', 'value': 32 }],
    'textAlign': 'center',
    'borderRadius': '3px',
    'cursor': 'pointer'
  },
  'people-page main card ProfileHeader-wrapper ProfileHeader-main ProfileHeader-content ButtonGroup buttons svg': {
    'verticalAlign': 'text-bottom',
    'fill': '#fff'
  },
  'people-page main card ProfileHeader-wrapper ProfileHeader-main ProfileHeader-content ButtonGroup chat': {
    'marginLeft': [{ 'unit': 'px', 'value': 15 }],
    'background': 'none',
    'color': '#8590a6',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccd8e1' }],
    'boxSizing': 'border-box'
  },
  'people-page main card ProfileHeader-wrapper ProfileHeader-main ProfileHeader-content ButtonGroup chat svg': {
    'fill': '#8590a6'
  },
  'people-page main card ProfileHeader-wrapper ProfileHeader-main ProfileHeader-content svg': {
    'fill': '#9fadc7'
  },
  'people-page main card ProfileHeader-wrapper ProfileHeader-main ProfileHeader-content basic': {
    'display': 'flex',
    'display': '-webkit-flex'
  },
  'people-page main card ProfileHeader-wrapper ProfileHeader-main ProfileHeader-content basic p': {
    'display': 'flex',
    'marginRight': [{ 'unit': 'px', 'value': 32 }],
    'fontSize': [{ 'unit': 'px', 'value': 15 }]
  },
  'people-page Profile-content-left': {
    'width': [{ 'unit': 'px', 'value': 694 }],
    'display': 'block',
    'borderRadius': '2px',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': 'rgba(0, 37, 55, 0.05)' }],
    'boxSizing': 'border-box'
  },
  'people-page Profile-content-left nav': {
    'background': '#fff',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e7eaf1' }],
    'boxSizing': 'border-box',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'display': 'flex',
    'display': '-webkit-flex'
  },
  'people-page Profile-content-left nav a': {
    'padding': [{ 'unit': 'px', 'value': 14 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 14 }, { 'unit': 'px', 'value': 20 }],
    'boxSizing': 'border-box',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'color': '#2e2e2e'
  },
  'people-page Profile-content-left nav active': {
    'borderBottom': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#0f88eb' }]
  },
  'people-page Profile-content-right': {
    'width': [{ 'unit': 'px', 'value': 296 }],
    'display': 'block',
    'background': '#fff',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e7eaf1' }],
    'borderRadius': '2px',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': 'rgba(0, 37, 55, 0.05)' }],
    'boxSizing': 'border-box',
    'marginLeft': [{ 'unit': 'px', 'value': 10 }],
    'textAlign': 'center',
    'height': [{ 'unit': 'px', 'value': 300 }],
    'color': '#ababab'
  },
  'people-page Profile-content-right img': {
    'display': 'block',
    'width': [{ 'unit': '%H', 'value': 0.5 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'people-page Profile-content-right copy': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'display': 'block',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingTop': [{ 'unit': 'px', 'value': 6 }],
    'color': '#ababab',
    'textAlign': 'center'
  },
  'people-page Profile-content-right copy a': {
    'color': '#ababab'
  },
  'people-page Profile-content-right copy svg': {
    'width': [{ 'unit': 'px', 'value': 14 }],
    'height': [{ 'unit': 'px', 'value': 14 }],
    'fill': '#ababab',
    'marginRight': [{ 'unit': 'px', 'value': 10 }],
    'verticalAlign': 'text-bottom'
  }
});
