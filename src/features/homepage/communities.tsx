import Column from 'components/column'
import CommunityCard from 'components/community-card'
import Grid from 'components/grid'
import Heading from 'components/heading'
import HollowButton from 'components/hollow-button'
import HorizontalBreak from 'components/horizontal-break'
import Text from 'components/text'
import styled from 'styled-components'
import { themeVariablesMap } from 'styles'

interface DottedLineProps {
  right?: string
}

const ButtonContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
  position: relative;
`

//for sizing the button container
const ButtonPlaceholder = styled.div`
  width: 100%;
  height: 36px;
`

const HalfDottedLine = styled.div<DottedLineProps>`
  position: absolute;
  width: calc(50% - 117px);
  height: 1px;
  border-bottom: 2px dashed #444444;
  top: calc(50% + 1px);

  ${prop => (prop.right ? `right: ${prop.right};` : '')}
`

const ShowMoreButton = styled(HollowButton)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Communities = () => (
  <Column padding="40px 0">
    <Heading margin="0 0 20px">Browse Communities</Heading>
    <Text margin="0 0 20px">
      Find a community to create and explore gaming videos, fanart, discussions, and more!
    </Text>
    <HorizontalBreak />
    <Grid padding="40px 0">
      <CommunityCard
        name="Minecraft"
        members="424,843"
        avatar="https://m.gjcdn.net/community-thumbnail/100/15-rjzvfa3h-v4.webp"
        bannerURL="https://m.gjcdn.net/community-header/950/15-8hkywaif-v4.webp"
        backgroundColor="#2d2d2d"
        communityThemeColor={themeVariablesMap.colors.link}
      />
      <CommunityCard
        name="Five Nights at Freddy's the video game"
        members="556,843"
        avatar="https://m.gjcdn.net/community-thumbnail/100/3-rahecz2m-v4.webp"
        bannerURL="https://m.gjcdn.net/community-header/950/3-crop0_0_1275_288-3w7dnzdz-v4.webp"
        backgroundColor="#2d2d2d"
        communityThemeColor="#CC231A"
      />
      <CommunityCard
        name="Pokemon"
        members="208,449"
        avatar="https://m.gjcdn.net/community-thumbnail/100/7-d8qizjwc-v4.webp"
        bannerURL="https://m.gjcdn.net/community-header/950/7-rjbkrcxh-v4.webp"
        backgroundColor="#312B27"
        communityThemeColor="#00C0FF"
      />
      <CommunityCard
        name="League of Legends"
        members="25,449"
        avatar="https://m.gjcdn.net/community-thumbnail/100/5593-crop36_0_968_932-q6nwippa-v4.webp"
        bannerURL="https://m.gjcdn.net/community-header/950/5593-crop0_0_1577_556-pxb22xkj-v4.webp"
        backgroundColor="#272731"
        communityThemeColor="#FFE400"
      />
    </Grid>
    <ButtonContainer>
      <ButtonPlaceholder />
      <HalfDottedLine />
      <HalfDottedLine right="0" />
      <ShowMoreButton
        outlineColor={themeVariablesMap.colors.white}
        hoverColor={themeVariablesMap.colors.lime}
        width="230px"
        height="36px"
      >
        BROWSE MORE COMMUNITIES
      </ShowMoreButton>
    </ButtonContainer>
  </Column>
)

export default Communities
