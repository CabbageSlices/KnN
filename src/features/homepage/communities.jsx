import styled from 'styled-components'
import CommunityCard from 'components/CommunityCard'

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  padding: 30px;
  border: 1px solid black;
`

const Communities = () => (
  <StyledDiv>
    <CommunityCard
      name="Minecraft"
      members="424, 843"
      avatar="https://m.gjcdn.net/community-thumbnail/100/15-rjzvfa3h-v4.webp"
      bannerURL="https://m.gjcdn.net/community-header/950/15-8hkywaif-v4.webp"
    />
    <CommunityCard
      name="Five Nights at Freddy's the video game"
      members="556, 843"
      avatar="https://m.gjcdn.net/community-thumbnail/100/3-rahecz2m-v4.webp"
      bannerURL="https://m.gjcdn.net/community-header/950/3-crop0_0_1275_288-3w7dnzdz-v4.webp"
    />
  </StyledDiv>
)

export default Communities
