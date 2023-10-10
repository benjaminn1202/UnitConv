// Navigation
const navMenu = document.querySelector('nav');
const navBtn = document.querySelector('.nav-menu-button');
const content = document.querySelector('.content');

const lengthNavBtn = document.querySelector('.length-nav-btn');
const massNavBtn = document.querySelector('.mass-nav-btn');
const volumeNavBtn = document.querySelector('.volume-nav-btn');
const temperatureNavBtn = document.querySelector('.temperature-nav-btn');
const aboutNavBtn = document.querySelector('.about-nav-btn');

const headlineHeading = document.querySelector('.headline').querySelector('.heading');
const headlineParagraph = document.querySelector('.headline').querySelector('.paragraph');

const inputContainers = [
    document.querySelector('.length-container'),
    document.querySelector('.mass-container'),
    document.querySelector('.volume-container'),
    document.querySelector('.temperature-container'),
    document.querySelector('.time-container'),
    document.querySelector('.data-storage-container'),
    document.querySelector('.about-container')
];

let navState = false;
const toggleNav = () => {
    if(navState == true) {
        navMenu.classList.remove('shownav');
        navMenu.classList.add('hidenav');
        content.classList.remove('dim');
        content.classList.add('undim');
        toggleInputBoxes(false);
        clearButton.addEventListener('click', clearInputBoxes);
        clearButton.classList.remove('disable-hover');
        clearButton.classList.remove('dim');
        clearButton.classList.add('undim');
        navState = false;
    }
    else {
        navMenu.classList.remove('hidenav');
        navMenu.classList.add('shownav');
        content.classList.remove('undim');
        content.classList.add('dim');
        toggleInputBoxes(true);
        clearButton.removeEventListener('click', clearInputBoxes);
        clearButton.classList.add('disable-hover');
        clearButton.classList.add('dim');
        clearButton.classList.remove('undim');
        navState = true;
    }
};

navBtn.onclick = () => {
    toggleNav();
};

lengthNavBtn.onclick = () => {
    headlineHeading.innerHTML = 'Length';
    headlineParagraph.innerHTML = 'Quantifies how long or short something is.';
    toggleNav();
    inputContainers.forEach(element => {
        element.style.display = 'none';
        inputContainers[0].style.display = 'block';
    });
};
massNavBtn.onclick = () => {
    headlineHeading.innerHTML = 'Mass';
    headlineParagraph.innerHTML = 'Refers to the amount of matter something contains.';
    toggleNav();
    inputContainers.forEach(element => {
        element.style.display = 'none';
        inputContainers[1].style.display = 'block';
    });
};
volumeNavBtn.onclick = () => {
    headlineHeading.innerHTML = 'Volume';
    headlineParagraph.innerHTML = 'Represents the three-dimensional space occupied by an object or substance.';
    toggleNav();
    inputContainers.forEach(element => {
        element.style.display = 'none';
        inputContainers[2].style.display = 'block';
    });
};
temperatureNavBtn.onclick = () => {
    headlineHeading.innerHTML = 'Temperature';
    headlineParagraph.innerHTML = 'Measures how hot or cold something is.';
    toggleNav();
    inputContainers.forEach(element => {
        element.style.display = 'none';
        inputContainers[3].style.display = 'block';
    });
};
const timeNavBtn = document.querySelector('.time-nav-btn');
timeNavBtn.onclick = () => {
    headlineHeading.innerHTML = 'Time';
    headlineParagraph.innerHTML = 'Measures time durations in different units.';
    toggleNav();
    inputContainers.forEach(element => {
        element.style.display = 'none';
        inputContainers[4].style.display = 'block';
    });
};
const dataStorageNavBtn = document.querySelector('.data-storage-nav-btn');
dataStorageNavBtn.onclick = () => {
    headlineHeading.innerHTML = 'Data Storage';
    headlineParagraph.innerHTML = 'Capacity of a storage medium used to store data.';
    toggleNav();
    inputContainers.forEach(element => {
        element.style.display = 'none';
        inputContainers[5].style.display = 'block';
    });
};
aboutNavBtn.onclick = () => {
    headlineHeading.innerHTML = 'About';
    headlineParagraph.innerHTML = 'More information about this application.';
    toggleNav();
    inputContainers.forEach(element => {
        element.style.display = 'none';
        inputContainers[6].style.display = 'grid';
    });
};

// Clear Button
const inputBoxes = document.querySelectorAll('.input-container input');
function clearInputBoxes() {
    const activeInputContainer = document.querySelector('.input-container:not([style*="display: none"])');
    if (activeInputContainer) {
        const inputBoxes = activeInputContainer.querySelectorAll('input');
        inputBoxes.forEach(inputBox => {
            inputBox.value = '';
        });
    }
}

