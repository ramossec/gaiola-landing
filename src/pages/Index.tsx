import { Shield, Building, Car } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Gaiola Seguros</h1>
          <nav className="hidden md:flex gap-6">
            <a href="#servicos" className="text-gray-600 hover:text-primary transition-colors">Serviços</a>
            <a href="#contato" className="text-gray-600 hover:text-primary transition-colors">Contato</a>
          </nav>
          <Button className="bg-secondary hover:bg-secondary/90">
            Fale Conosco
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Protegendo o que importa para você
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Soluções completas em seguros e consórcios para sua tranquilidade e realização dos seus sonhos.
          </p>
          <div className="flex gap-4 justify-center">
            <Button className="bg-secondary hover:bg-secondary/90 text-lg px-8">
              Solicitar Cotação
            </Button>
            <Button variant="outline" className="text-lg px-8">
              Saiba Mais
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-primary mb-16">
            Nossos Serviços
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Shield className="w-12 h-12 mx-auto mb-6 text-secondary" />
              <h4 className="text-xl font-semibold mb-4">Corretagem de Seguro</h4>
              <p className="text-gray-600">
                Proteção completa para você, sua família e seu patrimônio com as melhores seguradoras.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Building className="w-12 h-12 mx-auto mb-6 text-secondary" />
              <h4 className="text-xl font-semibold mb-4">Consórcio Imobiliário</h4>
              <p className="text-gray-600">
                Realize o sonho da casa própria com as melhores condições do mercado.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Car className="w-12 h-12 mx-auto mb-6 text-secondary" />
              <h4 className="text-xl font-semibold mb-4">Consórcio Automobilístico</h4>
              <p className="text-gray-600">
                Planejamento inteligente para a conquista do seu veículo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-primary mb-8">
              Vamos conversar?
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Entre em contato conosco para uma consultoria personalizada e descubra as melhores opções para você.
            </p>
            <Button className="bg-secondary hover:bg-secondary/90 text-lg px-8">
              Agendar Conversa
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Gaiola Seguros</h4>
              <p className="text-gray-300">
                Sua segurança é nossa prioridade.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Contato</h4>
              <p className="text-gray-300">
                contato@gaiolaseguros.com.br<br />
                (11) 9999-9999
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Horário</h4>
              <p className="text-gray-300">
                Segunda a Sexta: 9h às 18h<br />
                Sábado: 9h às 13h
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>© 2024 Gaiola Seguros. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;