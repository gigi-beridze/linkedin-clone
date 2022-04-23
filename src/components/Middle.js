import styled from 'styled-components';
import { FcDownload } from 'react-icons/fc';

const Middle = (props) => {
    return(
        <Container>
            <ShareBox>
                <div>
                    <img src="./images/user.svg" alt="" />
                    <button>Start a post</button>
                </div>
                <div>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#70b5f9" className="mercado-match" width="24" height="24" focusable="false">
                            <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
                        </svg>
                        <span>Photo</span>
                    </button>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#7fc15e" className="mercado-match" width="24" height="24" focusable="false">
                            <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
                        </svg>
                        <span>Video</span>
                    </button>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#e7a33e" className="mercado-match" width="24" height="24" focusable="false">
                            <path d="M3 3v15a3 3 0 003 3h12a3 3 0 003-3V3zm13 1.75A1.25 1.25 0 1114.75 6 1.25 1.25 0 0116 4.75zm-8 0A1.25 1.25 0 116.75 6 1.25 1.25 0 018 4.75zM19 18a1 1 0 01-1 1H6a1 1 0 01-1-1V9h14zm-5.9-3a1 1 0 00-1-1H12a3.12 3.12 0 00-1 .2l-1-.2v-3h3.9v1H11v1.15a3.7 3.7 0 011.05-.15 1.89 1.89 0 012 1.78V15a1.92 1.92 0 01-1.84 2H12a1.88 1.88 0 01-2-1.75 1 1 0 010-.25h1a.89.89 0 001 1h.1a.94.94 0 001-.88z"></path>
                        </svg>
                        <span>Event</span>
                    </button>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#fc9295" className="mercado-match" width="24" height="24" focusable="false">
                            <path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"></path>
                        </svg>
                        <span>Write article</span>
                    </button>
                </div>
            </ShareBox>
            <div>
                <Article>
                    <SharedActor>
                        <a>
                            <img src="./images/user.svg" alt=""/>
                            <div>
                                <span>Title</span>
                                <span>Info</span>
                                <span>Date</span>
                            </div>
                        </a>
                        <button>
                            <img src="./images/ellipsis.svg" alt=""/>
                        </button>
                    </SharedActor>
                    <Description>
                        Description
                    </Description>
                    <SharedImg>
                        <a>
                            <img src="./images/shared-image.jpg" alt=""/>
                        </a>
                    </SharedImg>
                    <SocialCounts>
                        <li>
                            <button>
                                <img src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb" alt=""/>
                                <img src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f" alt=""/>
                                <span>69</span>
                            </button>
                        </li>
                        <li><a>2 comments</a></li>
                    </SocialCounts>
                    <SocialActions>
                        <button>
                            <img src="./images/like-icon.svg" alt=""/>
                            <span>Like</span>
                        </button>
                        <button>
                            <img src="./images/comment.svg" alt=""/>
                            <span>Comments</span>
                        </button>
                        <button>
                            <img src="./images/share.svg" alt=""/>
                            <span>Share</span>
                        </button>
                        <button>
                            <img src="./images/send.svg" alt=""/>
                            <span>Send</span>
                        </button>
                    </SocialActions>
                </Article>
                <Article>
                    <SharedActor>
                        <a>
                            <img src="./images/user.svg" alt=""/>
                            <div>
                                <span>Title</span>
                                <span>Info</span>
                                <span>Date</span>
                            </div>
                        </a>
                        <button>
                            <img src="./images/ellipsis.svg" alt=""/>
                        </button>
                    </SharedActor>
                    <Description>
                        Description
                    </Description>
                    <SharedImg>
                        <a>
                            <img src="./images/shared-image.jpg" alt=""/>
                        </a>
                    </SharedImg>
                    <SocialCounts>
                        <li>
                            <button>
                                <img src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb" alt=""/>
                                <img src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f" alt=""/>
                                <span>1954</span>
                            </button>
                        </li>
                        <li><a>no comments</a></li>
                    </SocialCounts>
                    <SocialActions>
                        <button>
                            <img src="./images/like-icon.svg" alt=""/>
                            <span>Like</span>
                        </button>
                        <button>
                            <img src="./images/comment.svg" alt=""/>
                            <span>Comments</span>
                        </button>
                        <button>
                            <img src="./images/share.svg" alt=""/>
                            <span>Share</span>
                        </button>
                        <button>
                            <img src="./images/send.svg" alt=""/>
                            <span>Send</span>
                        </button>
                    </SocialActions>
                </Article>
                <Article>
                    <SharedActor>
                        <a>
                            <img src="./images/user.svg" alt=""/>
                            <div>
                                <span>Title</span>
                                <span>Info</span>
                                <span>Date</span>
                            </div>
                        </a>
                        <button>
                            <img src="./images/ellipsis.svg" alt=""/>
                        </button>
                    </SharedActor>
                    <Description>
                        Description
                    </Description>
                    <SharedImg>
                        <a>
                            <img src="./images/shared-image.jpg" alt=""/>
                        </a>
                    </SharedImg>
                    <SocialCounts>
                        <li>
                            <button>
                                <img src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb" alt=""/>
                                <img src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f" alt=""/>
                                <span>21</span>
                            </button>
                        </li>
                        <li><a>42 comments</a></li>
                    </SocialCounts>
                    <SocialActions>
                        <button>
                            <img src="./images/like-icon.svg" alt=""/>
                            <span>Like</span>
                        </button>
                        <button>
                            <img src="./images/comment.svg" alt=""/>
                            <span>Comments</span>
                        </button>
                        <button>
                            <img src="./images/share.svg" alt=""/>
                            <span>Share</span>
                        </button>
                        <button>
                            <img src="./images/send.svg" alt=""/>
                            <span>Send</span>
                        </button>
                    </SocialActions>
                </Article>
                <LastPage>
                    <h3>Load More..</h3>
                    <FcDownload/>
                </LastPage>
            </div>
        </Container>
    )
}

