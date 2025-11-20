import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const facades = [
  {
    id: 1,
    name: 'МДФ в пленке ПВХ "Белый матовый"',
    type: 'ПВХ пленка',
    image: 'https://cdn.poehali.dev/projects/7f144805-8830-45b0-863b-db60309e86f8/files/f77eb7bb-48b0-485e-82db-2c1163ce2117.jpg',
    specs: {
      thickness: '16-19 мм',
      density: '720-780 кг/м³',
      moisture: 'Влагостойкий',
      coating: 'ПВХ пленка 0.3 мм',
      resistance: 'Устойчив к царапинам',
    },
    price: 'от 2 500 ₽/м²'
  },
  {
    id: 2,
    name: 'МДФ эмаль "Синий глянец"',
    type: 'Эмаль',
    image: 'https://cdn.poehali.dev/projects/7f144805-8830-45b0-863b-db60309e86f8/files/9d90e266-4947-4555-8d52-c5c2c22147fa.jpg',
    specs: {
      thickness: '16-19 мм',
      density: '720-780 кг/м³',
      moisture: 'Влагостойкий',
      coating: 'Полиуретановая эмаль',
      resistance: 'Высокая стойкость к истиранию',
    },
    price: 'от 4 200 ₽/м²'
  },
  {
    id: 3,
    name: 'МДФ эмаль "Серый матовый"',
    type: 'Эмаль',
    image: 'https://cdn.poehali.dev/projects/7f144805-8830-45b0-863b-db60309e86f8/files/ccc23b9d-2e6c-421e-be82-ad028932ce85.jpg',
    specs: {
      thickness: '16-19 мм',
      density: '720-780 кг/м³',
      moisture: 'Влагостойкий',
      coating: 'Полиуретановая эмаль',
      resistance: 'Высокая стойкость к истиранию',
    },
    price: 'от 4 000 ₽/м²'
  }
];

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Layers" size={28} className="text-primary" />
              <span className="text-2xl font-bold">МДФ Фасады</span>
            </div>
            <div className="hidden md:flex gap-6">
              <a href="#catalog" className="hover:text-primary transition-colors">Каталог</a>
              <a href="#advantages" className="hover:text-primary transition-colors">Преимущества</a>
              <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button>Заказать расчет</Button>
          </div>
        </nav>
      </header>

      <section className="bg-gradient-to-br from-background to-secondary py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Мебельные фасады из МДФ премиум качества
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
              Производим фасады с покрытием ПВХ пленкой и эмалью. Полный цикл от разработки до установки.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in">
              <Button size="lg" className="text-lg">
                Смотреть каталог
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                Получить образцы
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Преимущества МДФ фасадов
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-scale">
              <CardHeader>
                <Icon name="Shield" size={48} className="text-primary mb-4" />
                <CardTitle>Долговечность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Срок службы более 15 лет благодаря высокой плотности МДФ и качественному покрытию
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover-scale">
              <CardHeader>
                <Icon name="Droplet" size={48} className="text-primary mb-4" />
                <CardTitle>Влагостойкость</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Специальная обработка обеспечивает защиту от влаги и деформации
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover-scale">
              <CardHeader>
                <Icon name="Palette" size={48} className="text-primary mb-4" />
                <CardTitle>Широкий выбор</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Более 200 цветов и текстур ПВХ пленки, любой оттенок эмали по RAL
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Каталог фасадов
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facades.map((facade) => (
              <Card key={facade.id} className="overflow-hidden hover-scale">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={facade.image} 
                    alt={facade.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-xl">{facade.name}</CardTitle>
                    <Badge variant="secondary">{facade.type}</Badge>
                  </div>
                  <CardDescription className="text-2xl font-semibold text-primary">
                    {facade.price}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="specs" className="border-none">
                      <AccordionTrigger className="text-sm font-semibold">
                        Технические характеристики
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Толщина:</span>
                            <span className="font-medium">{facade.specs.thickness}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Плотность:</span>
                            <span className="font-medium">{facade.specs.density}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Влагостойкость:</span>
                            <span className="font-medium">{facade.specs.moisture}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Покрытие:</span>
                            <span className="font-medium">{facade.specs.coating}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Устойчивость:</span>
                            <span className="font-medium">{facade.specs.resistance}</span>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    Заказать образец
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              Оставьте заявку и мы перезвоним в течение 15 минут
            </p>
            
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Input 
                      type="tel"
                      placeholder="Телефон"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Комментарий (необязательно)"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Отправить заявку
                    <Icon name="Send" size={18} className="ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <Icon name="Phone" size={32} className="text-primary mx-auto mb-2" />
                <p className="font-semibold">+7 (495) 123-45-67</p>
              </div>
              <div className="text-center">
                <Icon name="Mail" size={32} className="text-primary mx-auto mb-2" />
                <p className="font-semibold">info@mdf-fasady.ru</p>
              </div>
              <div className="text-center">
                <Icon name="MapPin" size={32} className="text-primary mx-auto mb-2" />
                <p className="font-semibold">Москва, ул. Примерная, 1</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm opacity-80">
            © 2024 МДФ Фасады. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
