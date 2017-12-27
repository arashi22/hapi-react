import styled from 'styled-components'

export default styled.div`
  max-width: 735px;
  margin: 0px auto;
  .soundTraks {
    list-style: none;
    margin: 50px 0px;
    padding-bottom: 20px;

    li {
      border-bottom: 1px solid #CCC;
      padding-bottom: 20px;
      margin-bottom: 25px;

      &:last-child {
        border: none;
        padding-bottom: 70px;
        margin-bottom: 0;
      }
    }
  }
`
