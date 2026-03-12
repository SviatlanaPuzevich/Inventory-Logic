export function isSortedAscending(array: number[]): boolean {

    for (let i = 1; i < array.length; i++) {
        if(array[i] < array[i-1]) return false;
    }
    return true;
}