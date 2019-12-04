import styled from 'styled-components'

export const Content = styled.a`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  width: 260px;
  text-decoration: none;
  margin-bottom: 45px;

  img {
    height: 250px;
  }

  strong {
    font-size: 13px;
    margin-top: 10px;
    color: #585858;
  }

  p {
    line-height: 22px;
    margin-top: 5px;
    font-size: 13px;
    color: #393939;
  }

  &:hover img {
    opacity: 0.4;
  }
`