// Disable input controls when navigation is open.
const clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click', clearInputBoxes);

const toggleInputBoxes = (disable) => {
    inputBoxes.forEach(inputBox => {
        inputBox.disabled = disable;
    });
};

// Length
const mmInp = document.querySelector('.mm-input');
const cmInp = document.querySelector('.cm-input');
const mInp = document.querySelector('.m-input');
const kmInp = document.querySelector('.km-input');
const inInp = document.querySelector('.in-input');
const ftInp = document.querySelector('.ft-input');
const ydInp = document.querySelector('.yd-input');
const miInp = document.querySelector('.mi-input');

mmInp.oninput = () => {
    let mm = parseFloat(mmInp.value);
    let cm = mm / 10;
    let m = mm / 1000;
    let km = mm / 1000000;
    let inch = mm / 25.4;
    let ft = mm / 304.8;
    let yd = mm / 914.4;
    let mi = mm / 1609344;
    
    cmInp.value = cm;
    mInp.value = m;
    kmInp.value = km;
    inInp.value = inch;
    ftInp.value = ft;
    ydInp.value = yd;
    miInp.value = mi;
};

cmInp.oninput = () => {
    let cm = parseFloat(cmInp.value);
    let mm = cm * 10;
    let m = cm / 100;
    let km = cm / 100000;
    let inch = cm / 2.54;
    let ft = cm / 30.48;
    let yd = cm / 91.44;
    let mi = cm / 160934.4;
    
    mmInp.value = mm;
    mInp.value = m;
    kmInp.value = km;
    inInp.value = inch;
    ftInp.value = ft;
    ydInp.value = yd;
    miInp.value = mi;
};

mInp.oninput = () => {
    let m = parseFloat(mInp.value);
    let mm = m * 1000;
    let cm = m * 100;
    let km = m / 1000;
    let inch = m * 39.3701;
    let ft = m * 3.28084;
    let yd = m * 1.09361;
    let mi = m / 1609.34;
    
    mmInp.value = mm;
    cmInp.value = cm;
    kmInp.value = km;
    inInp.value = inch;
    ftInp.value = ft;
    ydInp.value = yd;
    miInp.value = mi;
};

kmInp.oninput = () => {
    let km = parseFloat(kmInp.value);
    let mm = km * 1000000;
    let cm = km * 100000;
    let m = km * 1000;
    let inch = km * 39370.1;
    let ft = km * 3280.84;
    let yd = km * 1093.61;
    let mi = km / 1.60934;
    
    mmInp.value = mm;
    cmInp.value = cm;
    mInp.value = m;
    inInp.value = inch;
    ftInp.value = ft;
    ydInp.value = yd;
    miInp.value = mi;
};

inInp.oninput = () => {
    let inch = parseFloat(inInp.value);
    let mm = inch * 25.4;
    let cm = inch * 2.54;
    let m = inch * 0.0254;
    let km = inch * 0.0000254;
    let ft = inch / 12;
    let yd = inch / 36;
    let mi = inch / 63360;
    
    mmInp.value = mm;
    cmInp.value = cm;
    mInp.value = m;
    kmInp.value = km;
    ftInp.value = ft;
    ydInp.value = yd;
    miInp.value = mi;
};

ftInp.oninput = () => {
    let ft = parseFloat(ftInp.value);
    let mm = ft * 304.8;
    let cm = ft * 30.48;
    let m = ft * 0.3048;
    let km = ft * 0.0003048;
    let inch = ft * 12;
    let yd = ft / 3;
    let mi = ft / 5280;
    
    mmInp.value = mm;
    cmInp.value = cm;
    mInp.value = m;
    kmInp.value = km;
    inInp.value = inch;
    ydInp.value = yd;
    miInp.value = mi;
};

ydInp.oninput = () => {
    let yd = parseFloat(ydInp.value);
    let mm = yd * 914.4;
    let cm = yd * 91.44;
    let m = yd * 0.9144;
    let km = yd * 0.0009144;
    let inch = yd * 36;
    let ft = yd * 3;
    let mi = yd / 1760;
    
    mmInp.value = mm;
    cmInp.value = cm;
    mInp.value = m;
    kmInp.value = km;
    inInp.value = inch;
    ftInp.value = ft;
    miInp.value = mi;
};

miInp.oninput = () => {
    let mi = parseFloat(miInp.value);
    let mm = mi * 1609344;
    let cm = mi * 160934.4;
    let m = mi * 1609.34;
    let km = mi * 1.60934;
    let inch = mi * 63360;
    let ft = mi * 5280;
    let yd = mi * 1760;
    
    mmInp.value = mm;
    cmInp.value = cm;
    mInp.value = m;
    kmInp.value = km;
    inInp.value = inch;
    ftInp.value = ft;
    ydInp.value = yd;
};

