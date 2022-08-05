import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Emprestimos from "../views/emprestimo/ListaEmprestimo.vue";
import Entrar from "../views/EntrarView.vue";
import Cadastro from "../views/CadastroView.vue";
import FormularioEmprestimo from "../views/emprestimo/FormularioEmprestimo.vue";
import DetalhesEmprestimo from "../views/emprestimo/DetalhesEmprestimo.vue";
import AnalisarEmprestimo from "../views/emprestimo/AnalisarEmprestimo.vue";
import ParcelasEmprestimo from "../views/emprestimo/ParcelasEmprestimo.vue";
import ClienteView from "../views/ClienteView.vue";
import NotFoundView from "../views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/entrar",
      name: "entrar",
      component: Entrar,
    },
    {
      path: "/cadastro",
      name: "cadastro",
      component: Cadastro,
    },
    {
      path: "/emprestimos",
      name: "emprestimos",
      component: Emprestimos,
    },
    {
      path: "/emprestimos/solicitar",
      name: "novo-emprestimo",
      component: FormularioEmprestimo,
    },
    {
      path: "/emprestimos/:id",
      name: "detalhar-emprestimo",
      component: DetalhesEmprestimo,
    },
    {
      path: "/emprestimos/:id/analisar",
      name: "analisar-emprestimo",
      component: AnalisarEmprestimo,
    },
    {
      path: "/emprestimos/:id/parcelas",
      name: "parcelas-emprestimo",
      component: ParcelasEmprestimo,
    },
    {
      path: "/cliente",
      name: "cliente",
      component: ClienteView,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFoundView,
    }
  ],
});

export default router;
