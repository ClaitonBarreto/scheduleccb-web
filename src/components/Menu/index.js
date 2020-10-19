import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';


import {Container} from './styles'


export default function SimpleListMenu({actions}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const options = [
    // {label: 'Editar', action: () => alert('editar')},
    {label: 'Confirmar', action: actions.confirm},
    {label: 'Deletar', action: actions.delete},
  ];

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container>
      <List component="nav" aria-label="Device settings">
        <ListItem
          button
          aria-haspopup="true"
          aria-controls="lock-menu"
          aria-label="when dev ice is locked"
          onClick={handleClickListItem}
        >
            <MoreVertIcon />
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option.label}
            onClick={(event) => {
              option.action()
              handleClose()
            }}
          >
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </Container>
  );
}
