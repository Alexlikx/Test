import styled from "styled-components";

const StyledServices = styled.article`
    padding: 30px 25px;
    .services-tabs {
        margin-top: 50px;
        @media (max-width: 456px) {
            margin-top: 10px;
        }
        .tabs-links {
            display: grid;
            border-bottom: 2px solid rgba(0, 0 , 50, 0.3);
            padding-bottom: 10px;
            grid-template-columns: 1fr 1fr 1fr;
            @media (max-width: 456px) {
                grid-template-columns: 1fr;
            }
            div {
                display: flex;
                justify-content: center;
            }
            .tab-link {
                font-size: 18px;
                font-weight: bold;
                cursor: pointer;
                padding: 10px 20px;
                position: relative;
                @media (max-width: 768px) {
                    font-size: 16px;
                }
                @media (max-width: 456px) {
                    font-size: 16px;
                    padding: 15px 10px;
                }
            }
        }
    }
    .active-link {
        position: relative;
        &::after {
            left: 0;
            bottom: -11px;
            position: absolute;
            content: '';
            width: 100%;
            height: 2px;
            background-color: rgb(0, 0, 50);
        } 
        &::before {
            left: 0;
            bottom: -11px;
            position: absolute;
            content: '';
            width: 100%;
            height: 15px;
            background: linear-gradient(0deg, rgba(0, 0, 120, 0.4), transparent);
        } 
        @media (max-width: 456px) {
            &::after {
                bottom: -5px;
            } 
            &::before {
                bottom: -5px;
            } 
        }
    }
    .tabs-content {
        margin-top: 40px;
    }
    .grid-tabs {
        .tab {
            display: none;
        }
        .tab.active {
            display: block;
        }
    }
    .grid-tab {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr;
        gap: 20px;
        div {
            min-width: 32%;
        }
        margin-top: 40px;
        @media (max-width: 970px) {
            grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 768px) {
            grid-template-columns: 1fr;
        }
    }     
    .grid2-tab {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr;
        gap: 40px;
        div {
            min-width: 32%;
        }
        margin-top: 40px;
        @media (max-width: 970px) {
            grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 768px) {
            grid-template-columns: 1fr;
        }
    }      
    .grid-tab-5 {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr;
        gap: 20px;
        div {
            min-width: 20%;
        }
        margin-top: 40px;
        @media (max-width: 768px) {
            grid-template-columns: 1fr;
        }
    }
`;

export default StyledServices;