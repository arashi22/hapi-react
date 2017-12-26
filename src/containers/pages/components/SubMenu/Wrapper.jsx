import styled from 'styled-components'

export default styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;

  .social {
    list-style: none;
    display: inline-flex;
    padding:0 10px;

    li {
      margin-right: 24px;

      a {
        color: black;
        font-size: 14px;
      }  
    }
  }

  .buttons {
    list-style: none;
    display: inline-flex;

    button {
      color: #333;
      border: 1px solid #EEE;
      padding: 7px 10px;
      font-weight: bold;

      &:last-child {
        margin-left: 12px;
      }
    }
  }
`