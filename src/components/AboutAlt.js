import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../values/colors'



const AboutGroup = styled.div`
    max-width: 636px;
    line-height: 1.5;
    // padding: 2em 4em;
    margin: 0 auto;
    position: relative;
    margin:0 auto;
    transition: 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
    a{
        text-decoration:underline;
    }
`

const AboutAuthor = styled.div`
    display:flex;
    align-items:center;
    justify-content:center; 
    margin:48px; 

`

const AboutAvatar = styled.img`
    margin:8px;
    height:64px;
    @media (max-width:640px){
        height:48px;
    } 

`
const AboutX = styled.img`
    margin:8px;
    height:16px;

`

const AboutTitle = styled.h2`
    margin: 0;
    padding: 0;
    margin-top:32px;
    margin-bottom:8px;
    font-weight: 600;
    font-size: 24px;
    color: ${COLORS.neutral_4};
    line-height:1.6em;
    @media (max-width:640px){
        font-size:15px;
        line-height: 1.4em;
    }
`

const AboutText = styled.div`
    margin: 0;
    padding: 0;
    font-weight: normal;
    font-size: 16px;
    color: ${COLORS.neutral_4};
    line-height:1.7em;
    margin-bottom:8px;
    @media (max-width:640px){
        font-size:15px;
        line-height: 1.85em;
    }
`

const AboutUl = styled.ul`
    font-size: 16px;
    color: ${COLORS.neutral_4};
    line-height:1.7em;
    margin:8px 0;
    padding-left:28px;
    margin-bottom:12px;
    @media (max-width:640px){
        font-size:15px;
        line-height: 1.85em;
    }
`

const AboutList = styled.li`
    list-style-type: square;
    margin:4px 0;
`

// const AboutFigure = styled.figure`
//     // background-color: ${COLORS.white};
//     margin: 0;
//     padding: 4px;
//     float: right;
//     max-width: 240px;
//     position: relative;
//     right: -8em;
//     margin-left: -7em;
//     @media (max-width:880px){
//         right: -6em;
//         margin-left: -5em;
//         max-width: 220px;
//     }
//     @media (max-width:800px){
//         right: 0;
//         margin-left: 8px;
//         max-width: 200px;
//     }
//     @media (max-width:640px){
//         right: 0;
//         margin-left: 8px;
//         max-width: 180px;
//     }
//     @media (max-width:480px){
//         right: 0;
//         margin-left: 8px;
//         max-width: 120px;
//     }
// `
// const AboutImage = styled.img`
//     width: 100%;
//     display: block;
//     margin-bottom: 1em;
//     // @media (max-width:832px){
//     //     width:90%;
//     // }
//     // @media (max-width:640px){
//     //     width:75%;
//     // }

// `
// const FigureCap = styled.figcaption`
//     font-style: italic;
//     font-size: .7em;
// `


const AboutLikeTitle = styled.h3`
    margin: 0;
    padding: 0;
    margin-top:56px;
    margin-bottom:8px;
    font-weight: 500;
    font-size: 16px;
    text-align:center;
    color: ${COLORS.neutral_2};
    clear:both;
    line-height:1.6em;
    span{
        font-size:12px;
    }
    @media (max-width:640px){
        font-size:15px;
        line-height: 1.4em;
    }
`
    const AboutLikeUser = styled.ul`
    ${'' /* border: 2px solid ${COLORS.border_lighter}; */}
    display: -webkit-flex;
    display: -ms-flexbox;
    display: -moz-box;
    display: flex;
    -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
            flex-wrap: wrap;
    justify-content:center;
    margin: 0;
    ${'' /* padding: 1em; */}
    list-style: none;

    a {
        /* display: block; */
        ${'' /* padding: 4px 12px; */}
        ${'' /* background-color: ${COLORS.tag_bg}; */}
        border-radius:50px;
        line-height: 1.5;
        text-decoration: underline;
        color: ${COLORS.neutral_4};
        position: relative;
        text-align: center;
        transition: 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
    }
        a:hover{
            color: ${COLORS.brand};
        }

    `

    const AboutLikeList = styled.li`
        display: inline-block;
        padding:6px 12px;
        @media (max-width:640px){
        padding:4px 8px;
    }

    `




