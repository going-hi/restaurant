export class ReturnPagination {
    items: Object[]
    count: number
    pageCount: number
    constructor(items: Object[], totalCount: number, selectCount: number) {
        this.items = items
        this.count = totalCount
        this.pageCount = Math.ceil(totalCount / selectCount)
    }
} 