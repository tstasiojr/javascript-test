import { htmlHelper } from "./html.js";

console.log(htmlHelper);


const li = htmlHelper.createElement('li');
htmlHelper.appendChild(li);

htmlHelper.addStyle({color: 'red'});
li.innerHTML = '1'

console.log(li);