// Mass
// Mass
const mgInp = document.querySelector('.mg-input');
const gInp = document.querySelector('.g-input');
const kgInp = document.querySelector('.kg-input');
const ozInp = document.querySelector('.oz-input');
const lbInp = document.querySelector('.lb-input');
const tInp = document.querySelector('.t-input');
const utInp = document.querySelector('.ut-input');
const itInp = document.querySelector('.it-input');

mgInp.oninput = () => {
    let mg = parseFloat(mgInp.value);
    let g = mg / 1000;
    let kg = g / 1000;
    let oz = g * 0.03527396;
    let lb = g * 0.00220462;
    let t = g * 0.000001;
    let ut = g * 1;
    let it = g * 0.00000062137;
    
    gInp.value = g;
    kgInp.value = kg;
    ozInp.value = oz;
    lbInp.value = lb;
    tInp.value = t;
    utInp.value = ut;
    itInp.value = it;
};

gInp.oninput = () => {
    let g = parseFloat(gInp.value);
    let mg = g * 1000;
    let kg = g / 1000;
    let oz = g * 0.03527396;
    let lb = g * 0.00220462;
    let t = g * 0.000001;
    let ut = g * 1;
    let it = g * 0.00000062137;
    
    mgInp.value = mg;
    kgInp.value = kg;
    ozInp.value = oz;
    lbInp.value = lb;
    tInp.value = t;
    utInp.value = ut;
    itInp.value = it;
};

kgInp.oninput = () => {
    let kg = parseFloat(kgInp.value);
    let g = kg * 1000;
    let mg = kg * 1000000;
    let oz = kg * 35.27396;
    let lb = kg * 2.20462;
    let t = kg * 0.001;
    let ut = kg * 1000;
    let it = kg * 0.00062137;
    
    gInp.value = g;
    mgInp.value = mg;
    ozInp.value = oz;
    lbInp.value = lb;
    tInp.value = t;
    utInp.value = ut;
    itInp.value = it;
};

ozInp.oninput = () => {
    let oz = parseFloat(ozInp.value);
    let g = oz * 28.3495;
    let mg = oz * 28349.5;
    let kg = oz * 0.0283495;
    let lb = oz * 0.0625;
    let t = oz * 0.0000283495;
    let ut = oz * 0.00003125;
    let it = oz * 0.0000279018;
    
    gInp.value = g;
    mgInp.value = mg;
    kgInp.value = kg;
    lbInp.value = lb;
    tInp.value = t;
    utInp.value = ut;
    itInp.value = it;
};

lbInp.oninput = () => {
    let lb = parseFloat(lbInp.value);
    let g = lb * 453.592;
    let mg = lb * 453592;
    let kg = lb * 0.453592;
    let oz = lb * 16;
    let t = lb * 0.000453592;
    let ut = lb * 0.0005;
    let it = lb * 0.000446429;
    
    gInp.value = g;
    mgInp.value = mg;
    kgInp.value = kg;
    ozInp.value = oz;
    tInp.value = t;
    utInp.value = ut;
    itInp.value = it;
};

tInp.oninput = () => {
    let t = parseFloat(tInp.value);
    let g = t * 1000000;
    let mg = t * 1000000000;
    let kg = t * 1000;
    let oz = t * 35273.96;
    let lb = t * 2204.62;
    let ut = t * 1.10231;
    let it = t * 0.984207;
    
    gInp.value = g;
    mgInp.value = mg;
    kgInp.value = kg;
    ozInp.value = oz;
    lbInp.value = lb;
    utInp.value = ut;
    itInp.value = it;
};

utInp.oninput = () => {
    let ut = parseFloat(utInp.value);
    let g = ut * 907185;
    let mg = ut * 907185000;
    let kg = ut * 907.185;
    let oz = ut * 32000;
    let lb = ut * 2000;
    let t = ut * 0.907185;
    let it = ut * 0.892857;
    
    gInp.value = g;
    mgInp.value = mg;
    kgInp.value = kg;
    ozInp.value = oz;
    lbInp.value = lb;
    tInp.value = t;
    itInp.value = it;
};

itInp.oninput = () => {
    let it = parseFloat(itInp.value);
    let g = it * 1016050;
    let mg = it * 1016050000;
    let kg = it * 1016.05;
    let oz = it * 35840;
    let lb = it * 2239.12;
    let t = it * 1.01605;
    let ut = it * 1.12;
    
    gInp.value = g;
    mgInp.value = mg;
    kgInp.value = kg;
    ozInp.value = oz;
    lbInp.value = lb;
    tInp.value = t;
    utInp.value = ut;
};

