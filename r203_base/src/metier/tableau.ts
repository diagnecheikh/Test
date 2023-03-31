export function tab (date: string): Array<number> {
    let tab = [];
    let dateTab = date.split("/");
    for (let i = 0; i < dateTab.length; i++) {
        tab.push(parseInt(dateTab[i]));
    }
    return tab;
}
