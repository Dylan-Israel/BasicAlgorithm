function chunkyMonkey(arr: any[], size: number): any[][] {
    const nested = [];
    let count = 0;

    while (count < arr.length) {
        nested.push(arr.slice(count, count += size));
    }

    return nested;
}