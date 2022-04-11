
async function insertData(query){
    let sql = 'INSERT INTO employees (id, name, age, city) VALUES?';
    let arr= [  
        ['2', 'Bharat Kumar', '25', 'Mumbai'],  
        ['3', 'John Cena', '35', 'Las Vegas'],  
        ['4', 'Ryan Cook', '15', 'CA']  
        ];  
    const users = await query(sql,[arr]);
    return users;
}

module.exports = insertData;