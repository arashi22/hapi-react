import styled from 'styled-components'
import bg from './bg.jpg'

export default styled.div`
  height: 150px;
  overflow: hidden;
  padding: 0px 32px;
  background: url(${bg}) 100% 32%;
  display:flex;
  align-items: center;

  .avatarInfo {
    display: inline-flex;

    .avatar {
      width: 107px;
      height: 107px;
      border-radius: 50%;
    }

    .detail {
      display: flex;
      flex-direction: column;
      margin-left: 16px;

      .item {
        background-color: #000;
        margin-bottom: 3px;
        color: #FFF;
        display: inline-table;
        padding: 3px 5px;
        font-size: 12px;
        font-weight: light;
      }

      .sizeXL {
        font-size: 20px;
      }
    }
  }
`