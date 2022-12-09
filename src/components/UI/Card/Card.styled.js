import styled from "styled-components";

const CardStyled = styled.div`
    border-radius: 10px;
    .card-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        border-radius: 10px;
        @media (max-width: 768px) {
            justify-content: start;
        }
        .card-info {
            padding: 12px;
        }
        .card-img {
            background: linear-gradient(-45deg, #BFD1FF, #E5EDFF);
            max-width: 80px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 10px;
            height: 80px;
            img {
                width: 40px;
                height: 40px;                
            }
        }
        h3 {
            margin-left: 20px;
            font-size: 16px;
            line-height: 18px;
            margin-top: 5px;
            color: #49577A;
        }
    }
    
    &:hover {
        .card-content {
            transform: translateY(-10px);
            box-shadow: 0px 5px 10px #D8E3FD;
        }
    }
`;

export default CardStyled;