const AboutAlt = ({data}) => (
    <AboutGroup>
        <AboutAuthor>
        <AboutAvatar src={require('../images/tovifun_avatar.png')} alt="tovi"></AboutAvatar>
        <AboutX src={require('../images/tovifun_x.png')} alt="tovi"></AboutX>
        <AboutAvatar src={require('../images/jun_avatar.png')} alt="jun"></AboutAvatar>
        </AboutAuthor>
        <AboutTitle>关于这个项目</AboutTitle>
        <AboutText>Figma 社区里，每天都会有许多插件更新，到今天，已经有快上千个插件了，未来肯定还会有更多的插件更新。</AboutText>
        <AboutText>官方的插件社区发现机制，目前只有 ‘Popular’ 这一项——即按照全部时间的热度排列。这虽然在最开始可以找到最优质的那部分插件，但是结果也导致了这些插件的长期 ‘霸榜’ ，新的优质插件，很难通过官方的社区来发掘。</AboutText>
        <AboutText>你会如何发掘优质插件？可能你会有一些群聊，里边的小伙伴会时常分享一些好的内容；或者你在社交账号也会浏览到一些插件推荐。</AboutText>
        <AboutText>再或者，你也可以像我们一样，不想遗漏那些好的插件，使用非常笨的方法，每个月打开社区插件列表，把近期更新的插件都安装来玩一下。</AboutText>
        <AboutText>不过你完全不需要这么做，因为我们已经体验过一遍了，并且精心挑选出了其中比较好的插件（就是这个网页中所展示的）。每个月挑选的数量也不会特别多，可能你花几分钟就浏览完了。</AboutText>
        <AboutText>每个月的最后一天，我们会进行更新，你可以在下方关注公众号获得更新提醒。如果你想进行评论、反馈，可以 <a href="https://mp.weixin.qq.com/s/SqMktXLMPU-BRsAMPn7XOQ" target="_blank" rel="noreferrer">在这篇公众号</a> 或者 <a href="https://twitter.com/tovizhong/status/1285012648661184512" target="_blank" rel="noreferrer">这条推</a> 下留言（留言专用帖<span role="img" aria-label="Face with Tears of Joy">😂</span>）。</AboutText>

        <AboutTitle>赞赏</AboutTitle>
        <AboutText>如果你喜欢这个网站，可以考虑给我们赞赏：</AboutText>
        <AboutUl>
            <AboutList>通过 <a href="images/tovi_sponsor_small.png" target="_blank" rel="noreferrer">微信或支付宝</a></AboutList>
            <AboutList>或通过  <a href="https://www.buymeacoffee.com/tovi" target="_blank" rel="noreferrer">Buy me a coffee</a></AboutList>
        </AboutUl>
        <AboutText>赞赏任意金额，并发送邮件至： hitovi@outlook.com ， 写下你的<strong>昵称和一个社交/个人网站链接</strong>，我们将在下方展示你的昵称和链接信息。（随机排列）</AboutText>
        {/* <AboutText>注意：</AboutText>
        <AboutUl>
            <AboutFigure>
                <AboutImage src="images/figma_craft.jpg" alt="Figma 手工针织胸针 ｜ 又一造物" />

            </AboutFigure>
            <AboutList>赞赏任意金额，并发送邮件写下你的<strong>昵称和一个社交/个人网站链接</strong>，我们将在下方展示你的昵称和链接信息。（随机排列）</AboutList>

            <AboutList>赞赏30元或5美金以上，并发送邮件写下你的<strong>手机号和收件地址</strong>，我们将给你邮寄一个由 又一造物（也就是 Tovi 的老妹） 手工针织的 Figma 胸针，在这个页面可以查看 Figma 胸针大图。（仅限国内）</AboutList>
        </AboutUl>

        <AboutText>邮箱地址： hitovi@outlook.com</AboutText> */}

        <AboutLikeTitle> 感谢 5 位老铁赞赏<br /><span role="img" aria-label="heart"> ❤️ </span><span role="img" aria-label="heart"> ❤️ </span><span role="img" aria-label="heart"> ❤️ </span></AboutLikeTitle>

        <AboutLikeUser>
            <AboutLikeList><a href="https://dribbble.com/muchakucha" target="_blank" rel="noreferrer">Leo Lee</a></AboutLikeList>
            <AboutLikeList><a href="https://twitter.com/rosu_h" target="_blank" rel="noreferrer">Rosu</a></AboutLikeList>
            <AboutLikeList><a href="https://twitter.com/h_ymouse" target="_blank" rel="noreferrer">Ymouse</a></AboutLikeList>
            <AboutLikeList>泡面Online</AboutLikeList>
            <AboutLikeList>Sueway</AboutLikeList>
            <AboutLikeList><a href="images/tovi_sponsor_small.png" target="_blank" rel="noreferrer">You</a></AboutLikeList>

        </AboutLikeUser>


    </AboutGroup>
)

export default AboutAlt