// Volume
const mLInp = document.querySelector('.mL-input');
const LInp = document.querySelector('.L-input');
const cmCubeInp = document.querySelector('.cubic-cm-input');
const mCubeInp = document.querySelector('.cubic-m-input');
const inCubeInp = document.querySelector('.cubic-in-input');
const flOzInp = document.querySelector('.fl-oz-input');
const ptInp = document.querySelector('.pt-input');
const qtInp = document.querySelector('.qt-input');
const galInp = document.querySelector('.gal-input');

mLInp.oninput = () => {
    let mL = parseFloat(mLInp.value);
    let L = mL / 1000;
    let cmCube = mL / 1000000;
    let mCube = mL * 0.00003527396;
    let inCube = mL * 0.0000610237;
    let flOz = mL * 0.000033814;
    let pt = mL * 0.0000175975;
    let qt = mL * 0.00000879877;
    let gal = mL * 0.00000264172;
    
    LInp.value = L;
    cmCubeInp.value = cmCube;
    mCubeInp.value = mCube;
    inCubeInp.value = inCube;
    flOzInp.value = flOz;
    ptInp.value = pt;
    qtInp.value = qt;
    galInp.value = gal;
};

LInp.oninput = () => {
    let L = parseFloat(LInp.value);
    let mL = L * 1000;
    let cmCube = L * 1000;
    let mCube = L * 0.001;
    let inCube = L * 61.0237;
    let flOz = L * 33.814;
    let pt = L * 1.75975;
    let qt = L * 0.879877;
    let gal = L * 0.264172;
    
    mLInp.value = mL;
    cmCubeInp.value = cmCube;
    mCubeInp.value = mCube;
    inCubeInp.value = inCube;
    flOzInp.value = flOz;
    ptInp.value = pt;
    qtInp.value = qt;
    galInp.value = gal;
};

cmCubeInp.oninput = () => {
    let cmCube = parseFloat(cmCubeInp.value);
    let mL = cmCube * 1000000;
    let L = cmCube * 1000;
    let mCube = cmCube * 0.000001;
    let inCube = cmCube * 61023.7;
    let flOz = cmCube * 33814;
    let pt = cmCube * 1759.75;
    let qt = cmCube * 879.877;
    let gal = cmCube * 264.172;
    
    mLInp.value = mL;
    LInp.value = L;
    mCubeInp.value = mCube;
    inCubeInp.value = inCube;
    flOzInp.value = flOz;
    ptInp.value = pt;
    qtInp.value = qt;
    galInp.value = gal;
};

mCubeInp.oninput = () => {
    let mCube = parseFloat(mCubeInp.value);
    let mL = mCube * 1000000;
    let L = mCube * 1000;
    let cmCube = mCube * 1000000;
    let inCube = mCube * 61023.7;
    let flOz = mCube * 33814;
    let pt = mCube * 1759.75;
    let qt = mCube * 879.877;
    let gal = mCube * 264.172;
    
    mLInp.value = mL;
    LInp.value = L;
    cmCubeInp.value = cmCube;
    inCubeInp.value = inCube;
    flOzInp.value = flOz;
    ptInp.value = pt;
    qtInp.value = qt;
    galInp.value = gal;
};

inCubeInp.oninput = () => {
    let inCube = parseFloat(inCubeInp.value);
    let mL = inCube * 16387.1;
    let L = inCube * 16.3871;
    let cmCube = inCube * 0.0163871;
    let mCube = inCube * 0.0000163871;
    let flOz = inCube * 0.554113;
    let pt = inCube * 0.0288416;
    let qt = inCube * 0.0144206;
    let gal = inCube * 0.00360465;
    
    mLInp.value = mL;
    LInp.value = L;
    cmCubeInp.value = cmCube;
    mCubeInp.value = mCube;
    flOzInp.value = flOz;
    ptInp.value = pt;
    qtInp.value = qt;
    galInp.value = gal;
};

flOzInp.oninput = () => {
    let flOz = parseFloat(flOzInp.value);
    let mL = flOz * 29.5735;
    let L = flOz * 0.0295735;
    let cmCube = flOz * 29.5735;
    let mCube = flOz * 0.0000295735;
    let inCube = flOz * 1.80469;
    let pt = flOz * 0.0625;
    let qt = flOz * 0.03125;
    let gal = flOz * 0.0078125;
    
    mLInp.value = mL;
    LInp.value = L;
    cmCubeInp.value = cmCube;
    mCubeInp.value = mCube;
    inCubeInp.value = inCube;
    ptInp.value = pt;
    qtInp.value = qt;
    galInp.value = gal;
};

