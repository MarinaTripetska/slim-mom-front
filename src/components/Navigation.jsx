import styled from 'styled-components';

const NavStyle = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #264061;
    @media (min-width: 1200px) {
    display: none;
  }
`
const NavPosition = styled.ul`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 2;
  letter-spacing: 0.04em;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: uppercase;
  padding-top: 60px;
  color: #ffffff;
  @media (min-width: 767px) {
    font-size: 24px;
    line-height: 2.1;
      padding-top: 100px;
  }
`
const NavLinkStyle = styled.li`
      :hover{
    color: #9B9FAA;
  }
`

const Navigation = () => {
    return (
        <NavStyle>
            <NavPosition>
                <NavLinkStyle><a href="../diary">diary</a></NavLinkStyle>
                <NavLinkStyle><a href="../calculator">calculator</a></NavLinkStyle>
            </NavPosition>
        </NavStyle>
    );
}

export default Navigation;