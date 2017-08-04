export const testTransaction1 = {
    id: 11,
    account_id: 111,
    description: 'test transaction 1'
};

export const testTransaction2 = {
    id: 12,
    account_id: 112,
    description: 'test transaction 2'
};

export const testTransaction3 = {
    id: 13,
    account_id: 113,
    description: 'test transaction 3'
};

export const transactions = [testTransaction1, testTransaction2, testTransaction3];

export const paginatedTestTransactions = {
    total: 3,
    per_page: 5,
    current_page: 0,
    last_page: 0,
    next_page_url: '',
    prev_page_url: '',
    from: 0,
    to: 3,
    data: transactions
};
