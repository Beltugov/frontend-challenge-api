import {makeAutoObservable} from "mobx";

class Repositories {
    list = []
    isLoading: boolean = false
    page: number = 1
    sort: "stars" | "updated" = "updated"
    order: "asc" | "desc" = "asc"

    constructor() {
        makeAutoObservable(this)
    }

    async fetchData(sort= this.sort, order = this.order, page = this.page) {
        this.isLoading = true
        this.sort = sort
        this.order = order
        this.page = page

        try {
            const data = await fetch(`https://api.github.com/search/repositories?q=javascript&sort=${this.sort}&order=${this.order}&page=${this.page}`).then((data) => data.json())
            console.log(data)
            this.list = [...this.list,...data.items]
            console.log(this.list)
        } catch (e) {
            console.log(e)
        } finally {
            this.isLoading = false
        }
    }
}

export default new Repositories()