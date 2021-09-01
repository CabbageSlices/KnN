import styled from 'styled-components'

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
  font-weight: 700;
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
  font-size: 13px;
  color: #63c059;
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
  font-size: 13px;
  font-weight: 700;
  border-radius: 5px;
  border: 1px solid #63c059;
  cursor: pointer;

  :hover {
    background-color: #63c059;
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
  return (
    <Container bannerURL={bannerURL}>
      <Avatar width={92} height={92} src={avatar} />
      <Name>{name}</Name>
      <Members>
        <b>{members}</b> members
      </Members>
      <JoinButton>JOIN COMMUNITY</JoinButton>
    </Container>
  )
}

export default CommunityCard
