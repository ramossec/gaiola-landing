import { Shield, Building, Car, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { ContactFormModal } from "@/components/ContactFormModal";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-200">
      {/* Header */}
      <header className="fixed w-full bg-white/90 dark:bg-gray-950 backdrop-blur-sm z-50 border-b dark:border-black">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/logo.png" 
              alt="Gaiola Seguros" 
              className="max-h-20 rounded-lg"
            />
            <h1 className="text-lg md:text-4xl font-bold text-gray-800 dark:text-secondary">Gaiola Seguros</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#servicos" className="text-primary dark:text-white hover:text-secondary transition-colors">Serviços</a>
            <a href="#contato" className="text-primary dark:text-white hover:text-secondary transition-colors">Contato</a>
          </nav>
          <div className="flex gap-4 items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-gray-700" />
              )}
            </Button>
            <ContactFormModal value={'Fale Conosco'} />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-primary dark:text-white mb-6">
            Protegendo o que importa para você
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Soluções completas em seguros e consórcios para sua tranquilidade e realização dos seus sonhos.
          </p>
          <div className="flex gap-4 justify-center">
            <Button className="bg-secondary hover:bg-secondary/90 text-primary text-lg px-8">
              Solicitar Cotação
            </Button>
            <Button variant="outline" className="text-lg px-8 border-secondary text-secondary hover:bg-secondary/10 dark:border-secondary dark:text-secondary">
              Saiba Mais
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-primary dark:text-white mb-16">
            Nossos Serviços
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center
            transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <Shield className="w-12 h-12 mx-auto mb-6 text-secondary" />
              <h4 className="text-xl font-semibold mb-4 text-primary dark:text-white">Corretagem de Seguro</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Proteção completa para você, sua família e seu patrimônio com as melhores seguradoras.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center
            transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <Building className="w-12 h-12 mx-auto mb-6 text-secondary" />
              <h4 className="text-xl font-semibold mb-4 text-primary dark:text-white">Consórcio Imobiliário</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Realize o sonho da casa própria com as melhores condições do mercado.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center
            transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <Car className="w-12 h-12 mx-auto mb-6 text-secondary" />
              <h4 className="text-xl font-semibold mb-4 text-primary dark:text-white">Consórcio Automobilístico</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Planejamento inteligente para a conquista do seu veículo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-primary dark:text-white mb-8">
              Vamos conversar?
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Entre em contato conosco para uma consultoria personalizada e descubra as melhores opções para você.
            </p>
            <ContactFormModal value={'Agendar Conversa'} />
            {/* <Button className="bg-secondary hover:bg-secondary/90 text-primary text-lg px-8">
              Agendar Conversa
            </Button> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12 dark:bg-gray-950">
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

      <WhatsAppButton />
    </div>
  );
};

export default Index;
