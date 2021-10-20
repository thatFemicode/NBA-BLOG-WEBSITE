import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
    --neutral-light: #F2F6FF;
    --clr-primary-4: hsl(205, 63%, 48%);
    --clr-primary-2: hsl(205, 77%, 27%);
    --clr-primary-1: hsl(205, 86%, 17%);
    --clr-primary-3: hsl(205, 72%, 37%);
    --clr-white: #fff;
   --clr-white: #fff;
    --max-width: 1170px;
    --fixed-width: 620px;
    --transition: all 0.3s ease-in;
    --clr-grey-1: hsl(209, 61%, 16%);
    --radius: 0.25rem;
    --tw-space-x-reverse: 0;
  --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  --tw-bg-opacity: 0;
  --tw-text-opacity: 1;



}
*{
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
    text-decoration: none;
    color: #000;
}
body{
    background-color: var(--neutral-light);
    /* background-color: #000; */
    overflow-x: hidden;
    
}
img{
    max-width: 100%;
}
a{
text-decoration: none
}
li{
    list-style: none
}
.no-scroll{
  height:100vh;
  overflow:hidden;
}
.load-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: 10;
  pointer-events: none;
}
.load-screen {
  position: relative;
  padding-top: 0px;
  padding-left: 0px;
  padding-right: 0px;
  background-color: #1d428a;
  width: 0%;
  height: 100%;
}
.load-screen1 {
  position: relative;
  padding-top: 0px;
  padding-left: 0px;
  padding-right: 0px;
  background-color: #000;
  width: 100%;
  height: 0%;
}
.load-screen2 {
  position: relative;
  padding-top: 0px;
  padding-left: 0px;
  padding-right: 0px;
  background-color: #ce1141;
  width: 100%;
  height: 0%;
}
.load-screen3 {
  position: relative;
  padding-top: 0px;
  padding-left: 0px;
  padding-right: 0px;
  background-color: #552583;
  width: 0%;
  height: 100%;
}
.Headd {
  opacity: 0;
  pointer-events: none;
}
/* .active-btn{
    color: rgba(255, 255, 255, var(--tw-text-opacity));
    background-color: rgba(0, 0, 0, var(--tw-bg-opacity));
} */
`;
export default GlobalStyle;
