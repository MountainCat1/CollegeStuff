/**
 * Zdefiniuj funkcję, która zwraca część wspólną dwóch tablic bez powtórzeń.
 * Wynik funkcja należy zwrócić jako zbiór (obiekt klasy Set);
 * Przykład
 * const a1 = ["adam", "ewa", "karol", "beata", "ewa"];
 * const a2 = ["karolina", "eliza", "tomek", "ewa", "karol", "eliza"];
 * const un = union(a1, a2);
 * console.log(un)
 * Set(2) {size: 2, ewa, karol}
 */

function union(a1, a2) {
    const a2Set = new Set(a2);
    const retSet = new Set();

    //     const set = a1.filter(x => a2.includes(x));

    a1.filter(x => a2Set.has(x))
        .forEach(x => {
            if (!retSet.has(x))
                retSet.add(x)
        })

    return retSet;
}

const a1 = [...Array(100_000).keys()];
const a2 = [...Array(100_000).fill(100_001)];
a2[1000] = 2;
a2[10000] = 1;
a2[10001] = 3;
a2[90_000] = 0;
const start = performance.now();
const r = union(a2, a1);
const end = performance.now();
console.log(end - start);
try {
    if (r.has(3) && r.has(1) && r.has(0) && r.size === 4 && r.has(2)) {
        console.log("Test 21 passed");
    } else {
        console.log("Test 21 failed");
    }
} catch (e) {
    console.log("Test 21 failed");
}
if (end - start < 20) {
    console.log("Test 22 passed");
} else {
    console.log("Test 22 failed");
}