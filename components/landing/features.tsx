import { IconBarbell, IconChartLine, IconFlame, IconRobot } from '@tabler/icons-react';

const FEATURES = [
  {
    title: 'ИИ Генерация',
    description:
      'Создавайте уникальные программы тренировок, адаптированные под ваши цели и оборудование.',
    icon: IconRobot,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Управление тренировками',
    description: 'Удобный календарь и конструктор занятий для полного контроля над процессом.',
    icon: IconBarbell,
    color: 'from-primary to-yellow-500',
  },
  {
    title: 'Аналитика прогресса',
    description: 'Визуализируйте свои достижения с помощью детальных графиков и логов.',
    icon: IconChartLine,
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Счетчик калорий',
    description: 'Следите за питанием и балансом энергии для максимальной эффективности.',
    icon: IconFlame,
    color: 'from-orange-500 to-red-500',
  },
];

export const Features = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight">
            Все инструменты в одном месте
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Мы объединили лучшие практики фитнеса и современные технологии, чтобы вы могли
            сфокусироваться на результате.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-3xl border border-border bg-card hover:bg-muted transition-all hover:-translate-y-2 duration-300 shadow-sm"
            >
              <div
                className={`w-12 h-12 rounded-2xl mx-auto md:mx-0 mb-6 flex items-center justify-center bg-linear-to-br ${feature.color} text-primary-foreground shadow-lg`}
              >
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center sm:text-left">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-center sm:text-left">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