ptInp.oninput = () => {
    let pt = parseFloat(ptInp.value);
    let mL = pt * 568.261;
    let L = pt * 0.568261;
    let cmCube = pt * 568.261;
    let mCube = pt * 0.000568261;
    let inCube = pt * 34.6774;
    let flOz = pt * 16;
    let qt = pt * 0.5;
    let gal = pt * 0.125;
    
    mLInp.value = mL;
    LInp.value = L;
    cmCubeInp.value = cmCube;
    mCubeInp.value = mCube;
    inCubeInp.value = inCube;
    flOzInp.value = flOz;
    qtInp.value = qt;
    galInp.value = gal;
};

qtInp.oninput = () => {
    let qt = parseFloat(qtInp.value);
    let mL = qt * 1136.52;
    let L = qt * 1.13652;
    let cmCube = qt * 1136.52;
    let mCube = qt * 0.00113652;
    let inCube = qt * 69.3549;
    let flOz = qt * 32;
    let pt = qt * 2;
    let gal = qt * 0.25;
    
    mLInp.value = mL;
    LInp.value = L;
    cmCubeInp.value = cmCube;
    mCubeInp.value = mCube;
    inCubeInp.value = inCube;
    flOzInp.value = flOz;
    ptInp.value = pt;
    galInp.value = gal;
};

galInp.oninput = () => {
    let gal = parseFloat(galInp.value);
    let mL = gal * 3785.41;
    let L = gal * 3.78541;
    let cmCube = gal * 3785.41;
    let mCube = gal * 0.00378541;
    let inCube = gal * 231;
    let flOz = gal * 128;
    let pt = gal * 8;
    let qt = gal * 4;
    
    mLInp.value = mL;
    LInp.value = L;
    cmCubeInp.value = cmCube;
    mCubeInp.value = mCube;
    inCubeInp.value = inCube;
    flOzInp.value = flOz;
    ptInp.value = pt;
    qtInp.value = qt;
};

// Temperature
const celsiusInp = document.querySelector('.celsius-input');
const fahrenheitInp = document.querySelector('.fahrenheit-input');
const kelvinInp = document.querySelector('.kelvin-input');

celsiusInp.oninput = () => {
    let celsius = parseFloat(celsiusInp.value);
    let fahrenheit = (celsius * 9/5) + 32;
    let kelvin = celsius + 273.15;
    
    fahrenheitInp.value = fahrenheit;
    kelvinInp.value = kelvin;
};

fahrenheitInp.oninput = () => {
    let fahrenheit = parseFloat(fahrenheitInp.value);
    let celsius = (fahrenheit - 32) * 5/9;
    let kelvin = (fahrenheit + 459.67) * 5/9;
    
    celsiusInp.value = celsius;
    kelvinInp.value = kelvin;
};

kelvinInp.oninput = () => {
    let kelvin = parseFloat(kelvinInp.value);
    let celsius = kelvin - 273.15;
    let fahrenheit = (kelvin * 9/5) - 459.67;
    
    celsiusInp.value = celsius;
    fahrenheitInp.value = fahrenheit;
};

// Time
const psInp = document.querySelector('.ps-input');
const nsInp = document.querySelector('.ns-input');
const usInp = document.querySelector('.us-input');
const msInp = document.querySelector('.ms-input');
const sInp = document.querySelector('.s-input');
const minInp = document.querySelector('.min-input');
const hrInp = document.querySelector('.hr-input');
const dayInp = document.querySelector('.day-input');
const wkInp = document.querySelector('.wk-input');
const moInp = document.querySelector('.mo-input');
const yrInp = document.querySelector('.yr-input');

psInp.oninput = () => {
    let picoseconds = parseFloat(psInp.value);
    nsInp.value = picoseconds / 1000;
    usInp.value = picoseconds / 1e6;
    msInp.value = picoseconds / 1e9;
    sInp.value = picoseconds / 1e12;
    minInp.value = picoseconds / 6e13;
    hrInp.value = picoseconds / 3.6e15;
    dayInp.value = picoseconds / 8.64e16;
    wkInp.value = picoseconds / 6.048e17;
    moInp.value = picoseconds / 2.628e18;
    yrInp.value = picoseconds / 3.154e19;
};

nsInp.oninput = () => {
    let nanoseconds = parseFloat(nsInp.value);
    psInp.value = nanoseconds * 1e3;
    usInp.value = nanoseconds / 1e3;
    msInp.value = nanoseconds / 1e6;
    sInp.value = nanoseconds / 1e9;
    minInp.value = nanoseconds / 6e10;
    hrInp.value = nanoseconds / 3.6e12;
    dayInp.value = nanoseconds / 8.64e13;
    wkInp.value = nanoseconds / 6.048e14;
    moInp.value = nanoseconds / 2.628e15;
    yrInp.value = nanoseconds / 3.154e16;
};

