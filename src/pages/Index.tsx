import { Shield, Building, Car, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { ContactFormModal } from "@/components/ContactFormModal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Index = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="min-h-screen bg-black dark:bg-gray-900 transition-colors duration-200">
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

      {/* Banner Carousel */}
      <section className="pt-24">
        <Carousel className="w-full">
          <CarouselContent>
            <CarouselItem>
              <div className="relative h-[500px] w-full">
                <img 
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=80" 
                  alt="Banner Seguro Vida"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent">
                  <div className="container mx-auto h-full flex items-center px-4">
                    <div className="max-w-xl">
                      <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        Seguro de Vida
                      </h2>
                      <p className="text-xl text-white/90 mb-8">
                        Proteja o futuro de quem você ama com as melhores coberturas
                      </p>
                      <Button className="bg-secondary hover:bg-secondary/90 text-primary">
                        Saiba Mais
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative h-[500px] w-full">
                <img 
                  src="https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=1600&q=80" 
                  alt="Banner Seguro Saúde"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent">
                  <div className="container mx-auto h-full flex items-center px-4">
                    <div className="max-w-xl">
                      <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        Seguro Saúde
                      </h2>
                      <p className="text-xl text-white/90 mb-8">
                        Cuide da sua saúde com os melhores planos do mercado
                      </p>
                      <Button className="bg-secondary hover:bg-secondary/90 text-primary">
                        Conheça os Planos
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative h-[500px] w-full">
                <img 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=80" 
                  alt="Banner Seguro Residencial"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent">
                  <div className="container mx-auto h-full flex items-center px-4">
                    <div className="max-w-xl">
                      <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        Seguro Residencial
                      </h2>
                      <p className="text-xl text-white/90 mb-8">
                        Proteção completa para seu lar e sua família
                      </p>
                      <Button className="bg-secondary hover:bg-secondary/90 text-primary">
                        Fazer Cotação
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </section>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-primary dark:text-white mb-6">
            Protegendo o que importa para você
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Soluções completas em seguros e consórcios para sua tranquilidade e realização dos seus sonhos.
          </p>
          
          {/* Carousel Section */}
          <div className="max-w-5xl mx-auto mb-12">
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem>
                  <div className="p-1">
                    <div className="relative h-[400px] rounded-lg overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80" 
                        alt="Seguro Empresarial"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                        <h3 className="text-white text-2xl font-bold">Seguro Empresarial</h3>
                        <p className="text-white/90">Proteja seu negócio com as melhores coberturas</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="p-1">
                    <div className="relative h-[400px] rounded-lg overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1523676060187-f55189a71f5e?w=800&q=80" 
                        alt="Seguro Residencial"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                        <h3 className="text-white text-2xl font-bold">Seguro Residencial</h3>
                        <p className="text-white/90">Seu lar protegido contra imprevistos</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="p-1">
                    <div className="relative h-[400px] rounded-lg overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80" 
                        alt="Seguro Automotivo"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                        <h3 className="text-white text-2xl font-bold">Seguro Automotivo</h3>
                        <p className="text-white/90">Tranquilidade para suas viagens</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>

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
