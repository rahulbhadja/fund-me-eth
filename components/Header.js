import React from 'react';
import { Menu, Button, Icon } from 'semantic-ui-react';

const Header = () => {
  return (
    <Menu style={{ marginTop: '10px' }}>
      <Menu.Item>FundETH</Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item>Campaigns</Menu.Item>
        <Menu.Item>
          {' '}
          <Icon name='add ' />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default Header;
