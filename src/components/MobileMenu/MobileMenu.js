import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
    return (
        <ModalOverlay isOpen={isOpen} onDismiss={onDismiss}>
            <ModalContent>
                <DismissButtonContainer>
                    <UnstyledButton onClick={onDismiss}>
                        <Icon id="close" />
                        <VisuallyHidden>Dismiss menu</VisuallyHidden>
                    </UnstyledButton>
                </DismissButtonContainer>
                <Nav>
                    <a href="/sale">Sale</a>
                    <a href="/new">New&nbsp;Releases</a>
                    <a href="/men">Men</a>
                    <a href="/women">Women</a>
                    <a href="/kids">Kids</a>
                    <a href="/collections">Collections</a>
                </Nav>
                <Footer>
                    <a href="/terms">Terms and Conditions</a>
                    <a href="/privacy">Privacy Policy</a>
                    <a href="/contact">Contact Us</a>
                </Footer>
            </ModalContent>
        </ModalOverlay>
    );
};

const ModalOverlay = styled(DialogOverlay)`
    position: fixed;
    top: 0;
    height: 100%;
    width: 100%;
    background: hsla(220, 5%, 40%, 0.8);
`;

const ModalContent = styled(DialogContent)`
    height: 100%;
    width: 300px;

    position: absolute;
    top: 0;
    right: 0;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    background: ${(p) => p.theme.colors.white};
    padding: 32px;
`;

const DismissButtonContainer = styled.div`
    flex: 1;
    align-self: flex-end;
`;

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 22px;

    text-transform: uppercase;
    font-weight: 600;
    font-size: 18px;

    & a {
        text-decoration: none;
        color: ${(p) => p.theme.colors.gray[900]};
    }

    & a:hover {
        color: ${(p) => p.theme.colors.secondary};
    }
`;

const Footer = styled.footer`
    flex: 1;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 14px;

    font-size: 14px;
    font-weight: 500;

    & a {
        text-decoration: none;
        color: ${(p) => p.theme.colors.gray[700]};
    }
`;

export default MobileMenu;