usInp.oninput = () => {
    let microseconds = parseFloat(usInp.value);
    psInp.value = microseconds * 1e6;
    nsInp.value = microseconds * 1e3;
    msInp.value = microseconds / 1e3;
    sInp.value = microseconds / 1e6;
    minInp.value = microseconds / 6e7;
    hrInp.value = microseconds / 3.6e9;
    dayInp.value = microseconds / 8.64e10;
    wkInp.value = microseconds / 6.048e11;
    moInp.value = microseconds / 2.628e12;
    yrInp.value = microseconds / 3.154e13;
};

msInp.oninput = () => {
    let milliseconds = parseFloat(msInp.value);
    psInp.value = milliseconds * 1e9;
    nsInp.value = milliseconds * 1e6;
    usInp.value = milliseconds * 1e3;
    sInp.value = milliseconds / 1e3;
    minInp.value = milliseconds / 6e4;
    hrInp.value = milliseconds / 3.6e6;
    dayInp.value = milliseconds / 8.64e7;
    wkInp.value = milliseconds / 6.048e8;
    moInp.value = milliseconds / 2.628e9;
    yrInp.value = milliseconds / 3.154e10;
};


sInp.oninput = () => {
    let seconds = parseFloat(sInp.value);
    psInp.value = seconds * 1e12;
    nsInp.value = seconds * 1e9;
    usInp.value = seconds * 1e6;
    msInp.value = seconds * 1e3;
    minInp.value = seconds / 60;
    hrInp.value = seconds / 3600;
    dayInp.value = seconds / 86400;
    wkInp.value = seconds / 604800;
    moInp.value = seconds / 2.628e6;
    yrInp.value = seconds / 3.154e7;
};

minInp.oninput = () => {
    let minutes = parseFloat(minInp.value);
    psInp.value = minutes * 6e13;
    nsInp.value = minutes * 6e10;
    usInp.value = minutes * 6e7;
    msInp.value = minutes * 6e4;
    sInp.value = minutes * 60;
    hrInp.value = minutes / 60;
    dayInp.value = minutes / 1440;
    wkInp.value = minutes / 10080;
    moInp.value = minutes / 43800;
    yrInp.value = minutes / 525600;
};

hrInp.oninput = () => {
    let hours = parseFloat(hrInp.value);
    psInp.value = hours * 3.6e15;
    nsInp.value = hours * 3.6e12;
    usInp.value = hours * 3.6e9;
    msInp.value = hours * 3.6e6;
    sInp.value = hours * 3600;
    minInp.value = hours * 60;
    dayInp.value = hours / 24;
    wkInp.value = hours / 168;
    moInp.value = hours / 730.001;
    yrInp.value = hours / 8760;
};

dayInp.oninput = () => {
    let days = parseFloat(dayInp.value);
    psInp.value = days * 8.64e16;
    nsInp.value = days * 8.64e13;
    usInp.value = days * 8.64e10;
    msInp.value = days * 8.64e7;
    sInp.value = days * 86400;
    minInp.value = days * 1440;
    hrInp.value = days * 24;
    wkInp.value = days / 7;
    moInp.value = days / 30.4375;
    yrInp.value = days / 365.25;
};

wkInp.oninput = () => {
    let weeks = parseFloat(wkInp.value);
    psInp.value = weeks * 6.048e17;
    nsInp.value = weeks * 6.048e14;
    usInp.value = weeks * 6.048e11;
    msInp.value = weeks * 6.048e8;
    sInp.value = weeks * 604800;
    minInp.value = weeks * 10080;
    hrInp.value = weeks * 168;
    dayInp.value = weeks * 7;
    moInp.value = weeks / 4.3452;
    yrInp.value = weeks / 52.143;
};

moInp.oninput = () => {
    let months = parseFloat(moInp.value);
    psInp.value = months * 2.628e18;
    nsInp.value = months * 2.628e15;
    usInp.value = months * 2.628e12;
    msInp.value = months * 2.628e9;
    sInp.value = months * 2.628e6;
    minInp.value = months * 43800;
    hrInp.value = months * 730;
    dayInp.value = months * 30.4375;
    wkInp.value = months * 4.3452;
    yrInp.value = months / 12;
};

yrInp.oninput = () => {
    let years = parseFloat(yrInp.value);
    psInp.value = years * 3.154e19;
    nsInp.value = years * 3.154e16;
    usInp.value = years * 3.154e13;
    msInp.value = years * 3.154e10;
    sInp.value = years * 3.154e7;
    minInp.value = years * 525600;
    hrInp.value = years * 8760;
    dayInp.value = years * 365.25;
    wkInp.value = years * 52.143;
    moInp.value = years * 12;
};


