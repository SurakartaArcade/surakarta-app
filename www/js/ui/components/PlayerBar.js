import styled from 'styled-components'

/**
 * Container that will spread out its contents horizontally as required
 * for the player bars above & below the canvas.
 */
export const PlayerBar = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: none;
  margin-left: 32px;
  margin-right: 32px;
  justify-content: space-between;
`

export default PlayerBar
