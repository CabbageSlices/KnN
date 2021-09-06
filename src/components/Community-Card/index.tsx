import HollowButton from 'components/hollow-button'
import styled, { useTheme } from 'styled-components'
import { fontSizes, fontWeights } from 'styles'
import { ThemeContextType } from 'styles/theme-provider'
import { themeVariablesMap } from 'styles/themes'

interface ContainerProps {
  readonly bannerURL: string
  readonly backgroundColor?: string
}

interface AvatarProps {
  readonly borderColor?: string
}

interface BannerProps {
  readonly bannerURL: string
}

interface Colored {
  readonly color?: string
}

const Container = styled.div<ContainerProps>`
  border-radius: 10px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  padding: 10px;
  position: relative;
  height: 283px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  min-width: 253px;
  ${props => (props.backgroundColor ? `background-color: ${props.backgroundColor};` : '')}
`

const Banner = styled.div<BannerProps>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
  background-repeat: no-repeat;
  background-image: url('${props => props.bannerURL}');
  background-size: cover;
  background-position: center;
`

const Avatar = styled.img<AvatarProps>`
  position: absolute;
  top: 64px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50%;
  border: 4px solid ${props => props.borderColor || 'black'};
  cursor: pointer;
`

const Name = styled.p`
  font-size: 19px;
  font-weight: ${fontWeights.bold};
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  width: 100%;
  min-width: 0;
  white-space: nowrap;
  margin-top: 10px;
  margin-bottom: 5px;
`

const Members = styled.p<Colored>`
  font-size: ${fontSizes.small};
  color: ${props => props.color || themeVariablesMap.colors.link};
  margin: 0 0 22px;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`
type CommunityCardProps = {
  name: string
  members: string
  avatar: string
  bannerURL: string
  backgroundColor: string
  communityThemeColor: string
  className?: string
}

const CommunityCard = ({
  name,
  members,
  avatar,
  bannerURL,
  backgroundColor,
  communityThemeColor,
  className,
}: CommunityCardProps): JSX.Element => {
  const theme = useTheme() as ThemeContextType
  return (
    <Container bannerURL={bannerURL} className={className} backgroundColor={backgroundColor}>
      <Banner bannerURL={bannerURL} />
      <Avatar width={92} height={92} src={avatar} borderColor={backgroundColor} />
      <Name>{name}</Name>
      <Members color={communityThemeColor}>
        <b>{members}</b> members
      </Members>
      <HollowButton
        onClick={() => theme.setTheme('test')}
        width="100%"
        height="36px"
        outlineColor={communityThemeColor}
      >
        JOIN COMMUNITY
      </HollowButton>
    </Container>
  )
}

export default CommunityCard
