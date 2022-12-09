import styled from "styled-components";

const StyledHeader = styled.header`
    width: 100%;
    position: fixed;
    background-color: #E3EBFF;
    z-index: 1000;
    box-shadow: 0px 0px 20px #000;
    .header-content {
        width: 100%;
        max-width: 1300px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 0;
        @media (max-width: 805px) {
            padding: 26px 0;
        }
    }
    .header-logo {
        font-weight: 700;
        font-size: 20px;
        color: rgb(0, 0, 50);
        position: relative;
        opacity: 0.8;
        margin-left: 20px;
        &::after {
            content: '';
            width: 100%;
            position: absolute;
            height: 2px;
            left: 0;
            top: 20px;
            background: linear-gradient( 90deg, rgb(0, 0, 50), #E3EBFF );
        }
        &::before {
            content: '';
            width: 50%;
            position: absolute;
            height: 2px;
            left: 0;
            top: 25px;
            background: linear-gradient( 90deg, rgb(0, 0, 50), #E3EBFF );
        }
    }
    .header-nav {
        display: flex;
        gap: 50px;
        @media (max-width: 805px) {
            display: none;
        }
        .nav-link {
            font-weight: 500;
            font-size: 15px;
            text-transform: uppercase;
            position: relative;
            padding: 10px 15px;
            color: rgb(0, 0, 50);
            transition: opacity .3s ease-in-out;
            &:hover {
                opacity: 1;
            }
            &::before {
                width: 0%;
                content: '';
                position: absolute;
                height: 2px;
                background-color: rgb(0, 0, 50);
                left: 0;
                bottom: -10px;
                transition: width 0.3s ease-in-out;
            }
            &:hover::before{
                width: 100%;
            }
        }
    }
    .change-lg {
        display: flex;
        align-items: center;
        font-weight: 500;
        padding: 10px 30px;
        transition: opacity .2s ease-in-out;
        &:hover {
            opacity: 1;
        }
        svg {
            margin-left: 8px;
        }
    }
    .lng-change {
        position: relative;
        @media (max-width: 805px) {
            display: none;
        }
        
    }
    .lng-change:hover .language-changing {
        opacity: 1;
    }
    .lng-change:hover .change-lg{
        opacity: 1;
    }
    .language-changing {
        position: absolute;
        opacity: 0;
        transition: opacity .2s ease-in-out;
        display: block;
        gap: 20px;
        background-color: #E3EBFF;
        box-shadow: 0px 30px 30px rgba(0, 0, 0, 0.1);
        button {
            background-color: transparent;
            padding: 5px 15px;
            display: flex;
            align-items: center;
            border: none;
            cursor: pointer;
            opacity: 0.4;
            margin: 20px 20px;
            font-weight: 500;
            transition: opacity .2s ease-in-out;
            &:hover {
                opacity: 1;
            }
        }
    }
    #menu__toggle {
  opacity: 0;
}

#menu__toggle:checked ~ .menu__btn > span {
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
}

#menu__toggle:checked ~ .menu__btn > span::before {
  top: 0;
  -webkit-transform: rotate(0);
          transform: rotate(0);
}

#menu__toggle:checked ~ .menu__btn > span::after {
  top: 0;
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

#menu__toggle:checked ~ .menu__box {
  visibility: visible;
  right: 0;
}

.menu__btn {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  position: fixed;
  top: 20px;
  right: 20px;
  width: 26px;
  height: 26px;
  cursor: pointer;
  z-index: 1;
  @media (max-width: 805px) {
    top: 25px;
    right: 25px;
  }
}

.menu__btn > span,
.menu__btn > span::before,
.menu__btn > span::after {
  display: block;
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: rgb(0, 0, 50);
  -webkit-transition-duration: 0.25s;
          transition-duration: 0.25s;
}

.menu__btn > span::before {
  content: "";
  top: -8px;
}

.menu__btn > span::after {
  content: "";
  top: 8px;
}

.burger-link {
  margin: 20px auto;
}

.menu__box {
  display: block;
  position: fixed;
  visibility: hidden;
  top: 0;
  right: -100%;
  width: 300px;
  height: 100%;
  margin: 0;
  padding: 80px 0;
  list-style: none;
  background-color: #E3EBFF;
  -webkit-box-shadow: 1px 0px 6px rgba(0, 0, 0, 0.2);
          box-shadow: 1px 0px 6px rgba(0, 0, 0, 0.2);
  -webkit-transition-duration: 0.25s;
          transition-duration: 0.25s;
}

.menu__item {
  display: block;
  padding: 12px 24px;
  color: rgb(0, 0, 50);
  border-bottom: 1px solid rgb(0, 0, 50);
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  -webkit-transition-duration: 0.25s;
          transition-duration: 0.25s;
}

.menu__item:hover {
  
}
.hamburger-menu {
    display: none;
    @media (max-width:805px) {
        display: block;
    }
}
.lg-link:not(:last-child) {
    margin-top: 110px;
    cursor: pointer;
}
`
export default StyledHeader;