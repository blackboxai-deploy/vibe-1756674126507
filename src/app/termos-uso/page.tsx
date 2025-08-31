export default function TermosUso() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Simples */}
      <div className="bg-blue-900 text-white py-3">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex space-x-8">
            <a href="/" className="hover:text-blue-200">Voltar ao Site</a>
          </div>
          <span className="font-medium">Governo Federal</span>
        </div>
      </div>

      <header className="bg-white py-6 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center space-x-6">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Gov.br_logo.svg/1200px-Gov.br_logo.svg.png"
              alt="Gov.br"
              className="h-12"
            />
            <div>
              <h1 className="text-xl font-bold text-blue-900">Termos de Uso</h1>
              <p className="text-gray-600">Programa Brasil Saudável</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Termos de Uso</h1>
          <p className="text-gray-600 mb-8">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Aceitação dos Termos</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ao acessar e usar este site, você concorda em cumprir estes Termos de Uso e todas as leis e 
              regulamentos aplicáveis. Se você não concordar com algum destes termos, não deve usar este site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Descrição do Serviço</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Este site oferece informações e serviços relacionados ao Programa Brasil Saudável, um programa 
              federal de apoio à alimentação saudável, conforme Lei Federal n° 14.628/2025.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Elegibilidade e Requisitos</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Ser responsável familiar com CPF válido</li>
              <li>Atender aos critérios de elegibilidade estabelecidos em lei</li>
              <li>Fornecer informações verdadeiras e atualizadas</li>
              <li>Concordar com o pagamento da taxa administrativa de R$ 47,00</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Taxa Administrativa</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Conforme Art. 12 da Lei Federal n° 14.628/2025, é obrigatório o pagamento de taxa administrativa 
              única de R$ 47,00 para cobertura dos custos de:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Processamento nos sistemas federais integrados</li>
              <li>Produção e personalização do cartão físico</li>
              <li>Logística de entrega via Correios</li>
              <li>Ativação do sistema de créditos mensais</li>
              <li>Manutenção da infraestrutura tecnológica</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Uso Adequado</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Você concorda em:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Usar o site apenas para fins legítimos</li>
              <li>Não fornecer informações falsas ou enganosas</li>
              <li>Não tentar acessar sistemas não autorizados</li>
              <li>Respeitar direitos de propriedade intelectual</li>
              <li>Não usar o site para atividades ilegais</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Propriedade Intelectual</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Todo o conteúdo deste site, incluindo textos, imagens, logos e design, são propriedade 
              do Governo Federal e estão protegidos por leis de propriedade intelectual.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitação de Responsabilidade</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              O Ministério do Desenvolvimento e Assistência Social não se responsabiliza por:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Interrupções temporárias do serviço</li>
              <li>Problemas técnicos de terceiros</li>
              <li>Uso inadequado das informações fornecidas</li>
              <li>Decisões tomadas com base nas informações do site</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Modificações</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Reservamo-nos o direito de modificar estes termos a qualquer momento. 
              As alterações entrarão em vigor imediatamente após a publicação no site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Lei Aplicável</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Estes termos são regidos pelas leis da República Federativa do Brasil. 
              Qualquer disputa será resolvida nos tribunais competentes do Distrito Federal.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contato</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Para dúvidas sobre estes termos:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>E-mail: juridico@mds.gov.br</li>
              <li>Telefone: 135</li>
              <li>Endereço: Esplanada dos Ministérios, Bloco A, Brasília-DF</li>
            </ul>
          </section>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Ministério do Desenvolvimento e Assistência Social - Governo Federal
          </p>
        </div>
      </footer>
    </div>
  );
}