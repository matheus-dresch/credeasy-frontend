export function formataData(data) {
    if (!data) return '--/--/----'

    return (new Date(data)).toLocaleDateString("pt-BR")
}
export function formataDinheiro(numero) {
    return Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })
        .format(numero)
}