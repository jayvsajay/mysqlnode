async function selectUnique(query) {
    let sql = 'SELECT * FROM employees WHERE CITY = "Delhi"';
    let users = await query(sql);
    return users;
}

module.exports = selectUnique;