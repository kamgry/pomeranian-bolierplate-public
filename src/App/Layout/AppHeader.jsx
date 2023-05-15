import React from 'react';

import './styles/header.css';
import { HeaderMenu } from '../Components/HeaderMenu/HeaderMenu';

export function AppHeader() {
  return (
    <header>
      <div>
        <div className="header-title">Tytuł nagłówka</div>
      </div>
      <HeaderMenu />
    </header>
  );
}
