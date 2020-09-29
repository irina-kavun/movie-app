const itemsPerPage = 10;

export const calcPageItems = (currentPage, totalMovies) => {
    let start;
    const total = currentPage * itemsPerPage;

    if (totalMovies < total) {
        const pagesCount = totalMovies % itemsPerPage;
        start = totalMovies - pagesCount + 1;
        return `${start} - ${totalMovies}`;
    }
    start = total - 9;

    return `${start} - ${total}`;
}

export const checkTotalMovies = (currentPage, totalMovies) => {
    const total = currentPage * itemsPerPage;
    return totalMovies < total;
}

export const checkFirstPage = (currentPage) => currentPage === 1;

