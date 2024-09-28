import React from 'react'

const page = () => {
    return (
        <div className=' font-gadems px-4 sm:px-16 md:px-20 overflow-x-hidden py-20 text-center'>
            <h1 className='text-3xl xxs:text-4xl md:text-[42px] lg:text-6xl my-2'>Privacy Policy</h1>
            <p className='font-ardestine text-sm my-2'>Last updated: 2024-09-28</p>
            <div className='font-montserrat w-full text-left mt-10'>
                <div className='my-4 '>
                    <h4 className='text-2xl font-bold'>1. Introduction</h4>
                    <p className='ml-6'>At Cryptoscope, your privacy is important to us. However, we do not collect any personal information from our users.</p>
                </div>

                <div className='my-4 '>
                    <h4 className=' text-2xl font-bold'>2. Information We Do Not Collect</h4>
                    <p className='ml-6'>We do not collect, store, or process any personal data, including but not limited to names, email addresses, or browsing information. No user accounts or registration is required to access the Website.</p>
                </div>

                <div className='my-4 '>
                    <h4 className=' text-2xl font-bold'>3. Cookies and Tracking</h4>
                    <p className='ml-6'>
                        We do not use cookies or any tracking technologies on Cryptoscope. We do not engage in any form of data tracking or analytics that would collect user information. </p>

                </div>


                <div className='my-4 '>
                    <h4 className=' text-2xl font-bold'>4. Third-Party Links</h4>
                    <p className='ml-6'>
                        While we do not collect data, the Website may contain links to third-party cryptocurrency platforms and social media handles. These third-party sites may collect data, and we encourage you to review their privacy policies.
                    </p>
                </div>

                <div className='my-4 '>
                    <h4 className=' text-2xl font-bold'>5. Data Security</h4>
                    <p className='ml-6'>
                        As we do not collect any user data, we do not implement any specific data security measures for personal information. However, we take general precautions to ensure the security of the Website’s infrastructure.
                    </p>
                </div>

                <div className='my-4 '>
                    <h4 className=' text-2xl font-bold'>6. Changes to This Policy</h4>
                    <p className='ml-6'>
                        Cryptoscope reserves the right to modify this Privacy Policy at any time. Changes will be effective immediately upon posting on the Website.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default page