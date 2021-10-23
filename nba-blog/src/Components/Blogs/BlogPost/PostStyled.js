import styled from "styled-components";

export const PostStyled = styled.div`
  height: 100%;
  display: flex;
  position: relative;
  border-radius: 1rem;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  color: rgba(0, 0, 0, 0.87);
  overflow: hidden;
  .post-overlay {
    top: 20px;
    left: 20px;
    position: absolute;

    h6 {
      color: #fff;
    }
    span {
      color: #fff;
    }
  }
  .button-overlay {
    top: 20px;
    color: white;
    right: 20px;
    position: absolute;

    button {
      color: inherit;
      border: 0;
      cursor: pointer;
      margin: 0;
      display: inline-flex;
      outline: 0;
      padding: 0;
      position: relative;
      align-items: center;
      user-select: none;
      border-radius: 0;
      vertical-align: middle;
      -moz-appearance: none;
      justify-content: center;
      text-decoration: none;
      background-color: transparent;
      -webkit-appearance: none;
      -webkit-tap-highlight-color: transparent;
      min-width: 64px;
      box-sizing: border-box;
      transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      font-family: "Roboto", "Helvetica", "Arial", sans-serif;
      font-weight: 500;
      line-height: 1.75;
      border-radius: 4px;
      letter-spacing: 0.02857em;
      text-transform: uppercase;
      padding: 4px 5px;
      font-size: 0.8125rem;
      img {
        /* color: #fff; */
      }
    }
  }
  .tags {
    margin: 20px;
    display: flex;
    justify-content: space-between;

    &-text {
      font-size: 0.875rem;
      /* font-family: "Roboto", "Helvetica", "Arial", sans-serif; */
      font-weight: 400;
      line-height: 1.43;
      letter-spacing: 0.01071em;
    }
  }
  .player-name {
    font-size: 1.5rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1.334;
    letter-spacing: 0em;
    margin-bottom: 0.35em;
    padding: 0 16px;
  }
  .post-body {
    padding: 16px;
    p {
      color: rgba(0, 0, 0, 0.54);
      margin-bottom: 0.35em;
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.43;
      letter-spacing: 0.01071em;
    }
  }
  .post-actions {
    display: flex;
    padding: 0 16px 8px 16px;
    justify-content: space-between;
    align-items: center;

    .button-like {
      color: inherit;
      border: 0;
      cursor: pointer;
      margin: 0;
      display: inline-flex;
      outline: 0;
      padding: 0;
      position: relative;
      align-items: center;
      user-select: none;
      border-radius: 0;
      vertical-align: middle;
      -moz-appearance: none;
      justify-content: center;
      text-decoration: none;
      background-color: transparent;
      -webkit-appearance: none;
      -webkit-tap-highlight-color: transparent;
      color: rgba(0, 0, 0, 0.87);
      padding: 6px 16px;
      font-size: 0.875rem;
      min-width: 64px;
      box-sizing: border-box;
      transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      font-family: "Roboto", "Helvetica", "Arial", sans-serif;
      font-weight: 500;
      line-height: 1.75;
      border-radius: 4px;
      letter-spacing: 0.02857em;
      text-transform: uppercase;
      padding: 4px 5px;
      font-size: 0.8125rem;
    }
    .button-delete {
      margin-left: 8px;
      padding: 4px 5px;
      font-size: 0.8125rem;
      min-width: 64px;
      box-sizing: border-box;
      transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      /* font-family: "Roboto", "Helvetica", "Arial", sans-serif; */
      font-weight: 500;
      line-height: 1.75;
      border-radius: 4px;
      letter-spacing: 0.02857em;
      text-transform: uppercase;
      border: 0;
      cursor: pointer;
      margin: 0;
      display: inline-flex;
      outline: 0;
      padding: 0;
      position: relative;
      align-items: center;
      user-select: none;
      border-radius: 0;
      vertical-align: middle;
      -moz-appearance: none;
      justify-content: center;
      text-decoration: none;
      background-color: transparent;
      -webkit-appearance: none;
      -webkit-tap-highlight-color: transparent;
    }
  }
`;
