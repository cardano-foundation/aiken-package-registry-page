'use client'
import 'react-multi-carousel/lib/styles.css'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import Button from '@/components/Button'
import Input from '@/components/Input'
import TextArea from '@/components/TextArea'
import Checkbox from '@/components/Checkbox'

export default function AcceleratorFormPage() {
  const portalId = '7759219'
  const formGuid = '55021061-2e72-402c-9882-404c0bf498a6'

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [phone, setPhone] = useState('')
  const [website, setWebsite] = useState('')
  const [launchYear, setLaunchYear] = useState('')
  const [sector, setSector] = useState('')
  const [pitchDeck, setPitchDeck] = useState('')
  const [pitchLink, setPitchLink] = useState('')
  const [problemStatement, setProblemStatement] = useState('')
  const [solutionProposition, setSolutionProposition] = useState('')
  const [gdprConsent, setGdprConsent] = useState(false)

  const submitForm = async (event) => {
    event.preventDefault()

    if (!gdprConsent) {
      toast.error('You need to agree to our privacy policy before registering.')
      return
    }

    if (!problemStatement || !solutionProposition) {
      toast.error('Please fill in all required fields.')
      return
    }

    const formData = new FormData()
    formData.append('firstname', firstName)
    formData.append('lastname', lastName)
    formData.append('email', email)
    formData.append('company', companyName)
    formData.append('phone', phone)
    formData.append('website', website)
    formData.append('start_date', launchYear)
    formData.append('industry', sector)
    formData.append('documentation_files', pitchDeck)
    formData.append('hs_linkedin_url', pitchLink)
    formData.append(
      '0-2/customer_pain_points___target_audience',
      problemStatement,
    )
    formData.append('0-2/value_proposition', solutionProposition)

    const response = await fetch(
      `/api/preregister?portalId=${portalId}&formGuid=${formGuid}`,
      {
        method: 'POST',
        body: formData,
      },
    )

    const responseText = await response.text()

    try {
      const data = JSON.parse(responseText)

      if (data.errors) {
        data.errors.forEach((error) => {
          if (error.message.includes('fields.firstname')) {
            toast.error('The first name field is invalid.')
          } else if (error.message.includes('fields.email')) {
            toast.error('The email field is invalid.')
          }
        })
      }

      if (data.inlineMessage) {
        toast.success('🎉 Thank you for your submission!')
        // Reset form fields
        setFirstName('')
        setLastName('')
        setEmail('')
        setCompanyName('')
        setPhone('')
        setWebsite('')
        setLaunchYear('')
        setSector('')
        setPitchDeck('')
        setPitchLink('')
        setProblemStatement('')
        setSolutionProposition('')
        setGdprConsent(true)
      }
    } catch (error) {
      console.error('Failed to parse JSON response:', error)
      toast.error('An error occurred while processing your request.')
    }
  }

  return (
    <main className="bg-cf-blue-1000">
      <section className="bg-cf-green-900 relative isolate flex items-center justify-center overflow-hidden py-36 pb-16 sm:pb-32 sm:pt-48">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-center px-6 sm:px-8 lg:px-12">
          <h1 className="text-center text-4xl font-bold leading-tight text-white sm:text-6xl">
            Cardano Accelerator <br /> Pilot Program <br /> Application Form
          </h1>
        </div>

        {/* Background gradient shapes  */}
        <div
          className="mix-blend-plus-lighten safari-fix absolute left-[-32rem] top-[-45rem] -z-10 h-[72rem] w-[85rem] overflow-hidden rounded-full bg-gradient-to-bl from-[#05153D] to-[#0033AD] opacity-100 blur-[206px]"
          aria-hidden="true"
        />
        <div
          className="mix-blend-plus-lighten safari-fix absolute left-[-32rem] top-[35rem] -z-10 h-[72rem] w-[72rem] overflow-hidden rounded-full bg-gradient-to-bl from-[#05153D] to-[#0033AD] opacity-100 blur-[206px]"
          aria-hidden="true"
        />
        <div
          className="mix-blend-plus-lighten safari-fix absolute right-[-32rem] top-[15rem] -z-10 h-[72rem] w-[82rem] overflow-hidden rounded-full bg-gradient-to-bl from-[#05153D] to-[#0033AD] opacity-100 blur-[206px]"
          aria-hidden="true"
        />
        <div
          className="mix-blend-plus-lighten safari-fix absolute right-[-32rem] top-[-50rem] -z-10 h-[52rem] w-[80rem] overflow-hidden rounded-full bg-gradient-to-bl from-[#05153D] to-[#0033AD] opacity-100 blur-[206px]"
          aria-hidden="true"
        />
        <div className="absolute right-0 top-0 -z-10 h-full w-full bg-[url('/noise-light.png')] bg-repeat mix-blend-overlay"></div>
      </section>

      <section className="relative bg-white pb-12 pt-60 ">
        <div className="mx-auto -mt-96 flex w-full max-w-4xl flex-col items-center justify-center px-4 sm:-mt-[20rem] sm:px-8 lg:px-12">
          <form
            onSubmit={(e) => submitForm(e)}
            className="grid w-full gap-x-6 gap-y-6 rounded-3xl bg-white px-4 py-6 shadow-xl md:grid-cols-2 md:gap-y-12 md:px-20 md:py-16"
          >
            <Input
              className="col-span-1 w-full"
              type="text"
              icon={
                <svg
                  className="h-5 w-5 text-cf-gray-200"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M2.7085 18.3333V17.2917C2.7085 16.3341 2.8971 15.3859 3.26354 14.5013C3.62998 13.6166 4.16708 12.8128 4.84418 12.1357C5.52127 11.4586 6.3251 10.9215 7.20976 10.555C8.09443 10.1886 9.04261 10 10.0002 10C10.9577 10 11.9059 10.1886 12.7906 10.555C13.6752 10.9215 14.4791 11.4586 15.1561 12.1357C15.8332 12.8128 16.3703 13.6166 16.7368 14.5013C17.1032 15.3859 17.2918 16.3341 17.2918 17.2917V18.3333"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.0002 10.0001C11.1052 10.0001 12.165 9.56109 12.9464 8.77969C13.7278 7.99829 14.1668 6.93848 14.1668 5.83341C14.1668 4.72835 13.7278 3.66854 12.9464 2.88714C12.165 2.10573 11.1052 1.66675 10.0002 1.66675C8.89509 1.66675 7.83529 2.10573 7.05388 2.88714C6.27248 3.66854 5.8335 4.72835 5.8335 5.83341C5.8335 6.93848 6.27248 7.99829 7.05388 8.77969C7.83529 9.56109 8.89509 10.0001 10.0002 10.0001V10.0001Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
              name="first_name"
              id="first_name"
              label="First Name"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Input
              className="col-span-1 w-full"
              type="text"
              icon={
                <svg
                  className="h-5 w-5 text-cf-gray-200"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M2.7085 18.3333V17.2917C2.7085 16.3341 2.8971 15.3859 3.26354 14.5013C3.62998 13.6166 4.16708 12.8128 4.84418 12.1357C5.52127 11.4586 6.3251 10.9215 7.20976 10.555C8.09443 10.1886 9.04261 10 10.0002 10C10.9577 10 11.9059 10.1886 12.7906 10.555C13.6752 10.9215 14.4791 11.4586 15.1561 12.1357C15.8332 12.8128 16.3703 13.6166 16.7368 14.5013C17.1032 15.3859 17.2918 16.3341 17.2918 17.2917V18.3333"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.0002 10.0001C11.1052 10.0001 12.165 9.56109 12.9464 8.77969C13.7278 7.99829 14.1668 6.93848 14.1668 5.83341C14.1668 4.72835 13.7278 3.66854 12.9464 2.88714C12.165 2.10573 11.1052 1.66675 10.0002 1.66675C8.89509 1.66675 7.83529 2.10573 7.05388 2.88714C6.27248 3.66854 5.8335 4.72835 5.8335 5.83341C5.8335 6.93848 6.27248 7.99829 7.05388 8.77969C7.83529 9.56109 8.89509 10.0001 10.0002 10.0001V10.0001Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
              name="last_name"
              id="last_name"
              label="Last Name"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <Input
              className="col-span-1 w-full"
              type="email"
              icon={
                <svg
                  className="h-5 w-5 text-cf-gray-200"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M18.3332 5.94946V14.2828C18.3332 14.8353 18.1137 15.3652 17.723 15.7559C17.3323 16.1466 16.8024 16.3661 16.2498 16.3661H3.74984C3.1973 16.3661 2.6674 16.1466 2.2767 15.7559C1.886 15.3652 1.6665 14.8353 1.6665 14.2828V5.94946"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.3332 5.94954C18.3332 5.39701 18.1137 4.86711 17.723 4.47641C17.3323 4.0857 16.8024 3.86621 16.2498 3.86621H3.74984C3.1973 3.86621 2.6674 4.0857 2.2767 4.47641C1.886 4.86711 1.6665 5.39701 1.6665 5.94954L8.89567 10.4634C9.22678 10.6704 9.60938 10.7801 9.99984 10.7801C10.3903 10.7801 10.7729 10.6704 11.104 10.4634L18.3332 5.94954Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
              name="email"
              id="email"
              label="Email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              className="col-span-1 w-full"
              type="text"
              icon={
                <svg
                  className="h-5 w-5 text-cf-gray-200"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M2.7085 18.3333V17.2917C2.7085 16.3341 2.8971 15.3859 3.26354 14.5013C3.62998 13.6166 4.16708 12.8128 4.84418 12.1357C5.52127 11.4586 6.3251 10.9215 7.20976 10.555C8.09443 10.1886 9.04261 10 10.0002 10C10.9577 10 11.9059 10.1886 12.7906 10.555C13.6752 10.9215 14.4791 11.4586 15.1561 12.1357C15.8332 12.8128 16.3703 13.6166 16.7368 14.5013C17.1032 15.3859 17.2918 16.3341 17.2918 17.2917V18.3333"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.0002 10.0001C11.1052 10.0001 12.165 9.56109 12.9464 8.77969C13.7278 7.99829 14.1668 6.93848 14.1668 5.83341C14.1668 4.72835 13.7278 3.66854 12.9464 2.88714C12.165 2.10573 11.1052 1.66675 10.0002 1.66675C8.89509 1.66675 7.83529 2.10573 7.05388 2.88714C6.27248 3.66854 5.8335 4.72835 5.8335 5.83341C5.8335 6.93848 6.27248 7.99829 7.05388 8.77969C7.83529 9.56109 8.89509 10.0001 10.0002 10.0001V10.0001Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
              name="company_name"
              id="company_name"
              label="Company Name"
              placeholder="Company name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
            <Input
              className="col-span-1 w-full"
              type="number"
              icon={
                <svg
                  className="h-5 w-5 text-cf-gray-200"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <g clipPath="url(#clip0_733_109)">
                    <path
                      d="M12.2514 17.3851L12.2605 17.3915C13.0476 17.8926 13.982 18.1102 14.9095 18.0084C15.837 17.9065 16.7019 17.4913 17.3615 16.8313L17.9344 16.2584C18.0614 16.1315 18.1621 15.9808 18.2308 15.815C18.2995 15.6492 18.3349 15.4714 18.3349 15.2919C18.3349 15.1124 18.2995 14.9347 18.2308 14.7688C18.1621 14.603 18.0614 14.4524 17.9344 14.3255L15.5178 11.9107C15.3909 11.7838 15.2403 11.683 15.0745 11.6143C14.9086 11.5456 14.7309 11.5102 14.5514 11.5102C14.3719 11.5102 14.1941 11.5456 14.0283 11.6143C13.8625 11.683 13.7118 11.7838 13.5849 11.9107C13.3287 12.1669 12.9813 12.3108 12.619 12.3108C12.2567 12.3108 11.9092 12.1669 11.653 11.9107L7.78901 8.04586C7.53287 7.78963 7.38897 7.44217 7.38897 7.07987C7.38897 6.71757 7.53287 6.3701 7.78901 6.11388C7.91598 5.987 8.0167 5.83633 8.08542 5.67051C8.15414 5.50468 8.18951 5.32694 8.18951 5.14744C8.18951 4.96794 8.15414 4.79019 8.08542 4.62437C8.0167 4.45854 7.91598 4.30788 7.78901 4.18099L5.37336 1.76625C5.11714 1.51011 4.76967 1.36621 4.40737 1.36621C4.04507 1.36621 3.69761 1.51011 3.44138 1.76625L2.86753 2.33919C2.20768 2.99883 1.79262 3.86385 1.69093 4.79131C1.58924 5.71878 1.80701 6.65318 2.30825 7.44012L2.31371 7.44923C4.9609 11.3658 8.33434 14.7386 12.2514 17.3851V17.3851Z"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_733_109">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              }
              name="phone"
              id="phone"
              label="Phone"
              placeholder="(123) 456 - 789"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <Input
              className="col-span-1 w-full"
              type="text"
              icon={
                <svg
                  className="h-5 w-5 text-cf-gray-200"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <g clipPath="url(#clip0_657_313)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.78963 11.4089L6.40196 8.5419C6.49111 8.14349 6.69191 7.77887 6.98074 7.49094L12.5756 1.93349C13.143 1.35418 13.9133 1.01939 14.723 1.00024C15.3337 0.991466 15.9225 1.22756 16.3587 1.65603C17.3117 2.78473 17.1887 4.47026 16.0819 5.44788L10.487 11.0558C10.1997 11.3453 9.83596 11.5466 9.43847 11.6359L6.57811 12.2497H6.41874C6.20963 12.2577 6.00991 12.1623 5.88435 11.9946C5.75879 11.8268 5.72339 11.6079 5.78963 11.4089ZM7.86989 8.39056C7.75236 8.50472 7.67072 8.65085 7.63502 8.81095L7.224 10.7699L9.17844 10.3495C9.33816 10.3138 9.48395 10.2319 9.59784 10.1141L15.1927 4.50623C15.8056 4.0144 15.9273 3.12777 15.4695 2.48839C15.2691 2.29645 15.0001 2.19342 14.723 2.20253C14.2454 2.22175 13.794 2.42685 13.4648 2.77425L7.86989 8.39056Z"
                    />
                    <path d="M15.9561 7.75999C15.6105 7.76452 15.3315 8.0442 15.3269 8.39056V13.1745C15.3382 13.8507 15.078 14.5031 14.6049 14.9853C14.1317 15.4674 13.4852 15.7389 12.8105 15.7389H4.81661C3.42197 15.7114 2.30445 14.5727 2.30016 13.1745V5.19565C2.32306 3.79586 3.46181 2.67317 4.85855 2.67336H9.6314C9.97885 2.67336 10.2605 2.39104 10.2605 2.04278C10.2605 1.69453 9.97885 1.41221 9.6314 1.41221H4.81661C2.72502 1.41208 1.02298 3.09933 1 5.19565V13.1745C1 15.2873 2.70875 17 4.81661 17H12.777C14.8815 16.9954 16.5852 15.284 16.5852 13.1745V8.39056C16.5807 8.0442 16.3016 7.76452 15.9561 7.75999Z" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.78963 11.4089L6.40196 8.5419C6.49111 8.14349 6.69191 7.77887 6.98074 7.49094L12.5756 1.93349C13.143 1.35418 13.9133 1.01939 14.723 1.00024C15.3337 0.991466 15.9225 1.22756 16.3587 1.65603C17.3117 2.78473 17.1887 4.47026 16.0819 5.44788L10.487 11.0558C10.1997 11.3453 9.83596 11.5466 9.43847 11.6359L6.57811 12.2497H6.41874C6.20963 12.2577 6.00991 12.1623 5.88435 11.9946C5.75879 11.8268 5.72339 11.6079 5.78963 11.4089ZM7.86989 8.39056C7.75236 8.50472 7.67072 8.65085 7.63502 8.81095L7.224 10.7699L9.17844 10.3495C9.33816 10.3138 9.48395 10.2319 9.59784 10.1141L15.1927 4.50623C15.8056 4.0144 15.9273 3.12777 15.4695 2.48839C15.2691 2.29645 15.0001 2.19342 14.723 2.20253C14.2454 2.22175 13.794 2.42685 13.4648 2.77425L7.86989 8.39056Z"
                      strokeWidth="0.5"
                    />
                    <path
                      d="M15.9561 7.75999C15.6105 7.76452 15.3315 8.0442 15.3269 8.39056V13.1745C15.3382 13.8507 15.078 14.5031 14.6049 14.9853C14.1317 15.4674 13.4852 15.7389 12.8105 15.7389H4.81661C3.42197 15.7114 2.30445 14.5727 2.30016 13.1745V5.19565C2.32306 3.79586 3.46181 2.67317 4.85855 2.67336H9.6314C9.97885 2.67336 10.2605 2.39104 10.2605 2.04278C10.2605 1.69453 9.97885 1.41221 9.6314 1.41221H4.81661C2.72502 1.41208 1.02298 3.09933 1 5.19565V13.1745C1 15.2873 2.70875 17 4.81661 17H12.777C14.8815 16.9954 16.5852 15.284 16.5852 13.1745V8.39056C16.5807 8.0442 16.3016 7.76452 15.9561 7.75999Z"
                      strokeWidth="0.5"
                    />
                  </g>
                </svg>
              }
              name="company-website"
              id="company-website"
              label="Company Website"
              placeholder="Company website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
            <Input
              className="col-span-1 w-full"
              type="number"
              icon={
                <svg
                  className="h-5 w-5 text-cf-gray-200"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <g clipPath="url(#clip0_657_313)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.78963 11.4089L6.40196 8.5419C6.49111 8.14349 6.69191 7.77887 6.98074 7.49094L12.5756 1.93349C13.143 1.35418 13.9133 1.01939 14.723 1.00024C15.3337 0.991466 15.9225 1.22756 16.3587 1.65603C17.3117 2.78473 17.1887 4.47026 16.0819 5.44788L10.487 11.0558C10.1997 11.3453 9.83596 11.5466 9.43847 11.6359L6.57811 12.2497H6.41874C6.20963 12.2577 6.00991 12.1623 5.88435 11.9946C5.75879 11.8268 5.72339 11.6079 5.78963 11.4089ZM7.86989 8.39056C7.75236 8.50472 7.67072 8.65085 7.63502 8.81095L7.224 10.7699L9.17844 10.3495C9.33816 10.3138 9.48395 10.2319 9.59784 10.1141L15.1927 4.50623C15.8056 4.0144 15.9273 3.12777 15.4695 2.48839C15.2691 2.29645 15.0001 2.19342 14.723 2.20253C14.2454 2.22175 13.794 2.42685 13.4648 2.77425L7.86989 8.39056Z"
                    />
                    <path d="M15.9561 7.75999C15.6105 7.76452 15.3315 8.0442 15.3269 8.39056V13.1745C15.3382 13.8507 15.078 14.5031 14.6049 14.9853C14.1317 15.4674 13.4852 15.7389 12.8105 15.7389H4.81661C3.42197 15.7114 2.30445 14.5727 2.30016 13.1745V5.19565C2.32306 3.79586 3.46181 2.67317 4.85855 2.67336H9.6314C9.97885 2.67336 10.2605 2.39104 10.2605 2.04278C10.2605 1.69453 9.97885 1.41221 9.6314 1.41221H4.81661C2.72502 1.41208 1.02298 3.09933 1 5.19565V13.1745C1 15.2873 2.70875 17 4.81661 17H12.777C14.8815 16.9954 16.5852 15.284 16.5852 13.1745V8.39056C16.5807 8.0442 16.3016 7.76452 15.9561 7.75999Z" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.78963 11.4089L6.40196 8.5419C6.49111 8.14349 6.69191 7.77887 6.98074 7.49094L12.5756 1.93349C13.143 1.35418 13.9133 1.01939 14.723 1.00024C15.3337 0.991466 15.9225 1.22756 16.3587 1.65603C17.3117 2.78473 17.1887 4.47026 16.0819 5.44788L10.487 11.0558C10.1997 11.3453 9.83596 11.5466 9.43847 11.6359L6.57811 12.2497H6.41874C6.20963 12.2577 6.00991 12.1623 5.88435 11.9946C5.75879 11.8268 5.72339 11.6079 5.78963 11.4089ZM7.86989 8.39056C7.75236 8.50472 7.67072 8.65085 7.63502 8.81095L7.224 10.7699L9.17844 10.3495C9.33816 10.3138 9.48395 10.2319 9.59784 10.1141L15.1927 4.50623C15.8056 4.0144 15.9273 3.12777 15.4695 2.48839C15.2691 2.29645 15.0001 2.19342 14.723 2.20253C14.2454 2.22175 13.794 2.42685 13.4648 2.77425L7.86989 8.39056Z"
                      strokeWidth="0.5"
                    />
                    <path
                      d="M15.9561 7.75999C15.6105 7.76452 15.3315 8.0442 15.3269 8.39056V13.1745C15.3382 13.8507 15.078 14.5031 14.6049 14.9853C14.1317 15.4674 13.4852 15.7389 12.8105 15.7389H4.81661C3.42197 15.7114 2.30445 14.5727 2.30016 13.1745V5.19565C2.32306 3.79586 3.46181 2.67317 4.85855 2.67336H9.6314C9.97885 2.67336 10.2605 2.39104 10.2605 2.04278C10.2605 1.69453 9.97885 1.41221 9.6314 1.41221H4.81661C2.72502 1.41208 1.02298 3.09933 1 5.19565V13.1745C1 15.2873 2.70875 17 4.81661 17H12.777C14.8815 16.9954 16.5852 15.284 16.5852 13.1745V8.39056C16.5807 8.0442 16.3016 7.76452 15.9561 7.75999Z"
                      strokeWidth="0.5"
                    />
                  </g>
                </svg>
              }
              name="launch-year"
              id="launch-year"
              label="Launch Year"
              placeholder="Launch date (year)"
              value={launchYear}
              onChange={(e) => setLaunchYear(e.target.value)}
            />
            <Input
              className="col-span-1 w-full"
              type="text"
              icon={
                <svg
                  className="h-5 w-5 text-cf-gray-200"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M2.7085 18.3333V17.2917C2.7085 16.3341 2.8971 15.3859 3.26354 14.5013C3.62998 13.6166 4.16708 12.8128 4.84418 12.1357C5.52127 11.4586 6.3251 10.9215 7.20976 10.555C8.09443 10.1886 9.04261 10 10.0002 10C10.9577 10 11.9059 10.1886 12.7906 10.555C13.6752 10.9215 14.4791 11.4586 15.1561 12.1357C15.8332 12.8128 16.3703 13.6166 16.7368 14.5013C17.1032 15.3859 17.2918 16.3341 17.2918 17.2917V18.3333"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.0002 10.0001C11.1052 10.0001 12.165 9.56109 12.9464 8.77969C13.7278 7.99829 14.1668 6.93848 14.1668 5.83341C14.1668 4.72835 13.7278 3.66854 12.9464 2.88714C12.165 2.10573 11.1052 1.66675 10.0002 1.66675C8.89509 1.66675 7.83529 2.10573 7.05388 2.88714C6.27248 3.66854 5.8335 4.72835 5.8335 5.83341C5.8335 6.93848 6.27248 7.99829 7.05388 8.77969C7.83529 9.56109 8.89509 10.0001 10.0002 10.0001V10.0001Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
              name="sector"
              id="sector"
              label="Sector"
              placeholder="Sector"
              value={sector}
              onChange={(e) => setSector(e.target.value)}
            />
                <div className="col-span-2">
            <Input
              className="col-span-1 w-full"
              type="file"
              icon={
                <svg
                  className="h-5 w-5 text-cf-gray-200"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M2.7085 18.3333V17.2917C2.7085 16.3341 2.8971 15.3859 3.26354 14.5013C3.62998 13.6166 4.16708 12.8128 4.84418 12.1357C5.52127 11.4586 6.3251 10.9215 7.20976 10.555C8.09443 10.1886 9.04261 10 10.0002 10C10.9577 10 11.9059 10.1886 12.7906 10.555C13.6752 10.9215 14.4791 11.4586 15.1561 12.1357C15.8332 12.8128 16.3703 13.6166 16.7368 14.5013C17.1032 15.3859 17.2918 16.3341 17.2918 17.2917V18.3333"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.0002 10.0001C11.1052 10.0001 12.165 9.56109 12.9464 8.77969C13.7278 7.99829 14.1668 6.93848 14.1668 5.83341C14.1668 4.72835 13.7278 3.66854 12.9464 2.88714C12.165 2.10573 11.1052 1.66675 10.0002 1.66675C8.89509 1.66675 7.83529 2.10573 7.05388 2.88714C6.27248 3.66854 5.8335 4.72835 5.8335 5.83341C5.8335 6.93848 6.27248 7.99829 7.05388 8.77969C7.83529 9.56109 8.89509 10.0001 10.0002 10.0001V10.0001Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
              name="pitch-deck"
              id="pitch-deck"
              label="Pitch deck"
              placeholder="Upload your pitch deck"
              onChange={(e) => setPitchDeck(e.target.files[0])}
              description="(Please upload your pitch deck (pdf). Your deck should include: Problem statement, solution/value proposition, business model, competitor analysis, market sizing, traction, founding team, previous and next fundraising)."
            />
            </div>
             <div className="col-span-2">
            <Input
              className="col-span- w-full"
              type="text"
              icon={
                <svg
                  className="h-5 w-5 text-cf-gray-200"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <g clipPath="url(#clip0_657_313)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.78963 11.4089L6.40196 8.5419C6.49111 8.14349 6.69191 7.77887 6.98074 7.49094L12.5756 1.93349C13.143 1.35418 13.9133 1.01939 14.723 1.00024C15.3337 0.991466 15.9225 1.22756 16.3587 1.65603C17.3117 2.78473 17.1887 4.47026 16.0819 5.44788L10.487 11.0558C10.1997 11.3453 9.83596 11.5466 9.43847 11.6359L6.57811 12.2497H6.41874C6.20963 12.2577 6.00991 12.1623 5.88435 11.9946C5.75879 11.8268 5.72339 11.6079 5.78963 11.4089ZM7.86989 8.39056C7.75236 8.50472 7.67072 8.65085 7.63502 8.81095L7.224 10.7699L9.17844 10.3495C9.33816 10.3138 9.48395 10.2319 9.59784 10.1141L15.1927 4.50623C15.8056 4.0144 15.9273 3.12777 15.4695 2.48839C15.2691 2.29645 15.0001 2.19342 14.723 2.20253C14.2454 2.22175 13.794 2.42685 13.4648 2.77425L7.86989 8.39056Z"
                    />
                    <path d="M15.9561 7.75999C15.6105 7.76452 15.3315 8.0442 15.3269 8.39056V13.1745C15.3382 13.8507 15.078 14.5031 14.6049 14.9853C14.1317 15.4674 13.4852 15.7389 12.8105 15.7389H4.81661C3.42197 15.7114 2.30445 14.5727 2.30016 13.1745V5.19565C2.32306 3.79586 3.46181 2.67317 4.85855 2.67336H9.6314C9.97885 2.67336 10.2605 2.39104 10.2605 2.04278C10.2605 1.69453 9.97885 1.41221 9.6314 1.41221H4.81661C2.72502 1.41208 1.02298 3.09933 1 5.19565V13.1745C1 15.2873 2.70875 17 4.81661 17H12.777C14.8815 16.9954 16.5852 15.284 16.5852 13.1745V8.39056C16.5807 8.0442 16.3016 7.76452 15.9561 7.75999Z" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.78963 11.4089L6.40196 8.5419C6.49111 8.14349 6.69191 7.77887 6.98074 7.49094L12.5756 1.93349C13.143 1.35418 13.9133 1.01939 14.723 1.00024C15.3337 0.991466 15.9225 1.22756 16.3587 1.65603C17.3117 2.78473 17.1887 4.47026 16.0819 5.44788L10.487 11.0558C10.1997 11.3453 9.83596 11.5466 9.43847 11.6359L6.57811 12.2497H6.41874C6.20963 12.2577 6.00991 12.1623 5.88435 11.9946C5.75879 11.8268 5.72339 11.6079 5.78963 11.4089ZM7.86989 8.39056C7.75236 8.50472 7.67072 8.65085 7.63502 8.81095L7.224 10.7699L9.17844 10.3495C9.33816 10.3138 9.48395 10.2319 9.59784 10.1141L15.1927 4.50623C15.8056 4.0144 15.9273 3.12777 15.4695 2.48839C15.2691 2.29645 15.0001 2.19342 14.723 2.20253C14.2454 2.22175 13.794 2.42685 13.4648 2.77425L7.86989 8.39056Z"
                      strokeWidth="0.5"
                    />
                    <path
                      d="M15.9561 7.75999C15.6105 7.76452 15.3315 8.0442 15.3269 8.39056V13.1745C15.3382 13.8507 15.078 14.5031 14.6049 14.9853C14.1317 15.4674 13.4852 15.7389 12.8105 15.7389H4.81661C3.42197 15.7114 2.30445 14.5727 2.30016 13.1745V5.19565C2.32306 3.79586 3.46181 2.67317 4.85855 2.67336H9.6314C9.97885 2.67336 10.2605 2.39104 10.2605 2.04278C10.2605 1.69453 9.97885 1.41221 9.6314 1.41221H4.81661C2.72502 1.41208 1.02298 3.09933 1 5.19565V13.1745C1 15.2873 2.70875 17 4.81661 17H12.777C14.8815 16.9954 16.5852 15.284 16.5852 13.1745V8.39056C16.5807 8.0442 16.3016 7.76452 15.9561 7.75999Z"
                      strokeWidth="0.5"
                    />
                  </g>
                </svg>
              }
              name="pitch-link"
              id="pitch-link"
              label="Pitch link"
              placeholder="Pitch link"
              value={pitchLink}
              onChange={(e) => setPitchLink(e.target.value)}
              description="Please add a 2 minute video presentation introducing yourself and your business."
            />
            </div>
            <div className="col-span-2">
              <TextArea
                className="col-span-1 w-full"
                icon={
                  <svg
                    className="h-5 w-5 text-cf-gray-200"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <g clipPath="url(#clip0_657_313)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.78963 11.4089L6.40196 8.5419C6.49111 8.14349 6.69191 7.77887 6.98074 7.49094L12.5756 1.93349C13.143 1.35418 13.9133 1.01939 14.723 1.00024C15.3337 0.991466 15.9225 1.22756 16.3587 1.65603C17.3117 2.78473 17.1887 4.47026 16.0819 5.44788L10.487 11.0558C10.1997 11.3453 9.83596 11.5466 9.43847 11.6359L6.57811 12.2497H6.41874C6.20963 12.2577 6.00991 12.1623 5.88435 11.9946C5.75879 11.8268 5.72339 11.6079 5.78963 11.4089ZM7.86989 8.39056C7.75236 8.50472 7.67072 8.65085 7.63502 8.81095L7.224 10.7699L9.17844 10.3495C9.33816 10.3138 9.48395 10.2319 9.59784 10.1141L15.1927 4.50623C15.8056 4.0144 15.9273 3.12777 15.4695 2.48839C15.2691 2.29645 15.0001 2.19342 14.723 2.20253C14.2454 2.22175 13.794 2.42685 13.4648 2.77425L7.86989 8.39056Z"
                      />
                      <path d="M15.9561 7.75999C15.6105 7.76452 15.3315 8.0442 15.3269 8.39056V13.1745C15.3382 13.8507 15.078 14.5031 14.6049 14.9853C14.1317 15.4674 13.4852 15.7389 12.8105 15.7389H4.81661C3.42197 15.7114 2.30445 14.5727 2.30016 13.1745V5.19565C2.32306 3.79586 3.46181 2.67317 4.85855 2.67336H9.6314C9.97885 2.67336 10.2605 2.39104 10.2605 2.04278C10.2605 1.69453 9.97885 1.41221 9.6314 1.41221H4.81661C2.72502 1.41208 1.02298 3.09933 1 5.19565V13.1745C1 15.2873 2.70875 17 4.81661 17H12.777C14.8815 16.9954 16.5852 15.284 16.5852 13.1745V8.39056C16.5807 8.0442 16.3016 7.76452 15.9561 7.75999Z" />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.78963 11.4089L6.40196 8.5419C6.49111 8.14349 6.69191 7.77887 6.98074 7.49094L12.5756 1.93349C13.143 1.35418 13.9133 1.01939 14.723 1.00024C15.3337 0.991466 15.9225 1.22756 16.3587 1.65603C17.3117 2.78473 17.1887 4.47026 16.0819 5.44788L10.487 11.0558C10.1997 11.3453 9.83596 11.5466 9.43847 11.6359L6.57811 12.2497H6.41874C6.20963 12.2577 6.00991 12.1623 5.88435 11.9946C5.75879 11.8268 5.72339 11.6079 5.78963 11.4089ZM7.86989 8.39056C7.75236 8.50472 7.67072 8.65085 7.63502 8.81095L7.224 10.7699L9.17844 10.3495C9.33816 10.3138 9.48395 10.2319 9.59784 10.1141L15.1927 4.50623C15.8056 4.0144 15.9273 3.12777 15.4695 2.48839C15.2691 2.29645 15.0001 2.19342 14.723 2.20253C14.2454 2.22175 13.794 2.42685 13.4648 2.77425L7.86989 8.39056Z"
                        strokeWidth="0.5"
                      />
                      <path
                        d="M15.9561 7.75999C15.6105 7.76452 15.3315 8.0442 15.3269 8.39056V13.1745C15.3382 13.8507 15.078 14.5031 14.6049 14.9853C14.1317 15.4674 13.4852 15.7389 12.8105 15.7389H4.81661C3.42197 15.7114 2.30445 14.5727 2.30016 13.1745V5.19565C2.32306 3.79586 3.46181 2.67317 4.85855 2.67336H9.6314C9.97885 2.67336 10.2605 2.39104 10.2605 2.04278C10.2605 1.69453 9.97885 1.41221 9.6314 1.41221H4.81661C2.72502 1.41208 1.02298 3.09933 1 5.19565V13.1745C1 15.2873 2.70875 17 4.81661 17H12.777C14.8815 16.9954 16.5852 15.284 16.5852 13.1745V8.39056C16.5807 8.0442 16.3016 7.76452 15.9561 7.75999Z"
                        strokeWidth="0.5"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_657_313">
                        <rect width="18" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                }
                name="problem-statement"
                id="problem-statement"
                label="Problem statement"
                rows="6"
                placeholder="Type problem statement"
                value={problemStatement}
                onChange={(e) => setProblemStatement(e.target.value)}
                description="Describe the problem you are solving / looking to solve."
              />
            </div>
            <div className="col-span-2">
              <TextArea
                className="col-span-1 w-full"
                icon={
                  <svg
                    className="h-5 w-5 text-cf-gray-200"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <g clipPath="url(#clip0_657_313)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.78963 11.4089L6.40196 8.5419C6.49111 8.14349 6.69191 7.77887 6.98074 7.49094L12.5756 1.93349C13.143 1.35418 13.9133 1.01939 14.723 1.00024C15.3337 0.991466 15.9225 1.22756 16.3587 1.65603C17.3117 2.78473 17.1887 4.47026 16.0819 5.44788L10.487 11.0558C10.1997 11.3453 9.83596 11.5466 9.43847 11.6359L6.57811 12.2497H6.41874C6.20963 12.2577 6.00991 12.1623 5.88435 11.9946C5.75879 11.8268 5.72339 11.6079 5.78963 11.4089ZM7.86989 8.39056C7.75236 8.50472 7.67072 8.65085 7.63502 8.81095L7.224 10.7699L9.17844 10.3495C9.33816 10.3138 9.48395 10.2319 9.59784 10.1141L15.1927 4.50623C15.8056 4.0144 15.9273 3.12777 15.4695 2.48839C15.2691 2.29645 15.0001 2.19342 14.723 2.20253C14.2454 2.22175 13.794 2.42685 13.4648 2.77425L7.86989 8.39056Z"
                      />
                      <path d="M15.9561 7.75999C15.6105 7.76452 15.3315 8.0442 15.3269 8.39056V13.1745C15.3382 13.8507 15.078 14.5031 14.6049 14.9853C14.1317 15.4674 13.4852 15.7389 12.8105 15.7389H4.81661C3.42197 15.7114 2.30445 14.5727 2.30016 13.1745V5.19565C2.32306 3.79586 3.46181 2.67317 4.85855 2.67336H9.6314C9.97885 2.67336 10.2605 2.39104 10.2605 2.04278C10.2605 1.69453 9.97885 1.41221 9.6314 1.41221H4.81661C2.72502 1.41208 1.02298 3.09933 1 5.19565V13.1745C1 15.2873 2.70875 17 4.81661 17H12.777C14.8815 16.9954 16.5852 15.284 16.5852 13.1745V8.39056C16.5807 8.0442 16.3016 7.76452 15.9561 7.75999Z" />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.78963 11.4089L6.40196 8.5419C6.49111 8.14349 6.69191 7.77887 6.98074 7.49094L12.5756 1.93349C13.143 1.35418 13.9133 1.01939 14.723 1.00024C15.3337 0.991466 15.9225 1.22756 16.3587 1.65603C17.3117 2.78473 17.1887 4.47026 16.0819 5.44788L10.487 11.0558C10.1997 11.3453 9.83596 11.5466 9.43847 11.6359L6.57811 12.2497H6.41874C6.20963 12.2577 6.00991 12.1623 5.88435 11.9946C5.75879 11.8268 5.72339 11.6079 5.78963 11.4089ZM7.86989 8.39056C7.75236 8.50472 7.67072 8.65085 7.63502 8.81095L7.224 10.7699L9.17844 10.3495C9.33816 10.3138 9.48395 10.2319 9.59784 10.1141L15.1927 4.50623C15.8056 4.0144 15.9273 3.12777 15.4695 2.48839C15.2691 2.29645 15.0001 2.19342 14.723 2.20253C14.2454 2.22175 13.794 2.42685 13.4648 2.77425L7.86989 8.39056Z"
                        strokeWidth="0.5"
                      />
                      <path
                        d="M15.9561 7.75999C15.6105 7.76452 15.3315 8.0442 15.3269 8.39056V13.1745C15.3382 13.8507 15.078 14.5031 14.6049 14.9853C14.1317 15.4674 13.4852 15.7389 12.8105 15.7389H4.81661C3.42197 15.7114 2.30445 14.5727 2.30016 13.1745V5.19565C2.32306 3.79586 3.46181 2.67317 4.85855 2.67336H9.6314C9.97885 2.67336 10.2605 2.39104 10.2605 2.04278C10.2605 1.69453 9.97885 1.41221 9.6314 1.41221H4.81661C2.72502 1.41208 1.02298 3.09933 1 5.19565V13.1745C1 15.2873 2.70875 17 4.81661 17H12.777C14.8815 16.9954 16.5852 15.284 16.5852 13.1745V8.39056C16.5807 8.0442 16.3016 7.76452 15.9561 7.75999Z"
                        strokeWidth="0.5"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_657_313">
                        <rect width="18" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                }
                name="solution-proposition"
                id="solution-proposition"
                label="Solution/Value Proposition*"
                rows="6"
                placeholder="Type Solution/Value Proposition*"
                value={solutionProposition}
                onChange={(e) => setSolutionProposition(e.target.value)}
                description="Describe the solution you are building and how you are incorporating or considering blockchain technology."
              />
            </div>
            <div className="col-span-2">
              <Checkbox
                name="gdpr"
                id="gdpr"
                label="I allow Cardano Foundation to store and process the personal information submitted above to provide the service requested. I agree to receive communications from Cardano Foundation. *"
                onChange={(e) => setGdprConsent(e.target.checked)}
              />
            </div>
            <Button
              type="submit"
              className="bg-cf-blue-600 px-5 py-6 text-lg text-white "
            >
              Send Message
            </Button>
          </form>
        </div>
      </section>
    </main>
  )
}
