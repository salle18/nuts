export class PaginatedData<T> {
    public total: number = 0;
    public per_page: number = 0;
    public current_page: number = 0;
    public last_page: number = 0;
    public next_page_url: string = '';
    public prev_page_url: string = '';
    from: number = 0;
    to: number = 0;
    data: T[]
}
