import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';

const Header = () => {
    const [showMobileMenu, setShowMobileMenu] = React.useState(false);

    // For our mobile hamburger menu, we'll want to use a button
    // with an onClick handler, something like this:
    //
    // <button onClick={() => setShowMobileMenu(true)}>

    return (
        <header>
            <SuperHeader />
            <MainHeader>
                <LogoWrapper>
                    <Logo />
                </LogoWrapper>
                <DesktopNav>
                    <NavLink href="/sale">Sale</NavLink>
                    <NavLink href="/new">New&nbsp;Releases</NavLink>
                    <NavLink href="/men">Men</NavLink>
                    <NavLink href="/women">Women</NavLink>
                    <NavLink href="/kids">Kids</NavLink>
                    <NavLink href="/collections">Collections</NavLink>
                </DesktopNav>
                <MobileActions>
                    <UnstyledButton>
                        <Icon id="shopping-bag" />
                    </UnstyledButton>
                    <UnstyledButton>
                        <Icon id="search" />
                    </UnstyledButton>
                    <UnstyledButton onClick={() => setShowMobileMenu(true)}>
                        <Icon id="menu" />
                    </UnstyledButton>
                </MobileActions>
                <Filler />
            </MainHeader>

            <MobileMenu
                isOpen={showMobileMenu}
                onDismiss={() => setShowMobileMenu(false)}
            />
        </header>
    );
};

const MainHeader = styled.div`
    display: flex;
    align-items: baseline;
    padding: 18px 32px;
    height: 72px;
    border-bottom: 1px solid ${COLORS.gray[300]};

    overflow-x: auto;

    @media ${(p) => p.theme.queries.tabletAndSmaller} {
        border-top: 4px solid ${COLORS.gray[900]};

        justify-content: space-between; // add space between logo wrapper and mobile actions
        align-items: center;
    }

    @media ${(p) => p.theme.queries.phoneAndSmaller} {
        padding-left: 16px;
        padding-right: 16px;
    }
`;

const DesktopNav = styled.nav`
    display: flex;
    gap: 2vw; /* eh */
    margin: 0px 48px;

    @media ${(p) => p.theme.queries.tabletAndSmaller} {
        display: none;
    }
`;

const LogoWrapper = styled.div`
    flex: 1;

    @media ${(p) => p.theme.queries.tabletAndSmaller} {
        flex: revert;
    }
`;

const Filler = styled.div`
    flex: 1;

    @media ${(p) => p.theme.queries.tabletAndSmaller} {
        display: none;
    }
`;

const NavLink = styled.a`
    font-size: 1.125rem;
    text-transform: uppercase;
    text-decoration: none;
    color: ${COLORS.gray[900]};
    font-weight: ${WEIGHTS.medium};

    white-space: nowrap;

    &:first-of-type {
        color: ${COLORS.secondary};
    }
`;

const MobileActions = styled.div`
    display: none;

    @media ${(p) => p.theme.queries.tabletAndSmaller} {
        display: flex;
        gap: 32px;
    }

    @media ${(p) => p.theme.queries.phoneAndSmaller} {
        gap: 16px;
    }
`;

export default Header;
