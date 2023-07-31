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