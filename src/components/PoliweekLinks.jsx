import { Link } from 'react-router-dom'

const links = [
  {
    title: 'Ollama',
    description:
      "Serviço para rodar IA's localmente, como vimos anteriormente!",
    href: 'https://ollama.com',
    image: '/assets/ollama.png',
    badge: "Acesse aqui"
  },
  {
    title: 'Github Student Pack',
    description:
      'Pacote com centenas de coisas gratuítas, acessem com o e-mail da puc!!',
    href: 'https://education.github.com/pack',
    image: '/assets/github-student-pack.png',
    badge: 'Coisas grátis!!'
  },
  {
    title: 'Apple Developer Academy',
    description:
      'Fiquem de olho nos posts! Sempre tem novos cursos bem legais',
    href: 'https://anthropic.skilljar.com/',
    image: '/assets/academy.png',
    badge: 'Cursos Incríveis'
  },
  {
    title: 'Cursos Anthropic',
    description:
      'Cursos da Anthropic que mostram como usar não só o Claude, mas IA como um todo para melhorar seus processos',
    href: 'https://anthropic.skilljar.com/',
    image: '/assets/portifImg.png',
    badge: 'Cursos!!!'
  },
  {
    title: 'Fast.ai',
    description:
      'Curso de machine learning beeem low level, pra entender a base de tudo',
    href: 'https://fast.ai',
    image: '/assets/fastai.png',
    badge: 'Aprender mais'
  },
]

const PoliweekLinks = () => {
  return (
    <section className='relative flex-1 overflow-hidden py-20'>
      <div className='pointer-events-none absolute inset-0 -z-10 opacity-80 transition dark:opacity-60'>
        <div className='h-full w-full bg-[radial-gradient(circle_at_top,_rgba(236,72,153,0.18),_transparent_60%)] dark:bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.2),_transparent_60%)]' />
      </div>

      <div className='relative mx-auto flex max-w-6xl flex-col px-4 pb-16 pt-12 sm:px-6 lg:px-8'>
        <header className='text-center text-stone-900 transition dark:text-white'>
          <p className='inline-flex items-center gap-2 rounded-full border border-stone-200/40 bg-stone-100/60 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-pink-500 backdrop-blur dark:border-white/20 dark:bg-white/10 dark:text-pink-200'>
            Poliweek 2025
          </p>
          <h1 className='mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl'>
            Links!!!
          </h1>
          <p className='mx-auto mt-4 max-w-2xl text-base text-stone-600 dark:text-white/70 sm:text-lg'>
            Bons estudos!
          </p>
          <div className='mt-10 inline-flex items-center justify-center gap-3 text-sm text-stone-600 dark:text-white/70'>
            <Link
              to='/'
              className='inline-flex items-center gap-2 rounded-full border border-stone-300/70 bg-white/70 px-5 py-2 font-semibold text-stone-800 shadow-sm transition hover:-translate-y-0.5 hover:border-pink-400/70 hover:text-pink-600 dark:border-white/20 dark:bg-white/10 dark:text-white'
            >
              <span
                aria-hidden='true'
                className='inline-block rotate-180 text-lg'
              >
                ↩
              </span>
              Back 
            </Link>
          </div>
        </header>

        <main className='mt-16 grid grid-cols-1 gap-10 md:grid-cols-2'>
          {links.map(link => (
            <a
              key={link.title}
              href={link.href}
              target='_blank'
              rel='noopener noreferrer'
              className='group relative overflow-hidden rounded-3xl border border-stone-200/70 bg-white/80 shadow-[0_20px_60px_-20px_rgba(15,23,42,0.35)] backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-pink-400/60 hover:shadow-[0_30px_80px_-20px_rgba(236,72,153,0.45)] dark:border-white/10 dark:bg-white/5 dark:shadow-[0_20px_60px_-20px_rgba(15,23,42,0.85)]'
            >
              <div className='relative h-48 overflow-hidden'>
                <img
                  src={link.image}
                  alt={link.title}
                  className='h-full w-full object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-110'
                  loading='lazy'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90' />
                <span className='absolute left-5 top-5 rounded-full bg-pink-500/90 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white shadow-lg shadow-pink-500/40 backdrop-blur-sm'>
                  {link.badge}
                </span>
              </div>

              <div className='flex h-48 flex-col justify-between space-y-4 p-6 text-stone-900 transition dark:text-white'>
                <div>
                  <h2 className='text-2xl font-semibold leading-tight transition group-hover:text-pink-600 dark:group-hover:text-pink-200'>
                    {link.title}
                  </h2>
                  <p className='mt-3 text-sm text-stone-600 dark:text-white/70'>
                    {link.description}
                  </p>
                </div>
                <div className='flex items-center justify-between text-sm font-semibold text-pink-600 dark:text-pink-200'>
                  <span>Open resource</span>
                  <span
                    aria-hidden='true'
                    className='text-xl transition-transform duration-300 group-hover:translate-x-1'
                  >
                    ↗
                  </span>
                </div>
              </div>
            </a>
          ))}
        </main>
      </div>
    </section>
  )
}

export default PoliweekLinks
