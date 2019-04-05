export function clamp(number, min = 0, max = 1) {
    return Math.min(Math.max(number, min), max);
}

export function scrolledOverPercent(element) {
    const scrolled = window.pageYOffset;
    const height = element.offsetHeight;
    const top = element.offsetTop;
    const percent = scrolled / (top + height);

    return clamp(percent);
}

export function resizeToRatio(dimensions, prop, value) {
    const otherProp = prop === 'width' ? 'height' : 'width';
    const otherPropValue = Math.round(value * dimensions[otherProp] / dimensions[prop]);

    return {
        [otherProp]: otherPropValue,
        [prop]: value,
    };
}

export function resizeToContain(dimensions, maxDimensions) {
    return Object.keys(dimensions).reduce((prevDimensions, prop) => (
        prevDimensions[prop] > maxDimensions[prop] ?
        resizeToRatio(prevDimensions, prop, maxDimensions[prop]) :
        prevDimensions
    ), dimensions);
}

export function resizeToCover(dimensions, maxDimensions) {
    const dimensionsAfterContain = resizeToContain(dimensions, maxDimensions);

    return Object.keys(dimensions).reduce((prevDimensions, prop) => (
        prevDimensions[prop] < maxDimensions[prop] ?
        resizeToRatio(prevDimensions, prop, maxDimensions[prop]) :
        prevDimensions
    ), dimensionsAfterContain);
}

export function isScrolledIntoView(element) {
    var rect = element.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // Only completely visible elements return true:
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
}