
async function selectData (query){
    let sql = 'SELECT * FROM employees';
    const users = await query(sql);
    return users;
}

module.exports = selectData;