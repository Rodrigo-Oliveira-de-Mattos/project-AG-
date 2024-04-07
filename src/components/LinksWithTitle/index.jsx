import styled from 'styled-components'

const LinksWithTitle = ({ array, className }) => {
    return (
        <ul className={`links__${className}`}>
            {array.map((data, index) => {
                return (
                    <li key={index}><a href={data.url} target="_blank">
                        {data.name}
                        <Icon></Icon>
                        {/* <img className="icon" src={data.icon} alt={data.name} /> */}
                    </a></li>
                )
            })}
        </ul>

    )
}

export default LinksWithTitle

const Icon = styled.a`
    background-image: url(/public/icon/icon-kanon.png);
    no-repeat;
    background-size: contain;
    width: 7rem;
    height: 7rem;
`