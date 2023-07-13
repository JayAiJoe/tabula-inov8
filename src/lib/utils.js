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