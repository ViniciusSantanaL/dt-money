import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
          <SearchForm />
          <TransactionsTable>
            <tbody>
              <tr>
                <td width="50%">Desenvolvimento de site</td>
                <td>R$ 12.000,00</td>
                <td>Venda</td>
                <td>13/04/2002</td>
              </tr>
              <tr>
                <td width="50%">Desenvolvimento de site</td>
                <td>- R$ 52,00</td>
                <td>Venda</td>
                <td>13/04/2002</td>
              </tr>
            </tbody>
          </TransactionsTable>
        </TransactionsContainer>
    </div>
  )
}