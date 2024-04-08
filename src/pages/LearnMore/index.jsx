import styled from "styled-components"
import ToggleTitle from "../../components/TogglerTitles"
import { Link } from "react-router-dom"
import "./responsiveLearnMore.css"
import LearnMoreSwiper from "../../components/LearnMoreSwiper"

const LearnMore = ({ data }) => {
    const calculateAge = () => {
        const dob = new Date(data.additionalInfo1)
        const today = new Date()
        let age = today.getFullYear() - dob.getFullYear()
        let ageAdjustment = today.getMonth() - dob.getMonth()
        if (ageAdjustment < 0 || (ageAdjustment === 0 && today.getDay() < dob.getDay())) {
            age--
        }
        return age
    }

    console.log(calculateAge());

    return (
        <>
            <HeaderLearnMore className="header-learn-more" id="header-learn-more">
                <Link to="/" className="header-learn-more__back">{'<'}<span>Back</span></Link>
                <ToggleTitle optionValue={data.title} id="learn-more-title" />
                <a className="header-learn-more__ig" href={data.url.instagram} target="_blank">
                    <img className="ig-img" src={data.url.img} alt="Instagram" />
                </a>
            </HeaderLearnMore>

            <Main className="main-learn-more">
                <DivLearnMore className="learn-more">
                    <LearnMoreSwiper images={data.swipe} />

                    <AdditionalInfo className="additional-info">
                        <Ul>
                            {data.id === "AG" ? <li className="record-company"><a href={data.additionalInfo1.url} target="_blank">{data.additionalInfo1.recordCompany}</a></li> : <li className="dates"><p>{data.additionalInfo1}</p></li>}
                            {data.id === "AG" ? <li className="record-company"><a href={data.additionalInfo2.url} target="_blank">{data.additionalInfo2.recordCompany}</a></li> : <li className="dates"><p>{calculateAge()}</p></li>}
                        </Ul>
                    </AdditionalInfo>

                    <Article>
                        <Texts className="texts">
                            {data.article.map(
                                (paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                )
                            )}
                        </Texts>
                        <Fonts className="fonts">
                            {data.fonts.map(
                                (font, index) => (
                                    <a href={font.url} target="_blank" key={index}><i>{font.font}</i></a>
                                )
                            )}
                            <i><img src="/public/logo/AG.png" alt="" /></i>
                        </Fonts>
                    </Article>
                </DivLearnMore>
            </Main>
        </>
    )
}

export default LearnMore

const HeaderLearnMore = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 2rem 4rem;
    z-index: 4;
    letter-spacing: 2px;
    font-size: 2rem;
    background-color: var(--tema-claro-2);

    .header-learn-more__back{
        font-size: 1.5em;
        font-weight: bold;
        letter-spacing: 3px;
        text-transform: uppercase;
        color: var(--tema-claro-red);
        transition: 0.3s ease;
      
        &:hover {
          transform: scale(1.2);
          transition: 0.3s ease;
        }
    }

    .learn-more-title.toggle-title {
        width: fit-content;
        transition: 0.3s ease;
        color: var(--tema-claro-6);
        font-weight: bold;

        select {
            flex: 2;
            color: var(--tema-claro-6);
            background-color: transparent;
            text-align: center;
            font-weight: bold;
            font-size: 2em;
            letter-spacing: 1.5px;
            border: none;
            cursor: pointer;
            &:focus-visible {
              outline: none;
            }
          }
    }

    .header-learn-more__ig {
        width: 10rem;
        height: 10rem;
        aspect-ratio: 1/1;
    
        .ig-img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
  }
`

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 4rem;
    font-size: 2rem;
`

const DivLearnMore = styled.div`
    width: min(calc(100vw - 80px), 1200px);
    display: flex;
    flex-direction: column;
    align-items: center;
`

const AdditionalInfo = styled.div`
    margin-top: 3rem;
    height: 3.5rem;
    @media (width > 730px){
        width: 650px;
    }
`

const Ul = styled.ul`
    display: flex;
    gap: 2rem;
    height: inherit;

    li {
        text-align: center;
        flex: 1;
        height: inherit;
        border-radius: 100vw;
  
        &.record-company {
          background-color: var(--tema-claro-red);
          opacity: 0.8;
          transition: 0.1s ease;
          &:hover {
            transition: 0.1s ease;
            transform: scale(1.07);
            opacity: 1;
          }
  
          a {
            color: var(--tema-claro-1);
            text-align: center;
            width: 100%;
            display: grid;
            place-items: center;
            height: 3.5rem;
          }
        }
  
        &.dates {
          background-color: var(--tema-claro-6);
          color: var(--tema-claro-1);
          text-align: center;
          width: 100%;
          display: grid;
          place-items: center;
          height: 3.5rem;
        }
      }
`

const Article = styled.article`
    p:not(:nth-child(1)) {
        text-align: justify;
        margin-top: 2rem;
        letter-spacing: 1px;
    }
`

const Texts = styled.div`
    margin: 2rem 0;
    padding: 2rem 3rem;
    border: 1px solid;
`

const Fonts = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 2fr) 1fr;
    gap: 1rem;
    text-align: end;

    a {
    padding: 1rem;
    border: 1px solid;
    }

    i img {
    height: 4rem;
    }
`

