import SimpleMaskMoney from 'simple-mask-money/lib/simple-mask-money';

export default {
    cpfMask(input) {

        let cpf = input.value

        cpf = cpf.replace(/\D/g, '')

        cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
        cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2')
        cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2')

        input.value = cpf
    },

    cepMask(input) {

        let cep = input.value

        cep = cep.replace(/\D/g, '')
        cep = cep.replace(/(\d{5})(\d{3})/, '$1-$2')

        input.value = cep
    },

    celularMask(input) {
        let phone = input.value

        phone = phone.replace(/\D/g, "");
        phone = phone.replace(/^(\d{2})(\d)/, "($1) $2");
        phone = phone.replace(/\s(\d{1})/, " $1 ")
        phone = phone.replace(/(\d)(\d{4})$/, "$1-$2");

        input.value = phone
    },

    rendaMask(input) {

        console.log('oi');

        SimpleMaskMoney.setMask(input, {
            prefix: 'R$ ',
            fixed: true,
            fractionDigits: 2,
            decimalSeparator: ',',
            thousandsSeparator: '.',
            cursor: 'end',
        })
    }
}