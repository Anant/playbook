import React from 'react';
import styled from '@emotion/styled';
import {Logo, colors} from 'gatsby-theme-apollo-core';

const Container = styled.footer({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: 32,
  fontSize: 14,
  color: colors.text1,
  borderTop: `1px solid ${colors.divider}`
});

const Colophon = styled.span({
  marginTop: 8,
  marginBottom: 20,
  a: {
    color: colors.primary,
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline'
    }
  }
});

const FooterNav = styled.nav({
  textAlign: 'center',
  a: {
    margin: '0 12px',
    color: 'inherit',
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline'
    }
  }
});

const FooterNavLinks = styled.div({
  marginTop: 4
});

const Divider = styled.hr({
  width: '100%',
  maxWidth: 400
});

export default function Footer() {
  return (
    <Container>
      <Logo />
      <Colophon>
        Written by <a href="https://twitter.com/xingh">Rahul Singh</a> 
      </Colophon>
      <Divider />
      <FooterNav>
        <a href="https://github.com/anant/playbook">
          View source code
        </a>
        <FooterNavLinks>
          <a href="https://anant.us/">anant.us</a> |{' '}
          <a href="https://cassandra.link">cassandra.link</a> |{' '}
          <a href="https://cassandra.tools">cassandra.tools</a>
        </FooterNavLinks>
      </FooterNav>
    </Container>
  );
}
