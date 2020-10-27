import React from 'react';

import { BottomText, HeaderWrapper, TopText } from './Header.styles';

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <TopText>hey</TopText>
      <BottomText>Cinema</BottomText>
    </HeaderWrapper>
  );
};

export default Header;
