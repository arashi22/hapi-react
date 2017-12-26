import styled from 'styled-components'

export default styled.div`
  header {
    height: 55px;
    padding: 0 30px;
    display: flex;
    justify-content: space-between;

    .searchWrap {
      display: flex;
      align-items: center;
      
      .search {
        position: relative;

        .input {
          margin-left: 14px;
          font-size: 12px;
          font-weight: bold;
          padding: 8px 14px 8px 10px;
          width: 320px;
          border: 1px solid #EEE;
        }

        span {
          position: absolute;
          right: 10px;
          top: 50%;
          color: #CCC;
          transform: translateY(-50%);  
        }
      }      
    }
    .avatarWrap {
      display: flex;
      align-items: center;
      position: relative;
      padding-right: 20px;

      .photo {
        width: 24px;
        height: 24px;
        border-radius: 50%;        
      }

      .downArrow {
        position: absolute;
        right: 0;
      }
    }
  }
`