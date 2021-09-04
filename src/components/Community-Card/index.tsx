import styled, { useTheme } from 'styled-components'
import { ThemeContextType } from 'styles/theme-provider'
import { themeVariablesMap } from 'styles/themes'

interface ContainerProps {
  readonly bannerURL: string
}

const Container = styled.div<ContainerProps>`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 283px;
  width: 252px;
  padding: 10px;
  background-repeat: no-repeat;
  background-image: url('${props => props.bannerURL}');
  background-size: auto 100px;
`

const Avatar = styled.img`
  margin-top: 60px;
  border-radius: 50%;
  border: 3px solid black;
  cursor: pointer;
`

const Name = styled.p`
  font-size: 19px;
  font-weight: ${themeVariablesMap.fontWeights.bold};
  text-align: left;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  width: 100%;
  min-width: 0;
  white-space: nowrap;
  margin-top: 10px;
  margin-bottom: 0;
`

const Members = styled.p`
  font-size: ${themeVariablesMap.fontSizes.regular};
  color: ${themeVariablesMap.colors.link};
  margin: 0;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`

const JoinButton = styled.button`
  width: 100%;
  height: 36px;
  margin-top: auto;
  background: none;
  font-size: ${themeVariablesMap.fontSizes.regular};
  font-weight: ${themeVariablesMap.fontWeights.bold};
  border-radius: 5px;
  border: 1px solid ${themeVariablesMap.colors.link};
  cursor: pointer;

  :hover {
    background-color: ${themeVariablesMap.colors.link};
    color: black;
  }
`

type CommunityCardProps = {
  name: string
  members: string
  avatar: string
  bannerURL: string
}

const CommunityCard = ({ name, members, avatar, bannerURL }: CommunityCardProps): JSX.Element => {
  const theme = useTheme() as ThemeContextType
  return (
    <Container bannerURL={bannerURL}>
      <Avatar width={92} height={92} src={avatar} />
      <Name>{name}</Name>
      <Members>
        <b>{members}</b> members
      </Members>
      <JoinButton onClick={() => theme.setTheme('test')}>JOIN COMMUNITY</JoinButton>
    </Container>
  )
}

export default CommunityCard
