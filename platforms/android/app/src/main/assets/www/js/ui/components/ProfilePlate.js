import styled from 'styled-components'

export const ProfilePlate = styled.div`
  align-items: center;
  background-color: ${props => props.turnPlayer ? '#c0d0d0' : '#dcdcdc'};
  border-radius: 4px;
  display: flex;
  margin: 8px;
  padding: 6px;
  vertical-align: middle;
`

export default ProfilePlate
