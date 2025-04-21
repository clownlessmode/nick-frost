import { Metadata } from "next";
import { FC } from "react"
import '@app/styles/globals.css';
import '@app/styles/fonts.css';
import BlockPolice from "@features/blockPolice";
import AnotherHeader from "@widgets/AnotherHeader";
import Footer from "@widgets/footer";

export const metadata: Metadata = {
    title: "Axis",
    description: "Scalable systems for info businesses",
    openGraph: {
      title: "Axis",
      description: "Scalable systems for info businesses",
      images: [
        {
          url: "/social.ico",
          width: 32,
          height: 32
        }
      ]
    }
  };
  

const PrivacyPolicy: FC = () => {
    return (
        <div className="pt-[100px] pb-[40px]  antialiased bg-background md:px-[25vw] px-[20px] noise-bg overflow-x-hidden">
            <AnotherHeader />
            <header className="mb-[50px]">
                <p className="text-[24px] mb-[5px]">Privacy Policy</p>
                <p className="text-[20px]">Last Updated: April 21, 2025</p>
            </header>
            <main>
                <BlockPolice title="1. Who We Are" inSimpleTerms="We are a creator-focused brand. You are in good hands — and if you ever have questions, we are just an email away.">
                    <p>AXIS Creo is a U.S.-based brand helping creators grow their personal brands, build digital products, and scale with strategy. This website is part of that mission.</p>
                </BlockPolice>
                <BlockPolice title="2. What Information We Collect" inSimpleTerms="You tell us about yourself — and we only keep what helps us serve you better.">
                    <p>We collect only what you choose to share with us, including:</p>
                    <p>- Your name</p>
                    <p>- Email address</p>
                    <p>- Phone number</p>
                    <p>- Info about your business, niche, or goals (through forms)</p>
                </BlockPolice>
                <BlockPolice title="3. Why We Collect It" inSimpleTerms="We use your info to keep in touch, offer value, and help you grow. No weird stuff.">
                    <p>We use this information to:</p>
                    <p>- Reach out if you request support or info</p>
                    <p>- Send useful updates or content via email (with your permission)</p>
                    <p>- Understand how to serve creators like you more effectively</p>
                    <br/>
                    <p>We do not do profiling, sell your info, or make decisions about you automatically.</p>
                </BlockPolice>
                <BlockPolice title="4. Who We Share It With" inSimpleTerms="It stays between us.">
                    <p>We don’t sell, rent, or share your data with anyone else. Period.</p>
                </BlockPolice>
                <BlockPolice title="5. How We Store & Protect Your Data" inSimpleTerms="We keep your info safe, use it only when necessary, and you are always in control.">
                    <p>Your information is stored securely in private, access-controlled files and is only used for the purposes you've agreed to. We do not hold on to your data any longer than needed, and you can request deletion at any time by contacting us.</p>
                </BlockPolice>
                <BlockPolice title="6. Your Rights" inSimpleTerms="You are in control. If you want out, just say so.">
                    <p>You can:</p>
                    <p>- Ask to see what data we have</p>
                    <p>- Request that we delete your info</p>
                    <p>- Unsubscribe from emails anytime</p>
                    <br/>
                    <p>Just reach out to us via email.</p>
                </BlockPolice>
                <BlockPolice title="7. Cookies & Tracking" inSimpleTerms="No creepy ads or tracking here.">
                    <p>We currently don’t use cookies or third-party tracking tools.</p>
                </BlockPolice>
                <BlockPolice title="8. Legal Stuff" inSimpleTerms="We will stay compliant if anything changes — and keep you updated.">
                    <p>We follow U.S. privacy standards. If we begin serving users in other regions, we will update this policy to comply with laws like the GDPR (EU) or CCPA (California).</p>
                </BlockPolice>
                <BlockPolice title="9. Updates to This Policy" inSimpleTerms="If we make changes, we will let you know.">
                    <p>We may make updates to this Privacy Policy as AXIS Creo grows. The latest version will always be available on this page.</p>
                </BlockPolice>
                <BlockPolice title="Contact" last>
                    <p>If you have any questions, contact us at:</p>
                    <p>nikita@whynotlaunchformula.com</p>
                </BlockPolice>
            </main>
            <Footer />
        </div>
    )
}

export default PrivacyPolicy