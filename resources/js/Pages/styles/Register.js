import styled from 'vue-styled-components';

export const RegisterContainer = styled.section`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    >header{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        padding: 10px 20px;
        img{
            width: 100px;
            margin-right: 20px;
        }
        router-link{
            font-family: Inter, sans-serif;
            color: #303030;
            font-size: 14px;
            cursor: pointer;
            :hover{
                text-decoration: underline;
            }
        }
    }
    >div{
        width: 100%;
        margin-bottom: 90px;
    }
    form{
        width: 100%;
        max-width: 400px;
        margin: 0 auto;
        div{
            margin: 15px auto;
            label{
                font-family: Inter, sans-serif;
                font-size: 14px;
            }
            input{
                width: 100%;
                margin-top: 4px;
                padding: 8px 12px;
                border: 2px solid transparent;
                outline: none;
                font-family: Inter, sans-serif;
                transition: all 0.3s;
                font-size: 14px;
                border-radius: 5px;
                border: 2px solid #EAEAEA;
                :focus{
                    border-color: #FA4D56;
                }
                :-webkit-autofill {
                    -webkit-text-fill-color: #303030 !important;
                    -webkit-box-shadow: 0 0 0 30px white inset;
                }
            }
        }
        footer{
            button:last-child{
                margin-top: 10px;
                background: white;
                color: #FC646C;
                border-color: #FC646C;
                margin-top: 20px!important;
            }
        }
        button{
            width: 100%;
            max-width: 200px;
            margin: 0px auto;
            margin-top: 60px!important;
            display: block;
            border: 2px solid transparent;
            padding: 10px;
            cursor: pointer;
            border-radius: 5px;
            background: #FC646C;
            outline: none;
            cursor: pointer;
            font-family: Inter, sans-serif;
            color: #F5F5F5;
            text-transform: uppercase;
            font-size: 16px;
            transition: all 0.3s;
            :hover{
                background: #FA4D56;
            }
        }
    }
`;
