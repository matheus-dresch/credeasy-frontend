export function formataData(data, horas = false) {
    if (!data) return '--/--/----'

    if (! horas) {
        return (new Date(data)).toLocaleDateString('pt-BR')
    } else {
        return (new Date(data)).toLocaleString('pt-BR')
    }
}
export function formataDinheiro(numero) {
    return Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })
        .format(numero)
}