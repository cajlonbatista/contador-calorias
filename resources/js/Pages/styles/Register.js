import styled from 'vue-styled-components';

import landing from '../assets/landing.svg';

export const RegisterContainer = styled.section`
    width: 100vw;
    height: 100vh;
    background-image: url(${landing});
    background-size: 24%;
    background-repeat: no-repeat;
    background-position-x: 20px;
    background-position-y: 300px;
    background-color: #FFFAF9;
    header{
        width: 100%;
        padding: 10px 20px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        img{
            width: 70px;
            margin-right: 10px;
        }
        h1{
            color: #EF6A74;
            font-family: Poppins, sans-serif;
            font-size: 22px;
            font-weight: 500;
        }
    }
    >div{
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        form{
            margin-top: 200px;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 10px 20px;
            width: 100%;
            max-width: 500px;
            margin: 10px auto;
            >div{
                width: 100%;
                display: flex;
                flex-direction: column;
                margin-top: 10px;
                label{
                    font-family: Inter, sans-serif;
                    font-size: 14px;
                    margin-bottom: 4px;
                }
                >div{
                    display: flex;
                    border-radius: 5px 0px 0px 5px;
                    border: 2px solid #AAA9A9;
                    div{
                        width: 40px;
                        display: grid;
                        place-items: center;
                        border-right: 2px solid #AAA9A9;
                        img{
                            width: 24px;
                        }
                        width: 16%;
                    }
                }
                input[type=text], input[type=number]{
                    border-radius: 5px;
                    border: 2px solid #AAA9A9;
                    padding: 8px 10px;
                }
                input{
                    width: 100%;
                    outline: none;
                    padding: 8px 10px;
                    font-size: 14px;
                    border: 0;
                    font-family: Inter, sans-serif;
                }
            }
            button{
                display: block;
                width: 100%;
                max-width: 300px;
                margin: 40px auto;
                border: 0px;
                padding: 10px 20px;
                font-family: Inter, sans-serif;
                font-size: 14px;
                text-transform: uppercase;
                border-radius: 5px;
                cursor: pointer;
                font-weight: 600;
                color: #FFF;
                background: #EF6A74;
            }
            footer{
                width: 100%;
                button:first-child{
                    margin-top: 40px!important;
                    margin: 0px auto;
                }
                button:last-child{
                    margin: 10px auto;
                    border: 2px solid #EF6A74;
                    background: transparent;
                    color: #EF6A74;
                }
            }
        }
    }
`;