// Data Storage
const bitInp = document.querySelector('.bit-input');
const byteInp = document.querySelector('.byte-input');
const kilobyteInp = document.querySelector('.kilobyte-input');
const megabyteInp = document.querySelector('.megabyte-input');
const gigabyteInp = document.querySelector('.gigabyte-input');
const terabyteInp = document.querySelector('.terabyte-input');
const petabyteInp = document.querySelector('.petabyte-input');
const exabyteInp = document.querySelector('.exabyte-input');
const zettabyteInp = document.querySelector('.zettabyte-input');
const yottabyteInp = document.querySelector('.yottabyte-input');

bitInp.oninput = () => {
    let bit = parseFloat(bitInp.value);
    let byte = bit / 8;
    let kilobyte = byte / 1024;
    let megabyte = kilobyte / 1024;
    let gigabyte = megabyte / 1024;
    let terabyte = gigabyte / 1024;
    let petabyte = terabyte / 1024;
    let exabyte = petabyte / 1024;
    let zettabyte = exabyte / 1024;
    let yottabyte = zettabyte / 1024;

    byteInp.value = byte;
    kilobyteInp.value = kilobyte;
    megabyteInp.value = megabyte;
    gigabyteInp.value = gigabyte;
    terabyteInp.value = terabyte;
    petabyteInp.value = petabyte;
    exabyteInp.value = exabyte;
    zettabyteInp.value = zettabyte;
    yottabyteInp.value = yottabyte;
};

byteInp.oninput = () => {
    let byte = parseFloat(byteInp.value);
    let bit = byte * 8;
    let kilobyte = byte / 1024;
    let megabyte = kilobyte / 1024;
    let gigabyte = megabyte / 1024;
    let terabyte = gigabyte / 1024;
    let petabyte = terabyte / 1024;
    let exabyte = petabyte / 1024;
    let zettabyte = exabyte / 1024;
    let yottabyte = zettabyte / 1024;

    bitInp.value = bit;
    kilobyteInp.value = kilobyte;
    megabyteInp.value = megabyte;
    gigabyteInp.value = gigabyte;
    terabyteInp.value = terabyte;
    petabyteInp.value = petabyte;
    exabyteInp.value = exabyte;
    zettabyteInp.value = zettabyte;
    yottabyteInp.value = yottabyte;
};

kilobyteInp.oninput = () => {
    let kilobyte = parseFloat(kilobyteInp.value);
    let byte = kilobyte * 1024;
    let bit = byte * 8;
    let megabyte = kilobyte / 1024;
    let gigabyte = megabyte / 1024;
    let terabyte = gigabyte / 1024;
    let petabyte = terabyte / 1024;
    let exabyte = petabyte / 1024;
    let zettabyte = exabyte / 1024;
    let yottabyte = zettabyte / 1024;

    byteInp.value = byte;
    bitInp.value = bit;
    megabyteInp.value = megabyte;
    gigabyteInp.value = gigabyte;
    terabyteInp.value = terabyte;
    petabyteInp.value = petabyte;
    exabyteInp.value = exabyte;
    zettabyteInp.value = zettabyte;
    yottabyteInp.value = yottabyte;
};

megabyteInp.oninput = () => {
    let megabyte = parseFloat(megabyteInp.value);
    let kilobyte = megabyte * 1024;
    let byte = kilobyte * 1024;
    let bit = byte * 8;
    let gigabyte = megabyte / 1024;
    let terabyte = gigabyte / 1024;
    let petabyte = terabyte / 1024;
    let exabyte = petabyte / 1024;
    let zettabyte = exabyte / 1024;
    let yottabyte = zettabyte / 1024;

    byteInp.value = byte;
    kilobyteInp.value = kilobyte;
    bitInp.value = bit;
    gigabyteInp.value = gigabyte;
    terabyteInp.value = terabyte;
    petabyteInp.value = petabyte;
    exabyteInp.value = exabyte;
    zettabyteInp.value = zettabyte;
    yottabyteInp.value = yottabyte;
};

gigabyteInp.oninput = () => {
    let gigabyte = parseFloat(gigabyteInp.value);
    let megabyte = gigabyte * 1024;
    let kilobyte = megabyte * 1024;
    let byte = kilobyte * 1024;
    let bit = byte * 8;
    let terabyte = gigabyte / 1024;
    let petabyte = terabyte / 1024;
    let exabyte = petabyte / 1024;
    let zettabyte = exabyte / 1024;
    let yottabyte = zettabyte / 1024;

    byteInp.value = byte;
    kilobyteInp.value = kilobyte;
    megabyteInp.value = megabyte;
    bitInp.value = bit;
    terabyteInp.value = terabyte;
    petabyteInp.value = petabyte;
    exabyteInp.value = exabyte;
    zettabyteInp.value = zettabyte;
    yottabyteInp.value = yottabyte;
};

