import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 15px;
  background-color: #585858;
  box-shadow: 0px 5px 8px -5px rgba(88, 88, 88, 1);
`

export const Title = styled.h1`
  display: flex;
  align-items: center;
  font-size: 24px;
  color: white;
  font-weight: bold;
`

export const User = styled.div`
  color: white;
  font-weight: bold;
  display: flex;
  align-items: center;
  font-size: 13px;
  img {
    width: 27px;
    height: 27px;
    border-radius: 50%;
    margin-right: 5px;
  }
`