const Container = styled.div`
    grid-area: main;
`;
const CommonCard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    background-color: #fff;
    border-radius: 5px;
    position:relative;
    border:none;
    box-shadow: 0 0 0 1px rgba(0 0 0 / 15%), 0 0 0 rgba(0 0 0 / 20%);
`;
const ShareBox = styled(CommonCard)`
    display: flex;
    flex-direction: column;
    color:#958b7b;
    margin:0 0 8px;
    background:white;
    div{
        button{
            outline:none;
            color: rgba(0,0,0,0.6);
            font-size: 14px;
            min-height:48px;
            background: transparent; 
            line-height:1.5;
            border:none;
            display:flex;
            align-items:center;
            font-weight:600;
            cursor:pointer;
        }
        button:hover{
            background-color:rgba(0,0,0,0.1);
            border-radius:5px;
        }
        &:first-child{
            display:flex;
            align-items:center;
            padding:8px 16px 0px 16px;
            img{
                width:48px;
                border-radius:50%;
                margin-right:8px;
                cursor:pointer;
            }
            button{
                margin: 4px 0px;
                flex-grow:1;
                border-radius:35px;
                padding-left:16px;
                border: 1px solid rgba(0,0,0,0.15);
                background-color:white;
                text-align:left;
                transition:0.4s;
            }
            button:hover{
                background-color:rgba(0,0,0,0.1);
            }
        }
        &:nth-child(2){
            display:flex;
            flex-wrap:wrap;
            justify-content:space-around;
            padding-bottom:4px;
            button{
                img{
                    margin: 0 4px 0px -2px;
                }
                span{
                    color: rgba(0,0,0,0.5);
                }
            }
        }
    }
`;
const Article = styled(CommonCard)`
    padding:0px;
    margin:0 0 8px;
    overflow:visible;
`;
const SharedActor = styled.div`
    padding-right: 40px;
    flex-wrap:nowrap;
    padding:12px 16px 0;
    margin-bottom:8px;
    align-items: center;
    display:flex;
    a{
        margin-right:12px;
        flex-grow: 1;
        overflow: hidden;
        display: flex;
        text-decoration: none;
        img{
            width:48px;
            height:48px;
        }
        & > div{
            display:flex;
            flex-direction: column;
            flex-grow: 1;
            flex-basis: 0;
            margin-left:8px;
            overflow:hidden;
            span{
                text-align:left;
                &:first-child{
                    font-size:14px;
                    font-weight:bold;
                    color:rgba(0,0,0,1);
                }
                &:nth-child(n + 1){
                    font-size:12px;
                    color:rgba(0,0,0,0.6);
                }
            }
        }
    }
    button{
        position:absolute;
        right:12px;
        top:0;
        background:transparent;
        border: none;
        outline: none;
        cursor:pointer;
    }
`;
const Description = styled.div`
    padding:0 16px;
    overflow: hidden;
    color:rgba(0,0,0,0.9);
    font-size:14px;
    text-align:left;
`;
const SharedImg = styled.div`
    margin-top:8px;
    width:100%;
    display: block;
    position: relative;
    background-color: #f9fafb;
    img{
        object-fit: contain;
        width:100%;
        height: 100%;
    }
`;
const SocialCounts = styled.ul`
    line-height: 1.3;
    display: flex;
    align-items: flex-start;
    overflow:hidden;
    margin: 0 16px;
    padding:8px 0;
    border-bottom: 1px solid #e9e5df;
    list-style:none;
    li{
        margin-right: 5px;
        font-size:12px;
        button{
            display: flex;
            width: 100px;
            height: 30px;
            align-items: center;
            text-align:center;
            justify-content: center;
            cursor:pointer;
            font-size: 18px;
        }
    }
`;
const SocialActions = styled.div`
    align-items: center;
    display: flex;
    justify-content: flex-start;
    margin:0;
    min-height:40px;
    padding: 4px 8px;
    button{
        display:inline-flex;
        align-items: center;
        cursor: pointer;
        padding:8px;
        color:#0a66c2;
        background: transparent;
        border: none;
        transition: all 0.3s ease-in-out;
        @media (min-width:768px){
            span{
                margin-left: 8px;
            }
        }
    }
    button:hover{
            border-radius: 5px;
            background-color: rgba(0,0,0,0.2);
        }
`;
const LastPage = styled(CommonCard)`
    height: 50px;
    font-size: 20px;
    h3{
        cursor: pointer;
    }
`;

export default Middle;