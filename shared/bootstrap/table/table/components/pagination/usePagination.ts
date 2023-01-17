import {useEffect, useState} from 'react'

export function usePagination(
    elements: number,
    elementForPage: number,
    page: number,
    goPage: (page: number) => void
) {
    const [pages, setPages] = useState(1)
    useEffect(() => {
        setPages(Math.ceil(elements / elementForPage))
    }, [elements, elementForPage])
    const changePage = (up: boolean = false) => goPage(up ? page + 1 : page - 1)
    let items = []
    for (let number = 1; number <= pages; number++) {
        items.push(number)
    }
    return {
        changePage,
        pages,
        items
    }
}
