const changeFirstListItem: (value: string) => void = (value: string) => {
    const ul: HTMLCollectionOf<HTMLUListElement> = document.getElementsByTagName('ul');

    const firstItem: HTMLUListElement | null = ul.item(0);

    if (firstItem) {
        firstItem.textContent = value;
    }
};