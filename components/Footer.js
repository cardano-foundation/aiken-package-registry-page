import Logo from '@/components/Logo'

const footerNav = [
  { name: 'Home', href: '/' },
  { name: 'Course Overview', href: '#' },
  { name: 'Partners', href: '#' },
  { name: 'Contact Us', href: '#' },
  { name: 'Register/Login', href: '#' },
  { name: 'T&Cs', href: '#' },
]

const Footer = () => (
  <div className="relative isolate overflow-hidden py-12 sm:py-24 bg-cf-blue-900">
    <div className="flex flex-col md:flex-row  justify-between items-start mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 w-full">
      <Logo className="w-96 md:mr-1 mb-10 md:mb-0" />

      <div className="flex flex-col space-y-6">
        {footerNav.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-white hover:text-cf-gray-100 text-2xl"
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>

    {/* Background gradient shapes  */}
    <div
      className="absolute mix-blend-plus-lighter brightness-150 opacity-50 left-[-8rem] top-[-15rem] -z-10 overflow-hidden blur-[256px] w-[35rem] h-[35rem] rounded-full bg-gradient-to-br from-[#05A6EC] to-[#05A6EC]"
      aria-hidden="true"
    />
    <div
      className="absolute mix-blend-plus-lighten opacity-50 right-[-10rem] top-0 -z-10 overflow-hidden blur-[256px] w-[72rem] h-[72rem] rounded-full bg-gradient-to-tl from-cf-red-400 to-cf-red-500"
      aria-hidden="true"
    />
    <div className="absolute right-0 top-0 w-full h-screen bg-[url('/noise-light.png')] bg-repeat mix-blend-overlay -z-10"></div>
  </div>
)

export default Footer
