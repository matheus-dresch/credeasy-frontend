import http from "../http";

export default class EmprestimoService {
    static async lista(query = {}) {
        const res = await http.get('clientes/@eu/emprestimos', { params: query });

        return res.data;
    }

    static async detalha(id, query = {}) {
        const res = await http.get(`emprestimos/${id}`, { params: query });
        return res.data;
    }

    static async parcelas(id) {
        const res = await http.get(`emprestimos/${id}/parcelas`);
        return res.data;
    }

    static async pagaParcela(id) {
        const res = await http.patch(`parcela/${id}`)
        return res.data.data.parcela;
    }

    static async registra(values) {
        const res = await http.post(`emprestimos`, values);
        return res.data;
    }

    static async analisa(aprovado, id, taxa) {
        const res = await http.patch(`emprestimos/${id}`, { status: aprovado, taxa: taxa })
        return res.data;
    }
}