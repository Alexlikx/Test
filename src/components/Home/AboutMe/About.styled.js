import styled from "styled-components";

const StyledAbout = styled.article`
    position: relative;
    min-height: 94vh;
    background: linear-gradient(0deg, rgb(0, 0,20), rgb(0, 0, 50));
    display: flex;
    justify-content: center;
    align-items: center;
    .svg-icon-about {
        width: 45px;
        height: 45px;
        fill: #202785;
        margin-bottom: 30px;
    }
    .svg-icon-about2 {
        width: 15px;
        height: 15px;
        fill: #E3EBFF;
        margin-bottom: 10px;
    }
    .svg-icon-about3 {
        width: 15px;
        height: 15px;
        fill: #E3EBFF;
        transform: rotate(180deg);
        margin-bottom: 10px;
    }
    h2 {
        color: #E3EBFF;
        font-weight: 400;
        font-size: 22px;
        max-width: 500px;

    }
    .about-author {
        color: #E3EBFF;
        font-weight: 700;
        margin-top: 50px;
        font-size: 18px;
    }
    .author-spec {
        font-size: 15px;
        color: #E3EBFF;
        opacity: 0.4;
        margin-top: 8px;
    }
    .about-content {
        display: flex;
        width: 100%;
        max-width: 1000px;
        justify-content: end;
        @media (max-width: 930px) {
            flex-direction: column-reverse;
        }
        .about-info {
            position: absolute;
            z-index: 1;
            left: 25%;
            vertical-align: middle;
            padding: 20px;
            transform: translateY(-50%);
            @media (max-width: 1300px) {
                left: 10%;
            }
            @media (max-width: 930px) {
                position: static;
                margin: 0 auto;
                transform: translate(0);
                margin-bottom: 30px;
            }
        }
        .about-img {
            background-color: #ccc;
            height: 550px;
            width: 550px;
            background-image: url("https://images.ctfassets.net/hrltx12pl8hq/5KiKmVEsCQPMNrbOE6w0Ot/341c573752bf35cb969e21fcd279d3f9/hero-img_copy.jpg?fit=fill&w=800&h=300");
            background-size: cover;
            background-repeat: no-repeat;
            margin-right: 30px;
            align-self: center;
            @media (max-width: 930px) {
                width: 100%;
                max-width: 600px;
                margin-bottom: 30px;
                margin: 0 auto;
            }
        }
    }
`;

export default StyledAbout;