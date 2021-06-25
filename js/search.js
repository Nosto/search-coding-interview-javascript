import { renderSidebar, renderContent, bindFacetChange } from './rendering.js'

export async function loadData() {
    const products = await fetch('https://itunes.apple.com/us/rss/topalbums/limit=100/json').then(v => v.json())
    return {
        documents: products.feed.entry
    }
}

export function executeSearch(searchQuery, filters, data) {
    console.log(`Searching for "${searchQuery}" with filters`, filters)

    const result = search(searchQuery, filters, data)

    renderSidebar(result.facets, filters)
    renderContent(result.documents)
    bindFacetChange(newFilters => {
        executeSearch(searchQuery, newFilters, data)
    })
}

export function search(searchQuery, filters, data) {
    return {
        // TODO: return only relevant documents
        documents: data.documents,
        // TODO: generate facets from matched documents data
        facets: {
            price: [
                {
                    value: '0 - 5',
                    count: 23
                },
                {
                    value: '5 - 10',
                    count: 43
                }
            ],
            year: [
                {
                    value: '2015',
                    count: 34
                },
                {
                    value: '2000',
                    count: 5
                }
            ]
        }
        
    }
}
