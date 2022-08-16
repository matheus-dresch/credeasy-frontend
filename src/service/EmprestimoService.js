import http from "../http";

export default class EmprestimoService {
    static async lista(query = {}) {
        const res = await http.get('emprestimos', { params: query });

        return res.data;
    }

    static async detalha(id) {
        const res = await http.get(`emprestimos/${id}`);
        return res.data;
    }

    static async parcelas(id) {
        const res = await http.get(`emprestimos/${id}/parcelas`);
        return res.data;
    }

    static async pagaParcela(id) {
        const res = await http.patch(`parcela`, { parcela: id })
        return res.data.parcela;
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