terabyteInp.oninput = () => {
    let terabyte = parseFloat(terabyteInp.value);
    let gigabyte = terabyte * 1024;
    let megabyte = gigabyte * 1024;
    let kilobyte = megabyte * 1024;
    let byte = kilobyte * 1024;
    let bit = byte * 8;
    let petabyte = terabyte / 1024;
    let exabyte = petabyte / 1024;
    let zettabyte = exabyte / 1024;
    let yottabyte = zettabyte / 1024;

    byteInp.value = byte;
    kilobyteInp.value = kilobyte;
    megabyteInp.value = megabyte;
    gigabyteInp.value = gigabyte;
    bitInp.value = bit;
    petabyteInp.value = petabyte;
    exabyteInp.value = exabyte;
    zettabyteInp.value = zettabyte;
    yottabyteInp.value = yottabyte;
};

petabyteInp.oninput = () => {
    let petabyte = parseFloat(petabyteInp.value);
    let terabyte = petabyte * 1024;
    let gigabyte = terabyte * 1024;
    let megabyte = gigabyte * 1024;
    let kilobyte = megabyte * 1024;
    let byte = kilobyte * 1024;
    let bit = byte * 8;
    let exabyte = petabyte / 1024;
    let zettabyte = exabyte / 1024;
    let yottabyte = zettabyte / 1024;

	bitInp.value = bit;
    byteInp.value = byte;
    kilobyteInp.value = kilobyte;
    megabyteInp.value = megabyte;
    gigabyteInp.value = gigabyte;
    terabyteInp.value = terabyte;
    exabyteInp.value = exabyte;
    zettabyteInp.value = zettabyte;
    yottabyteInp.value = yottabyte;
};

exabyteInp.oninput = () => {
    let exabyte = parseFloat(exabyteInp.value);
    let petabyte = exabyte * 1024;
    let terabyte = petabyte * 1024;
    let gigabyte = terabyte * 1024;
    let megabyte = gigabyte * 1024;
    let kilobyte = megabyte * 1024;
    let byte = kilobyte * 1024;
    let bit = byte * 8;
    let zettabyte = exabyte / 1024;
    let yottabyte = zettabyte / 1024;
	
	bitInp.value = bit;
    byteInp.value = byte;
    kilobyteInp.value = kilobyte;
    megabyteInp.value = megabyte;
    gigabyteInp.value = gigabyte;
    terabyteInp.value = terabyte;
    petabyteInp.value = petabyte;
    zettabyteInp.value = zettabyte;
    yottabyteInp.value = yottabyte;
};

zettabyteInp.oninput = () => {
    let zettabyte = parseFloat(zettabyteInp.value);
    let exabyte = zettabyte * 1024;
    let petabyte = exabyte * 1024;
    let terabyte = petabyte * 1024;
    let gigabyte = terabyte * 1024;
    let megabyte = gigabyte * 1024;
    let kilobyte = megabyte * 1024;
    let byte = kilobyte * 1024;
    let bit = byte * 8;
    let yottabyte = zettabyte / 1024;
	
	bitInp.value = bit;
    byteInp.value = byte;
    kilobyteInp.value = kilobyte;
    megabyteInp.value = megabyte;
    gigabyteInp.value = gigabyte;
    terabyteInp.value = terabyte;
    petabyteInp.value = petabyte;
    exabyteInp.value = exabyte;
    yottabyteInp.value = yottabyte;
};

yottabyteInp.oninput = () => {
    let yottabyte = parseFloat(yottabyteInp.value);
    let zettabyte = yottabyte * 1024;
    let exabyte = zettabyte * 1024;
    let petabyte = exabyte * 1024;
    let terabyte = petabyte * 1024;
    let gigabyte = terabyte * 1024;
    let megabyte = gigabyte * 1024;
    let kilobyte = megabyte * 1024;
    let byte = kilobyte * 1024;
    let bit = byte * 8;

	bitInp.value = bit;
    byteInp.value = byte;
    kilobyteInp.value = kilobyte;
    megabyteInp.value = megabyte;
    gigabyteInp.value = gigabyte;
    terabyteInp.value = terabyte;
    petabyteInp.value = petabyte;
    exabyteInp.value = exabyte;
    zettabyteInp.value = zettabyte;
};

// About
const githubLink = document.querySelector('.github-anchor');
const facebookLink = document.querySelector('.facebook-anchor');
const instagramLink = document.querySelector('.instagram-anchor');

githubLink.onclick = () => {
	app.OpenUrl("https://github.com/benjaminn1202");
};
facebookLink.onclick = () => {
	app.OpenUrl("https://www.facebook.com/benjaminn1202");
};
instagramLink.onclick = () => {
	app.OpenUrl("https://www.instagram.com/benjaminn1202/");
};