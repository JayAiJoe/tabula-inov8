const Pagination = () => {

    const pages = Array.from({length: 10}, (_, i) => i + 1);

    return(
        <nav className="pagination is-centered mb-7 is-rounded" role="navigation" aria-label="pagination">
            <ul className="pagination-list">
                {pages.map((page, index) => (
                    <li key={index}><a className="pagination-link" aria-label="Goto page 45">{page}</a></li>
                ))}
            </ul>
        </nav>
    );
}

export default Pagination;