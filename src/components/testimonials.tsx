import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'

type Testimonial = {
  name: string
  role: string
  image: string
  quote: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Pr. Khaoula Ajbal',
    role: 'Head of R&D at LSIA',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    quote: 'Tailus is really extraordinary and very practical, no need to break your head. A real gold mine.',
  },
  {
    name: 'Abderrahman E.',
    role: 'Founder - DriveMe',
    image: 'https://randomuser.me/api/portraits/men/6.jpg',
    quote: 'With no experience in webdesign I just redesigned my entire website in a few minutes with tailwindcss thanks to Tailus.',
  },
  {
    name: 'Yucel Faruksahan',
    role: 'Tailkits Creator',
    image: 'https://randomuser.me/api/portraits/men/7.jpg',
    quote: 'Great work on tailfolio template. This is one of the best personal website that I have seen so far :)',
  },
  {
    name: 'Shekinah Tshiokufila',
    role: 'Senior Software Engineer',
    image: 'https://randomuser.me/api/portraits/men/4.jpg',
    quote: 'Tailus is redefining the standard of web design, with these blocks it provides an easy and efficient way for those who love beauty but may lack the time to implement it.',
  },
  {
    name: 'Oketa Fred',
    role: 'Fullstack Developer',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
    quote: 'I absolutely love Tailus! The component blocks are beautifully designed and easy to use, which makes creating a great-looking website a breeze.',
  },
  {
    name: 'Zeki',
    role: 'Founder of ChatExtend',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
    quote: "Using TailsUI has been like unlocking a secret design superpower. It's the perfect fusion of simplicity and versatility.",
  },
  {
    name: 'Joseph Kitheka',
    role: 'Fullstack Developer',
    image: 'https://randomuser.me/api/portraits/men/9.jpg',
    quote: 'Tailus has transformed the way I develop web applications. Their extensive collection of UI components, blocks, and templates has significantly accelerated my workflow.',
  },
  {
    name: 'Khatab Wedaa',
    role: 'MerakiUI Creator',
    image: 'https://randomuser.me/api/portraits/men/10.jpg',
    quote: "Tailus is an elegant, clean, and responsive tailwind css components it's very helpful to start fast with your project.",
  },
  {
    name: 'Rodrigo Aguilar',
    role: 'TailwindAwesome Creator',
    image: 'https://randomuser.me/api/portraits/men/11.jpg',
    quote: 'I love Tailus ❤️. The component blocks are well-structured, simple to use, and beautifully designed. It makes it really easy to have a good-looking website in no time.',
  },
]

function seededShuffle<T>(array: T[], seed: number): T[] {
  const result = [...array];
  let currentSeed = seed;

  // simple seeded pseudo-random generator
  const random = () => {
    const x = Math.sin(currentSeed++) * 10000;
    return x - Math.floor(x);
  };

  // Fisher–Yates shuffle
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

export default function WallOfLoveSection() {
  const seed = new Date().getTime() % 100000;
  const shuffled = seededShuffle(testimonials, seed);

  return (
    <section>
      <div className="mx-auto max-w-7xl px-6">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-3">
          {shuffled.map(({ name, role, quote, image }, index) => (
            <Card key={index} className="mb-3 break-inside-avoid">
              <CardContent className="grid grid-cols-[auto_1fr] gap-3">
                <Avatar className="size-9">
                  <AvatarImage
                    alt={name}
                    src={image}
                    loading="lazy"
                    width="120"
                    height="120"
                  />
                  <AvatarFallback>ST</AvatarFallback>
                </Avatar>

                <div>
                  <h3 className="font-medium">{name}</h3>

                  <span className="text-muted-foreground block text-sm tracking-wide">
                    {role}
                  </span>

                  <blockquote className="mt-3">
                    <p className="text-gray-700 dark:text-gray-300">{quote}</p>
                  </blockquote>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// TODO: redesign to fallback to 2 grid cols instead of the third wrapping to the next row
