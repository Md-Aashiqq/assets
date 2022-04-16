export const st = `
.minimizable-web-chat > .chat-box.right {
    right: 20px;
}
.minimizable-web-chat > .chat-box {
    background-color: rgba(255, 255, 255, .8);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    border-radius: 4px;
    box-shadow: 0 0 20px rgb(0 0 0 / 20%);
    border: 4px solid #39C;
    bottom: 20px;
    display: flex;
    flex-direction: column;
    max-width: 400px;
    min-width: 320px;
    position: fixed;
    top: 20px;
    width: 30%;
}

.minimizable-web-chat > .chat-box > .react-web-chat {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0%;
}

.web-chat {
    overflow: hidden;
}
.css-1prj06z, [data-css-1prj06z] {
    background-color: white;
    height: 100%;
    width: 100%;
}
.css-1t62idy, [data-css-1t62idy] {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
}

.css-mfy564, [data-css-mfy564] {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0%;
    -webkit-flex: 1;
}
.css-gtdio3, [data-css-gtdio3] {
    overflow: hidden;
    position: relative;
}

.css-ca0rlf, [data-css-ca0rlf] {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    -webkit-overflow-scrolling: touch;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
}

.css-y1c0xs, [data-css-y1c0xs] {
    height: 100%;
    overflow-y: auto;
    width: 100%;
}

.css-mfy564, [data-css-mfy564] {
    flex: 1;
    -webkit-flex: 1;
}
.css-ljhy6a.css-7c9av6{
    margin: 0;
    padding: 0;
    list-style-type: none;
}
ul{
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
}
.css-1qyo5rb:first-child,
[data-css-1qyo5rb]:first-child,
.css-1qyo5rb[data-simulate-firstchild],
[data-css-1qyo5rb][data-simulate-firstchild] {
    margin-top: 10px;
}
.css-1qyo5rb,
[data-css-1qyo5rb] {
    margin-bottom: 10px;
}
li {
    display: list-item;
    text-align: -webkit-match-parent;
}
.css-1i5j9y2.webchat__stacked_extra_right_indent,
[data-css-1i5j9y2].webchat__stacked_extra_right_indent {
    margin-right: 20px;
}
.css-1i5j9y2:not(.webchat__stacked_extra_left_indent),
[data-css-1i5j9y2]:not(.webchat__stacked_extra_left_indent),
.css-1i5j9y2[data-simulate-notwebchatstackedextraleftindent],
[data-css-1i5j9y2][data-simulate-notwebchatstackedextraleftindent] {
    margin-left: 10px;
}

.css-tyxksf,
[data-css-tyxksf] {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
}
.css-tyxksf>.avatar,
[data-css-tyxksf]>.avatar {
    flex-shrink: 0;
    -webkit-flex-shrink: 0;
}
div {
    display: block;
}
.css-cf1ppa:not(.from-user),
[data-css-cf1ppa]:not(.from-user),
.css-cf1ppa[data-simulate-notfromuser],
[data-css-cf1ppa][data-simulate-notfromuser] {
    background-color: #0063B1;
}
.css-tyxksf>.avatar,
[data-css-tyxksf]>.avatar {
    flex-shrink: 0;
    -webkit-flex-shrink: 0;
}
.css-cf1ppa,
[data-css-cf1ppa] {
    align-items: center;
    border-radius: 50%;
    color: White;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    font-family: 'Calibri', 'Helvetica Neue', 'Arial', 'sans-serif';
    height: 40px;
    justify-content: center;
    overflow: hidden;
    position: relative;
    width: 40px;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
}
.css-tyxksf>.content,
[data-css-tyxksf]>.content {
    flex-grow: 1;
    overflow: hidden;
    -webkit-flex-grow: 1;
}
.css-tyxksf>.filler,
[data-css-tyxksf]>.filler {
    flex-shrink: 0;
    -webkit-flex-shrink: 0;
}
.css-tyxksf.from-user,
[data-css-tyxksf].from-user {
    flex-direction: row-reverse;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    -webkit-flex-direction: row-reverse;
}
.css-1i5j9y2:not(.webchat__stacked_extra_right_indent),
[data-css-1i5j9y2]:not(.webchat__stacked_extra_right_indent),
.css-1i5j9y2[data-simulate-notwebchatstackedextrarightindent],
[data-css-1i5j9y2][data-simulate-notwebchatstackedextrarightindent] {
    margin-right: 10px;
}
.css-tyxksf>.content>.webchat__row,
[data-css-tyxksf]>.content>.webchat__row {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
}

.css-tyxksf.from-user>.content>.webchat__row,
[data-css-tyxksf].from-user>.content>.webchat__row {
    flex-direction: row-reverse;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    -webkit-flex-direction: row-reverse;
}
.css-1i0rgxs,
[data-css-1i0rgxs] {
    color: transparent;
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
}

.css-1i5j9y2>.content>.webchat__row>.bubble,
[data-css-1i5j9y2]>.content>.webchat__row>.bubble,
.css-1i5j9y2>.content>.webchat__row>.timestamp,
[data-css-1i5j9y2]>.content>.webchat__row>.timestamp {
    max-width: 480px;
}
.css-tyxksf>.content>.webchat__row>.bubble,
[data-css-tyxksf]>.content>.webchat__row>.bubble,
.css-tyxksf>.content>.webchat__row>.timestamp,
[data-css-tyxksf]>.content>.webchat__row>.timestamp {
    flex-grow: 1;
    overflow: hidden;
    -webkit-flex-grow: 1;
}

.css-a11aqn.from-user.webchat__bubble_has_nub>.webchat__bubble__content,
[data-css-a11aqn].from-user.webchat__bubble_has_nub>.webchat__bubble__content {
    margin-right: 10px;
    border-bottom-right-radius: 0;
}
.css-a11aqn.from-user>.webchat__bubble__content,
[data-css-a11aqn].from-user>.webchat__bubble__content {
    background: White;
    border-color: #E6E6E6;
    border-radius: 20px;
    border-style: solid;
    border-width: 1px;
    color: Black;
    min-height: 38px;
}

.css-a11aqn.from-user>.webchat__bubble__nub,
[data-css-a11aqn].from-user>.webchat__bubble__nub {
    height: 10px;
    right: 1px;
    bottom: 0;
    width: 10px;
}
.css-a11aqn>.webchat__bubble__nub,
[data-css-a11aqn]>.webchat__bubble__nub {
    overflow: hidden;
    position: absolute;
}

.css-a4zgb2>.webchat__bubble__nub,
[data-css-a4zgb2]>.webchat__bubble__nub {
    position: absolute;
}
svg:not(:root) {
    overflow: hidden;
}

.css-a11aqn.from-user g{
    transform: translate(5, 0) scale(-1, 1) translate(-5, 0) translate(0, 5) scale(1, -1) translate(0, -5);
}

.css-a11aqn.from-user>.webchat__bubble__nub>g>path,
[data-css-a11aqn].from-user>.webchat__bubble__nub>g>path {
    fill: White;
    stroke: #E6E6E6;
    stroke-width: 1;
}
.css-tyxksf>.content>.webchat__row>.filler,
[data-css-tyxksf]>.content>.webchat__row>.filler {
    flex-grow: 10000;
    flex-shrink: 1;
    -webkit-flex-grow: 10000;
    -webkit-flex-shrink: 1;
}

.css-1i0rgxs,
[data-css-1i0rgxs] {
    color: transparent;
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
}

.css-1i5j9y2>.content>.webchat__row>.bubble,
[data-css-1i5j9y2]>.content>.webchat__row>.bubble,
.css-1i5j9y2>.content>.webchat__row>.timestamp,
[data-css-1i5j9y2]>.content>.webchat__row>.timestamp {
    max-width: 480px;
}
.css-tyxksf>.content>.webchat__row>.bubble,
[data-css-tyxksf]>.content>.webchat__row>.bubble,
.css-tyxksf>.content>.webchat__row>.timestamp,
[data-css-tyxksf]>.content>.webchat__row>.timestamp {
    flex-grow: 1;
    overflow: hidden;
    -webkit-flex-grow: 1;
}

.css-a4zgb2,
[data-css-a4zgb2] {
    position: relative;
}

.css-ca0rlf,
[data-css-ca0rlf] {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    -webkit-overflow-scrolling: touch;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
}

.css-1t62idy,
[data-css-1t62idy] {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
}

.css-a11aqn:not(.from-user).webchat__bubble_has_nub>.webchat__bubble__content,
[data-css-a11aqn]:not(.from-user).webchat__bubble_has_nub>.webchat__bubble__content {
    margin-left: 10px;
    border-top-left-radius: 14px;
}
.css-a11aqn:not(.from-user)>.webchat__bubble__content,
[data-css-a11aqn]:not(.from-user)>.webchat__bubble__content {
    background: #f1f9fd;
    border-color: #E6E6E6;
    border-radius: 20px;
    border-style: solid;
    border-width: 0;
    color: black;
    min-height: 40px;
}

.css-a11aqn>.webchat__bubble__content,
[data-css-a11aqn]>.webchat__bubble__content {
    word-break: break-word;
}

.css-a4zgb2>.webchat__bubble__content,
[data-css-a4zgb2]>.webchat__bubble__content {
    overflow: hidden;
}

.css-1i0rgxs,
[data-css-1i0rgxs] {
    color: transparent;
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
}

.css-1i0rgxs,
[data-css-1i0rgxs] {
    color: transparent;
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
}
.css-1b7yvbl,
[data-css-1b7yvbl] {
    font-family: 'Calibri', 'Helvetica Neue', 'Arial', 'sans-serif';
    margin: 0;
    min-height: 20px;
    padding: 10px;
}
.css-1b7yvbl> :last-child,
[data-css-1b7yvbl]> :last-child {
    margin-bottom: 0;
}
.css-1b7yvbl> :first-child,
[data-css-1b7yvbl]> :first-child {
    margin-top: 0;
}

p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}

.css-a11aqn:not(.from-user)>.webchat__bubble__nub,
[data-css-a11aqn]:not(.from-user)>.webchat__bubble__nub {
    height: 10px;
    left: 0;
    top: 14px;
    width: 10px;
}


.css-a11aqn>.webchat__bubble__nub,
[data-css-a11aqn]>.webchat__bubble__nub {
    overflow: hidden;
    position: absolute;
}
:not(svg) {
    transform-origin: 0px 0px;
}
.css-a11aqn:not(.from-user)>.webchat__bubble__nub>g>path,
[data-css-a11aqn]:not(.from-user)>.webchat__bubble__nub>g>path {
    fill: #f1f9fd;
    stroke: #E6E6E6;
    stroke-width: 0;
}
.css-a4zgb2>.webchat__bubble__nub,
[data-css-a4zgb2]>.webchat__bubble__nub {
    position: absolute;
}
svg:not(:root) {
    overflow: hidden;
}
.css-tyxksf>.content>.webchat__row>.filler,
[data-css-tyxksf]>.content>.webchat__row>.filler {
    flex-grow: 10000;
    flex-shrink: 1;
    -webkit-flex-grow: 10000;
    -webkit-flex-shrink: 1;
}
.css-1i5j9y2:not(.from-user)>.content>.webchat__stacked_item_indented,
[data-css-1i5j9y2]:not(.from-user)>.content>.webchat__stacked_item_indented {
    margin-left: 10px;
}
.css-tyxksf>.content>.webchat__row,
[data-css-tyxksf]>.content>.webchat__row {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
}

.css-a11aqn.from-user.webchat__bubble_has_nub>.webchat__bubble__content,
[data-css-a11aqn].from-user.webchat__bubble_has_nub>.webchat__bubble__content {
    margin-right: 10px;
    border-bottom-right-radius: 0;
}
.css-a11aqn.from-user>.webchat__bubble__content,
[data-css-a11aqn].from-user>.webchat__bubble__content {
    background: White;
    border-color: #E6E6E6;
    border-radius: 20px;
    border-style: solid;
    border-width: 1px;
    color: Black;
    min-height: 38px;
}

.css-1l9a57c,
[data-css-1l9a57c] {
    flex-shrink: 0;
    -webkit-flex-shrink: 0;
}

.css-1l9a57c,
[data-css-1l9a57c] {
    flex-shrink: 0;
    -webkit-flex-shrink: 0;
}
.css-1i0rgxs,
[data-css-1i0rgxs] {
    color: transparent;
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
}
.css-1i0rgxs,
[data-css-1i0rgxs] {
    color: transparent;
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
}
.css-eycyw2>.main,
[data-css-eycyw2]>.main {
    align-items: stretch;
    background-color: White;
    border-top: solid 1px #E6E6E6;
    min-height: 40px;
    -webkit-box-align: stretch;
    -webkit-align-items: stretch;
}
.css-1882x3w>.main,
[data-css-1882x3w]>.main {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
}
.css-1mou18w,
[data-css-1mou18w] {
    align-items: center;
    font-family: 'Calibri', 'Helvetica Neue', 'Arial', 'sans-serif';
    -webkit-box-align: center;
    -webkit-align-items: center;
}

.css-n2zczk,
[data-css-n2zczk] {
    align-items: center;
    font-family: 'Calibri', 'Helvetica Neue', 'Arial', 'sans-serif';
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
    -webkit-box-align: center;
    -webkit-align-items: center;
}
.css-1fe8kfc,
[data-css-1fe8kfc] {
    flex: 10000;
    -webkit-flex: 10000;
}
.css-16qahhi,
[data-css-16qahhi] {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
}
form {
    display: block;
    margin-top: 0em;
}
.css-1mou18w>input:not(:disabled),
[data-css-1mou18w]>input:not(:disabled) {
    color: Black;
}
.css-1mou18w>input,
[data-css-1mou18w]>input {
    background-color: White;
    border: 0;
    font-family: inherit;
    font-size: inherit;
    height: 100%;
    outline: 0;
    padding: 0;
}
.css-16qahhi>div,
[data-css-16qahhi]>div,
.css-16qahhi input,
[data-css-16qahhi] input {
    flex: 1;
    -webkit-flex: 1;
}
input[type="text"i] {
    padding: 1px 2px;
}
input {
    writing-mode: horizontal-tb !important;
    text-rendering: auto;
    color: -internal-light-dark(black, white);
    letter-spacing: normal;
    word-spacing: normal;
    line-height: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    appearance: auto;
    -webkit-rtl-ordering: logical;
    cursor: text;
    background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));
    margin: 0em;
    padding: 1px 2px;
    border-width: 2px;
    border-style: inset;
    border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
    border-image: initial;
}
.css-115fwte,
[data-css-115fwte] {
    background-color: Transparent;
    border: 0;
    height: 100%;
    outline: 0;
    padding: 0;
    width: 40px;
}

.web-chat {
  overflow: hidden;
}

.connect-spinner {
  display: flex;
  margin: auto;
  text-align: center;
}

.connect-spinner > .content {
  margin: auto;
}

.connect-spinner > .content > .icon {
  font-size: 64px;
}

.css-1s8geyi, [data-css-1s8geyi] {
    color: #767676;
    font-family: 'Calibri', 'Helvetica Neue', 'Arial', 'sans-serif';
    font-size: 80%;
    padding-top: 5px;
}

`;

