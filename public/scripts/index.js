"use strict";
const len = 10000000;
const tab = Array(len);
for (let i = 0; i < len; i++) {
    tab[i] = (Math.round(Math.random() * 10));
}
const logiqueDeTri = (a, b) => {
    if (a > b)
        return -1;
    if (a < b)
        return 1;
    return 0;
};
function bench() {
    const debut = Date.now();
    const tabSort = tab.sort(logiqueDeTri);
    return Date.now() - debut;
}
console.log(bench());
//# sourceMappingURL=index.js.map