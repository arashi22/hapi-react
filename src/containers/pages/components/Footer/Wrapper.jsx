import styled from 'styled-components'

export default styled.div`
  width: 100%;
  height: 45px;
  background-color: #333;
  position: fixed;
  bottom: 0;
  display: flex;
  padding: 0 10px;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;

  .title {
    display: flex;

    .thumbnail {
      width: 30px;
      height: 30px;
    }

    div {
      margin-left: 5px;

      h6 {
        margin: 0;
        color: #FFF;
      }
      p {
        margin: 0;
        color: #FFF;
        font-size: 12px;
        margin-top: 3px;
      }
    }
  }

  .statusBar {
    display: flex;
    align-items: center;
    margin-left: 50px;
    
    span {
      color: #777;
      font-size: 12px;
      font-weight: bold;
      margin-right: 10px; 
    }

    .statusBar {
      background-color: #666;
      height: 3px;
      width: 300px;
      border-radius: 10px;
      position: relative;

      .progress {
        background-color: orange;
        width: 80%;
        position: absolute;
        height: 100%;
      }
    }
  }

  .controlWrap {
    display: flex;

    .control {
      color: white;
      margin-right: 58px;

      svg {
        margin-right: 30px;
      }
    }
    .mute {
      color: #777;

      svg {
        margin-right: 10px;
      }
    }
  }
`