export const uk = `
.minimizable-web-chat > button.maximize {
  background-color: #39C;
  border-radius: 50%;
  border: 2px solid #39C;
  bottom: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, .2);
  color: White;
  font-size: 30px;
  height: 64px;
  outline: 0;
  padding: 15px;
  position: fixed;
  right: 20px;
  width: 64px;
}

.minimizable-web-chat > button.maximize > .red-dot {
  color: #EF0000;
  font-size: 14px;
  position: absolute;
  right: 12px;
  top: 12px;
}

.minimizable-web-chat > button.maximize:focus:not(:active),
.minimizable-web-chat > button.maximize:hover:not(:active) {
  background-color: #069;
  border-color: #069;
}

.minimizable-web-chat > button.maximize:active {
  background-color: White;
  color: #39C;
}

.minimizable-web-chat > .chat-box {
  background-color: rgba(255, 255, 255, .8);
  backdrop-filter: blur(10px);
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, .2);
  border: 4px solid #39C;
  bottom: 20px;
  display: flex;
  flex-direction: column;
  max-width: 400px;
  min-width: 320px;
  position: fixed;
  top: 20px;
  width: 30%;
}

.minimizable-web-chat > .chat-box.hide {
  display: none;
}

.minimizable-web-chat > .chat-box.left {
  left: 20px;
}

.minimizable-web-chat > .chat-box.right {
  right: 20px;
}

.minimizable-web-chat > .chat-box > header {
  background-color: #39C;
  display:flex;
  justify-content: space-between;
  align-items: center;

}

.minimizable-web-chat > .chat-box > header >img {
  width:40px;

}


.minimizable-web-chat > .chat-box > header > .filler {
  flex: 0 10000 100%;
}

.minimizable-web-chat > .chat-box > header > button {
  width: 16px;
  height: 16px;
  background-color: hotpink;
  border: 0;
  color: White;
  outline: 0;
  border-radius:50%;
}

.minimizable-web-chat > .chat-box > header > button:focus:not(:active),
.minimizable-web-chat > .chat-box > header > button:hover:not(:active) {
  color: rgba(255, 255, 255, .6);
}

.minimizable-web-chat > .chat-box > header > button:focus:active {
  color: rgba(255, 255, 255, .4);
}

.minimizable-web-chat > .chat-box > .react-web-chat {
  flex: 1;
}

`;
