var tester = 'here';

function testehere() {
    return new Promise((resolve, reject) => {
        if (tester == 'here') {
            resolve({
                sucess: true,
                msg: 'Correto!'
            })
        } else {
            reject({
                sucess: false,
                msg: 'Incorreto!'
            })
        }
    })
}

async function ready() {
    try {
        const feito = await testehere('');
    } catch (err) {
        console.log(err.msg);
    }
}