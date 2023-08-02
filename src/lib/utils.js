export function toLowerNoSpace(s){
    return s.replaceAll(/\s/g,'').toLowerCase();
}

export function isBelowThreshold(current, maximum, threshold){
    return current/maximum <= threshold/100;
}

export function isNumberKey(key){
    return (/[0-9]/.test(key) || key === "Backspace")
}

export const DANGER_THRESHOLD = 15;
export const PLACEHOLDER_IMAGE = 'https://icon-library.com/images/placeholder-image-icon/placeholder-image-icon-21.jpg'

export const STATUS_COLORS = ["is-grey", "is-warning", "is-success", "is-info"]

export const FILLERTEXT = "🎉🔥 Introducing the Epic Keyboards Collection from ProKeys! Elevate Your Typing Experience to the Next Level! 🚀💻\nHey there, keyboard enthusiasts and tech aficionados! 🙌🎉 Are you ready to dive into a world of premium typing experiences and cutting-edge design? Look no further, because ProKeys is here to redefine your keyboard game! 💯🔝\n🌟 Craftsmanship at its Finest:\nGet ready to be wowed! Our keyboards are meticulously designed by a team of passionate keyboard lovers, combining sleek aesthetics with functionality. Each model is a masterpiece, crafted to perfection. 🎨✨\n🌈 Style Meets Comfort:\nSay goodbye to clunky and uncomfortable keyboards! With ProKeys, you'll experience an ergonomic design that keeps your hands happy during those long typing sessions. Your comfort matters, and we've got you covered! 💆‍♂️🔝";

export const STATUS = {
    0 : "Pending",
    1 : "Interest Check",
    2 : "Live",
    3 : "Completed",
}

export function formatDate(string){
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(string).toLocaleDateString([],options);
}

export function formatDateUS(dt) {
    const date = new Date(dt);
    var year = date.getFullYear();
  
    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
  
    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    
    return month + '/' + day + '/' + year;
  }

  export function isDateFinished(date){
    const dnow = new Date();
    const dcompare = new Date(date);
    return dnow < dcompare;
  }

export const defaultUser = {
    id: "000",
    username: "Guest",
    isDesigner: false,
}


export const TABULA_GUIDELINES = "TABULA GUIDELINES\n\t\
1. As a designer, you are required to submit a request for an interest check for any groupbuys you may want to host.\n\t\
2. Once you reach your Minimum Order Quantity for your groupbuy within your interest check, you may submit a request to host a groupbuy on Tabula.\n\t\
3. Tabula will review your interest check and will contact you if any issues regarding the details of your groupbuy exist.\n\t\
4. If everything has been approved, your groupbuy will be accepted and go live on the website.\n\t\
5. As per the hosting guidelines, Tabula’ set hosting fee of 10% will be deducted from the groupbuy’s total revenue. Any and all availed insurance fees are to proceed to Tabula.\n\t\
6. Tabula reserves the right to discontinue any existing groupbuy as the company deems necessary for any reason whatsoever.\n\t\
7. Reminders:\n\t\t\
a. Tabula is not liable for the production of any boards. You must facilitate the production of your own design.\n\t\t\
b. The shipping services to be handled by Tabula are limited to only to boards produced in the Philippines and shipped to locations in the Philippines.\n\t\t    The shipping of boards produced outside the Philippines or those that will be shipped outside the Philippines should be handled by the designers.\n\t\t\
c. It is HIGHLY ENCOURAGED for all designers to update the update tab of their groupbuys at least TWICE a month.\
"