import styled from 'styled-components'

export default styled.div`
  display: block;
  padding: 30 0px;

  .playerWrapper {
    display: flex;    

    .thumbImage {
      border-radius: 3px;
    }
    .player {
      flex: 1;
      margin-left: 20px;
      position: relative;

      .trackDetail {
        width: 100%;
        display: flex;
        justify-content: space-between;

        .detail {
          display: flex;

          color: #CCC;
          
          .playButton {
            svg {
              color: orange;
              background-color: #FFF;
              font-size: 35px;
            }
          }
          div + div {
            margin-left: 10px;

            h6 {
              color: #999;
              margin: 0;
              font-weight: normal;
              font-size: 14px;
            }
            p {
              color: #999;
              margin: 0;
              font-weight: bold;
              font-size: 16px;
              margin-top: 2px;
            }
          }
        }

        .social {
          display: flex;

          a {
            color: #000;
            margin-left: 15px;
          }
        }
      }
      .wave {
        .duration {
          position: absolute;
          right: 0;
          bottom: 0;
          padding: 3px 5px;
          color: #FFF;
          background-color: rgba(0, 0, 0, 0.2);
        }
      }
    }
  }

  .metaWrapper {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    div {
      color: #777;
      display: flex;
      align-items: bottom;
      padding-left: 18px;
      position: relative;

      .icon {
        position: absolute;
        left: 0;
        display: inherit;
      }
    }
  }
`