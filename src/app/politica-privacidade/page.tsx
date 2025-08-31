export default function PoliticaPrivacidade() {
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
              <h1 className="text-xl font-bold text-blue-900">Política de Privacidade</h1>
              <p className="text-gray-600">Programa Brasil Saudável</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Política de Privacidade</h1>
          <p className="text-gray-600 mb-8">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Informações Gerais</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais 
              no site do Programa Brasil Saudável, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018) 
              e demais legislações aplicáveis.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Dados Coletados</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Coletamos os seguintes tipos de informações:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Dados de Identificação:</strong> CPF, nome completo, data de nascimento</li>
              <li><strong>Dados de Contato:</strong> Endereço de e-mail, telefone</li>
              <li><strong>Dados Socioeconômicos:</strong> Renda declarada, informações familiares</li>
              <li><strong>Dados Técnicos:</strong> Endereço IP, informações do dispositivo, cookies</li>
              <li><strong>Dados de Navegação:</strong> Páginas visitadas, tempo de permanência, interações</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Finalidade do Tratamento</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Seus dados são utilizados para:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Verificar elegibilidade ao Programa Brasil Saudável</li>
              <li>Processar solicitações de emissão de cartão alimentar</li>
              <li>Realizar pagamentos de taxas administrativas</li>
              <li>Comunicar sobre o status do benefício</li>
              <li>Cumprir obrigações legais e regulamentares</li>
              <li>Melhorar nossos serviços e experiência do usuário</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Base Legal</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              O tratamento de dados pessoais tem como base legal:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Consentimento do titular dos dados</li>
              <li>Cumprimento de obrigação legal (Lei 14.628/2025)</li>
              <li>Execução de políticas públicas pelo poder público</li>
              <li>Interesse legítimo para prestação de serviços</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Compartilhamento de Dados</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Seus dados podem ser compartilhados com:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Órgãos governamentais competentes (Receita Federal, CadÚnico)</li>
              <li>Prestadores de serviços de pagamento (para processamento PIX)</li>
              <li>Empresas de logística (para entrega de cartões)</li>
              <li>Autoridades legais, quando exigido por lei</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Segurança de Dados</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Implementamos medidas técnicas e organizacionais para proteger seus dados:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Criptografia SSL/TLS para transmissão de dados</li>
              <li>Sistemas de autenticação e controle de acesso</li>
              <li>Monitoramento contínuo de segurança</li>
              <li>Backups seguros e recuperação de dados</li>
              <li>Treinamento de equipe em proteção de dados</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Seus Direitos (LGPD)</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Você tem direito a:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Confirmação da existência de tratamento de dados</li>
              <li>Acesso aos dados pessoais</li>
              <li>Correção de dados incompletos, inexatos ou desatualizados</li>
              <li>Anonimização, bloqueio ou eliminação de dados</li>
              <li>Portabilidade dos dados</li>
              <li>Eliminação dos dados tratados com consentimento</li>
              <li>Revogação do consentimento</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Cookies e Tecnologias</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Utilizamos cookies e tecnologias similares para melhorar sua experiência. 
              Você pode gerenciar preferências de cookies nas configurações do seu navegador.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Retenção de Dados</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Mantemos seus dados pelo tempo necessário para cumprir as finalidades descritas, 
              respeitando prazos legais de retenção conforme legislação aplicável.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contato</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Para exercer seus direitos ou esclarecer dúvidas sobre esta política:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>E-mail: privacidade@mds.gov.br</li>
              <li>Telefone: 135 (Central de Atendimento)</li>
              <li>Ouvidoria: ouvidoria@mds.gov.br</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Alterações</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Esta política pode ser atualizada periodicamente. Recomendamos verificar regularmente 
              esta página para acompanhar eventuais mudanças.
            </p>
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